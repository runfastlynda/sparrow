var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
});
gulp.task('watch', function () {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch(['app/*.html', 'app/css/*.css', 'app/js/*.js', 'app/img/*'], browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
