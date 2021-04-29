//https://qiita.com/KazuyoshiGoto/items/3059c99330cdc19e97ad
//https://www.radia.jp/archives/1190

const gulp = require("gulp");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const postcss = require("gulp-postcss");
const objectFit = require("postcss-object-fit-images");
const pug = require("gulp-pug");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

//setting : paths
const paths = {
  root: "./dist/",
  pug: "./src/pug/**/*.pug",
  html: "./dist/**/*.html",
  cssSrc: "./src/scss/**/*.scss",
  cssDist: "./dist/css/",
  jsSrc: "./src/js/**/*.js",
  jsDist: "./dist/js/",
  imgSrc: "./src/img/",
  imgDist: "./dist/img/",
};

//gulpコマンドの省略
const { watch, series, task, src, dest, parallel } = require("gulp");

//Sass
task("sass", function () {
  return src(paths.cssSrc)
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "compressed", // Minifyするなら'compressed'
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(postcss([objectFit]))
    .pipe(dest(paths.cssDist));
});

//Pug
task("pug", function () {
  return src([paths.pug, "!./src/pug/**/_*.pug"])
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(
      pug({
        pretty: true,
        basedir: "./src/pug",
      })
    )
    .pipe(dest(paths.html));
});

//js
task("js", function () {
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest(paths.jsDist));
});

//img
task("img", function () {
  gulp.src(paths.imgSrc).pipe(gulp.dest(paths.imgDist));
});

// browser-sync
task("browser-sync", () => {
  return browserSync.init({
    server: {
      baseDir: paths.root,
    },
    port: 8080,
    reloadOnRestart: true,
  });
});

// browser-sync reload
task("reload", (done) => {
  browserSync.reload();
  done();
});

//watch
task("watch", (done) => {
  watch([paths.cssSrc], series("sass", "reload"));
  watch([paths.jsSrc], series("js", "reload"));
  watch([paths.pug], series("pug", "reload"));
  watch([paths.imgSrc], series("img", "reload"));
  done();
});
task("default", parallel("watch", "browser-sync"));
