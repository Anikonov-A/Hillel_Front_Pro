// const gulp = require('gulp');
import gulp from 'gulp';
// Такое подключение взял из документации
// const sass = require('gulp-sass')(require('sass'));
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import uglify from 'gulp-uglify'
import concat from 'gulp-concat';
import babel from 'gulp-babel'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import eslint from 'gulp-eslint'

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

function watcher(){
    return gulp.watch([JS_SRC_FOLDER,SCSS_SRC_FOLDER],{events:['change']},gulp.series(jsTask,buildStyles))
}
// Поигрался с линтером
// function lint() {
//     return gulp.src(JS_SRC_FOLDER)
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError());
// }
function jsTask(){
    return gulp.src([`js/domHelper.js`,'js/data.js','js/function.js','js/app.js'])
        .pipe(concat('build.js'))
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_FOLDER))
}
function buildStyles(){
    return gulp.src(SCSS_SRC_FOLDER)
        .pipe(sass())
        .pipe(autoprefixer({cascade:false}))
        .pipe(cleanCSS())
        .pipe(gulp.dest(BUILD_FOLDER))
}
gulp.task('default',gulp.series(jsTask,buildStyles,watcher))
