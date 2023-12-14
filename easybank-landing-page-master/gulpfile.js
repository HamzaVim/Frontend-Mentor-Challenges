const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();

// Sass Task
function scssTask() {
  return src("app/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(dest("dist", { sourcemaps: "." }));
}

// Js Task
function jsTask() {
  return src("app/js/script.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

// Browsersync
function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

// Watch task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// Default gulp Task
exports.default = series(scssTask, browserSyncServer, watchTask);
