import gulp from "gulp";
import pug from "gulp-pug";
import pugbem from "gulp-pugbem";
import plumber from "gulp-plumber";
import changed from "gulp-changed";
import replace from "gulp-replace";
import gulpif from "gulp-if";
import data from "gulp-data";
import config from "../config";
const fs = require("fs");

pugbem.b = true;

const renderDoc = () =>
  gulp
    .src([config.src.templates + "/doc/*.pug"])

    .pipe(plumber({ errorHandler: config.errorHandler }))
    // .pipe(replace(new RegExp("(../){2,}", "g"), "../"))
    .pipe(replace("../../", "../"))
    .pipe(
      pug({
        data: {
          data: JSON.parse(fs.readFileSync("./_dev/locales/en.json")),
        },
        plugins: [pugbem],
      })
    )
    .pipe(gulp.dest(config.dest.html));

const buildDoc = () => renderDoc();

const watch = () => () => {
  gulp.watch([config.src.templates + "/**/*.pug"], buildDoc);
};

module.exports.watch = watch;
module.exports.build = buildDoc;
