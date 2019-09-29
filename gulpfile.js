var requireGulp = require('gulp');
var requireWatch = require('gulp-watch');
var postCSS = require('gulp-postcss');
var autoPreFixer = require('autoprefixer');
var nestedCSS = require('postcss-nested');
var importCSS = require('postcss-import');

requireGulp.task('default', function() {
	console.log('Hooray-- you created a gulp task');
});

requireGulp.task('html', function() {
	console.log('Imagine something useful being done to your HTML here');
});
requireGulp.task('styles', function() {
	return requireGulp
		.src('./app/assets/styles/style.css')
		.pipe(postCSS([ importCSS, nestedCSS, autoPreFixer ]))
		.pipe(requireGulp.dest('./app/temp/styles'));
});

requireGulp.task('watch', function() {
	requireWatch('./app/index.html', function() {
		requireGulp.start('html');
	});
	requireWatch('./app/assets/styles/**/*.css', function() {
		requireGulp.start('styles');
	});
});
