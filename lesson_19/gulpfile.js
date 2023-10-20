// const gulp = require('gulp');
import gulp from 'gulp'



const BUILD_FOLDER = './dist/';
const JS_SRC_FOLDER = './js/*.js'
const SCSS_SRC_FOLDER = './scss/*.scss'

//Copy files
// gulp.task('default',()=>{
//     return gulp.src([SCSS_SRC_FOLDER,JS_SRC_FOLDER]).pipe(gulp.dest(BUILD_FOLDER))
// })
//

//Watcher and Copy
// function watcher() {
//     return gulp.watch([JS_SRC_FOLDER, SCSS_SRC_FOLDER], {events: ['change']}, copy)
// }
//
// function copy() {
//     return gulp.src([JS_SRC_FOLDER, SCSS_SRC_FOLDER]).pipe(gulp.dest(BUILD_FOLDER))
// }
//
//
// gulp.task('default', gulp.series(copy, watcher))
