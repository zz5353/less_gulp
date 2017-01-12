var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require('css-mqpacker'),
	csswring = require('csswring'),
	less = require('gulp-less'),
	path = require('path');

gulp.task('default', function() {
	var processors = [
	autoprefixer({
		browsers:['last 4 version']
	})//,
	// mqpacker,
	// csswring
	];
	return gulp.src('./stylesheets/*.less')
	.pipe(less())
	.pipe(postcss(processors))
	.pipe(gulp.dest('./stylesheets'));
});
