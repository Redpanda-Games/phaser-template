var gulp = require('gulp');
var less = require('gulp-less');
var eslint = require('gulp-eslint');
var eslintIfFixed = require('gulp-eslint-if-fixed');

gulp.task('defaukt', function () {
    gulp.run('watch');
});

gulp.task('less', function () {
    return gulp.src('./src/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('eslint', function () {
    return gulp.src(['./src/js/**/*.js','!src/js/lib/**','!node_modules/**'])
        .pipe(eslint({fix:true}))
        .pipe(eslint.format())
        .pipe(eslintIfFixed('./public/js'))
        .pipe(eslint.failAfterError());
});

gulp.task('copy-img', function () {
    return gulp.src(['./src/img/**/*'])
        .pipe(gulp.dest('./public/img'));
});

gulp.task('copy-audio', function () {
    return gulp.src(['./src/audio/**/*'])
        .pipe(gulp.dest('./public/audio'));
});

gulp.task('copy-video', function () {
    return gulp.src(['./src/video/**/*'])
        .pipe(gulp.dest('./public/video'));
});

gulp.task('copy-config', function () {
    return gulp.src(['./src/config/**/*'])
        .pipe(gulp.dest('./public/config'));
});

gulp.task('copy', function() {
    gulp.run('copy-img');
    gulp.run('copy-audio');
    gulp.run('copy-video');
    gulp.run('copy-config');
});

gulp.task('publish', function() {
    gulp.run('eslint');
    gulp.run('less');
    gulp.run('copy');
});

gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['eslint']);
    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch(['./src/img/**','./src/audio/**','./src/video/**','./src/config/**'], ['copy']);
});