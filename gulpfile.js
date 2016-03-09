/**
 * Created by Admin on 09.03.2016.
 */
'use strict';
var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task('default', function () {
    gulp.src('./public/app/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/app/*.scss', ['sass']);
});