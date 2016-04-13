
var gulp = require('gulp');
var publishToBower = require('gulp-bower-publish');


gulp.task('publish', function () {
    publishToBower();
});