const gulp=require('gulp'),
      sass=require('gulp-sass');


      gulp.task('styles', () => {
        return gulp.src('./sass/app.component.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/app'))
      });

      gulp.task('watch', ()=> {
        gulp.watch('./sass/**/*.scss',['styles']);
      });

      gulp.task('default',['styles']);