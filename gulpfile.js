var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    runSequence = require('run-sequence'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnext = require('cssnext');

var path = {};
path.src = "src/";
path.dest = "dist/";

path.jade = path.src + "templates/*.jade";

path.stylus = [
	path.src + "styles/custom/**/*.styl",
	path.src + "styles/bootstrap/bootstrap.styl"
];

path.js = path.src + "scripts/**/*.js";

path.images = path.src + "images/**/*.+(png|jpg|gif)";
path.svg= path.src + "images/**/*.svg";

path.fonts = path.src + "fonts/**/*.*";

/*
 * Layout
 */

gulp.task('jade', function(){
	return gulp.src(path.jade)
	.pipe(jade({pretty : true}))
	.pipe(gulp.dest(path.dest))
	.pipe(browserSync.stream());
});
/*
 * Styles
 */

gulp.task('stylus', function(){
	var processors = [
		autoprefixer(),
		mqpacker,
		cssnext()
	];
	return gulp.src(path.stylus)
	.pipe(stylus())
	.pipe(postcss(processors))
	.pipe(gulp.dest(path.dest + "css"))
	.pipe(browserSync.stream());
});

/*
 * JS
 */

/*
 * Other
 */
gulp.task('clean', function(callback){
	del(path.dest);
	return cache.clearAll(callback);
});

gulp.task('js', function(){
	return gulp.src(path.js)
	.pipe(gulp.dest(path.dest + "js"));
});

gulp.task('imagemin', function(){
	return gulp.src(path.images)
	.pipe(imagemin())
	.pipe(gulp.dest(path.dest + "images"));
});

gulp.task('svg', function(){
	return gulp.src(path.svg)
	.pipe(gulp.dest(path.dest + "images"));
});

gulp.task('fonts', function(){
	return gulp.src(path.fonts)
	.pipe(gulp.dest(path.dest + "css/fonts"));
});

/*
 * Watching && Browser Sync
 */
gulp.task('watch', function(){
	gulp.watch(path.jade, ['jade']);
	gulp.watch(path.stylus, ['stylus']);
	gulp.watch(path.js, ['js']);
	gulp.watch(path.images, ['imagemin']);
	gulp.watch(path.svg, ['svg']);
	gulp.watch(path.fonts, ['fonts']);
});

gulp.task('browsersync', function(){
	browserSync({
		server: {
			baseDir: path.dest,
			index: "index.html"
		},
		open: false,
	})
});

gulp.task('default', function(callback){
	runSequence(['jade', 'stylus', 'js', 'imagemin', 'svg', 'fonts'], ['watch', 'browsersync'], callback);
});