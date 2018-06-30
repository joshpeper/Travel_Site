var gulp = require('gulp'),
webpack = require('webpack-stream');

gulp.task('scripts', function(callback){
  return gulp.src('./app/assets/scripts/app.js')  
    .pipe(webpack(require('../../webpack.config.js')))
    .on('error', function (err) {
      console.log(err.toString());

      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/scripts/'))
});