var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus');

var path = {};
path.src = "src/";
path.dest = "dest/";

/*
 * Layout
 */
path.jade = path.src + "templates/*.jade";

gulp.task('jade', function(){
	return gulp.src(path.jade)
	.pipe(jade({pretty : true}))
	.pipe(gulp.dest(path.dest))
});
/*
 * Styles
 */
path.stylus = path.src + "styles/*.styl";

gulp.task('stylus', function(){
	return gulp.src(path.stylus)
	.pipe(stylus())
	.pipe(gulp.dest(path.dest + "css"))
});

/*
 * JS
 */
path.js = path.src + "scripts/**/*.js";

/*
 * Other
 */

/*
 * Watching
 */
gulp.task('watch', function(){
	gulp.watch(path.jade, ['jade']);
	gulp.watch(path.stylus, ['stylus']);
});

gulp.task('default', function(){
	console.log("gulp works");
});