var requireGulp = require('gulp');
var requireWatch = require('gulp-watch');

requireGulp.task('default', function() {
	console.log('Hooray-- you created a gulp task');
});

requireGulp.task('html', function() {
	console.log('Imagine something useful being done to your HTML here');
});
requireGulp.task('styles', function() {
	console.log('Imagine Sass or PostCSS tasks running here.');
});

requireGulp.task('watch', function() {
	requireWatch('./app/index.html', function() {
		requireGulp.start('html');
	});
	requireWatch('./app/assets/styles/**/*.css', function() {
		requireGulp.start('styles');
	});
});
