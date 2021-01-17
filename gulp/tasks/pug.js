import gulp from "gulp";
// import pug from "gulp-pug";
import pugbem from "gulp-pugbem";
import plumber from "gulp-plumber";
import changed from "gulp-changed";
import replace from "gulp-replace";
import gulpif from "gulp-if";
import data from "gulp-data";
import config from "../config";
const fs = require("fs");

var pug = require("gulp-pug-i18n");

pugbem.b = true;

const renderHtml = (onlyChanged) =>
  gulp
    .src([
      config.src.templates + "/[^_]*.pug",
      !config.src.templates + "/doc/**",
    ])

    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(
      gulpif(onlyChanged, changed(config.dest.html, { extension: ".html" }))
    )
    // .pipe(replace(new RegExp("(../){2,}", "g"), "../"))
    .pipe(replace("../../", "../"))
    .pipe(
      pug({
        data: {
          priceData: JSON.parse(fs.readFileSync("./_dev/data/price.json")),
        },
        i18n: {
          locales: "./_dev/locales/*", // locales: en.yml, de.json,
          filename: "{{lang}}/{{basename}}.html",
        },
        pretty: true, // Pug option
        plugins: [pugbem],
      })
    )
    .pipe(gulp.dest(config.dest.html));

const buildPug = () => renderHtml();

const watch = () => () => {
  gulp.watch([config.src.templates + "/**/[^_]*.pug"], buildPug);
};

module.exports.watch = watch;
module.exports.build = buildPug;
