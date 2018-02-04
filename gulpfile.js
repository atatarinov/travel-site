const gulp = require('gulp'),
      watch = require('gulp-watch'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      browserSync = require('browser-sync').create();

gulp.task('default', () => {
  console.log('!!!');
});

gulp.task('html', () => {
  console.log('HTML file changed!!');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
