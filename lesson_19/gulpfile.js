// const gulp = require('gulp');
import gulp from 'gulp';
// Такое подключение взял из документации
// const sass = require('gulp-sass')(require('sass'));
// Тут замена из-за deprecated метода import dartSass from 'sass'
// import dartSass from 'sass';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

import uglify from 'gulp-uglify'
import concat from 'gulp-concat';
import babel from 'gulp-babel'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
//Линтер дал кучу ошибок при проверке когда вызывал его из папки JS
// import eslint from 'gulp-eslint'
import livereload from 'gulp-livereload'
import webserver from 'gulp-webserver'

const BUILD_FOLDER = './dist/';
const JS_SRC_FOLDER = './js/*.js'
const SCSS_SRC_FOLDER = './scss/*.scss'


function watcher() {
    livereload.listen();
    return gulp.watch([JS_SRC_FOLDER, SCSS_SRC_FOLDER], {events: ['change']}, gulp.series(jsTask, buildStyles))
}

// function lint() {
//     return gulp.src(JS_SRC_FOLDER)
//         .pipe(eslint({fix:true}))
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError());
// }


function webServer() {
    return gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            directoryListing: false,
            defaultFile: 'index.html'
        }));

}

function jsTask() {
    return gulp.src([`js/domHelper.js`, 'js/data.js', 'js/function.js', 'js/app.js'])
        .pipe(concat('build.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_FOLDER))
        .pipe(livereload())
}

function buildStyles() {
    return gulp.src(SCSS_SRC_FOLDER)
        .pipe(sass())
        .pipe(autoprefixer({cascade: false}))
        .pipe(cleanCSS())
        .pipe(gulp.dest(BUILD_FOLDER))
        .pipe(livereload())
}

gulp.task('default', gulp.series(jsTask, buildStyles,webServer, watcher))
