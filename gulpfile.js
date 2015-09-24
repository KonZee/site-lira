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
    cssnext = require('cssnext'),
    jshint = require('gulp-jshint'),
    csscomb = require('gulp-csscomb');

var path = {};
path.src = "src/";
path.dest = "dist/";

path.html = path.src + "html/**/*.*";

path.stylus = [
	path.src + "styles/custom/*.styl"
];

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
	.pipe(csscomb())
	.pipe(gulp.dest(path.dest + "css"))
	.pipe(browserSync.stream());
});

/*
 * Other
 */
gulp.task('clean', function(callback){
	del(path.dest);
});


gulp.task('copy-html', function(){
	return gulp.src(path.html)
	.pipe(gulp.dest(path.dest))
	.pipe(browserSync.stream());
});

/*
 * Watching && Browser Sync
 */
gulp.task('watch', function(){
	gulp.watch(path.html, ['copy-html']);
	gulp.watch(path.stylus, ['stylus']);
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
	runSequence(['copy-html', 'stylus'], ['watch', 'browsersync'], callback);
});