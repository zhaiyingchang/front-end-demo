var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})
