const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
var clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack');
const webpackConfig= require('./webpack.config.js');

function cleanDist (){
    return gulp.src('./dist/', {read:false})
        .pipe(clean());
}

function buildStyles() {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass({style: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./src/css/'))
      .pipe(gulp.src('./src/css/*css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css'));
  };

function assets(){
    return new Promise ((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    })
}


exports.default = function(){
    gulp.watch('./src/scss/*.scss', { ignoreInitial: false}, buildStyles, minifyCSS,);
    gulp.watch('./src/*.js', {ignoreInitial: false}, assets);
}

exports.build = gulp.series
    (cleanDist,
        gulp.parallel(
            buildStyles,
            assets
    )
);
