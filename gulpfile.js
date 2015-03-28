
var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var traceur = require('gulp-traceur');

gulp.task('default', function() {
});

var watch = {};

;(function(scripts) {
    gulp.task('scripts', function() {
        gulp.src(scripts).
             pipe(gulp.dest('build/assets/js'));
             /*
        gulp.src(scripts).
             pipe(concat('monad.min.js')).
             pipe(uglify()).
             pipe(gulp.dest('build/assets/js'));
        gulp.src(scripts).
             pipe(concat('monad.es5.js')).
             pipe(traceur()).
             pipe(gulp.dest('build/assets/js'));
        gulp.src(scripts).
             pipe(concat('monad.es5.min.js')).
             pipe(traceur()).
             pipe(uglify()).
             pipe(gulp.dest('build/assets/js'));
             */
    });
    watch.scripts = scripts;
})([
    'vendor/angular-translate/angular-translate.js',
    'src/monad.js',
    'src/**/*.js'
]);

;(function(styles) {
    gulp.task('styles-project', function() {
        gulp.src('./src/_sass/project.scss').
             pipe(concat('project.scss')).
             pipe(compass({
                css: 'httpdocs/css',
                sass: 'src/_sass',
                import_path: [
                    'vendor/sensi/sensi/src',
                    'httpdocs/css/formalize/assets/css'
                ]
             })).
             pipe(gulp.dest('httpdocs/css'));
    });
    watch.project_styles = styles;
})([
    'src/_sass/**/*.scss',
    'vendor/sensi/sensi/src/**/*.scss',
    'httpdocs/css/formalize/assest/css/**/*.scss'
]);

;(function(assets) {
    gulp.task('assets-html', function() {
        gulp.src(assets).
             pipe(gulp.dest('build/assets/html'));
    });
    watch.assets_html = assets;
})(['src/**/*.html']);

gulp.task('watch', function() {
//    gulp.watch(watch['3rdparty'], ['scripts-3rdparty']);
//    gulp.watch(watch.libraries, ['scripts-libraries']);
    gulp.watch(watch.scripts, ['scripts']);
    gulp.watch(watch.assets_html, ['assets-html']);
//    gulp.watch(watch.project_styles, ['styles-project']);
});

