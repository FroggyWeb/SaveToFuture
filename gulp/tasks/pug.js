import gulp from "gulp";
// import pug from "gulp-pug";
import pugbem from "gulp-pugbem";
import plumber from "gulp-plumber";
import changed from "gulp-changed";
import replace from "gulp-replace";
import gulpif from "gulp-if";
import config from "../config";

var pug = require("gulp-pug-i18n");

pugbem.b = true;

const renderHtml = (onlyChanged) =>
  gulp
    .src([config.src.templates + "/[^_]*.pug"])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(
      gulpif(onlyChanged, changed(config.dest.html, { extension: ".html" }))
    )
    .pipe(replace(new RegExp("(../){2,}", "g"), "../"))
    // .pipe(replace("../", "./"))
    .pipe(
      pug({
        i18n: {
          locales: "_dev/locales/*", // locales: en.yml, de.json,
          filename: "{{lang}}/{{basename}}.html",
        },
        pretty: true, // Pug option
        plugins: [pugbem],
      })
    )
    // .pipe(pug({ pretty: true, plugins: [pugbem] }))
    // .pipe(gulp.dest({ dest: "_dest", locales: "_dev/locales/*.*" }.i18n.dest));
    .pipe(gulp.dest(config.dest.html));

const buildPug = () => renderHtml();
const watch = () => () => {
  gulp.watch([config.src.templates + "/**/[^_]*.pug"], buildPug);

  gulp.watch(
    [config.src.templates + "/**/_*.pug", config.src.templates + "/**/*.pug"],
    buildPug
  );
};

// const pugLang = () => {
//   var options = {
//     i18n: {
//       dest: "_dest",
//       locales: "test/locales/*.*",
//     },
//     pretty: true,
//   };
//   return gulp
//     .src("_dev/pug/*.pug")

//     .pipe(gulp.dest(options.i18n.dest));
// };

module.exports.watch = watch;
module.exports.build = buildPug;
