var gulp = require('gulp'),
    rename = require('gulp-rename'),
    traceur = require('gulp-traceur'),
    bs = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
      http = require('http');

// run init tasks
gulp.task('default', ['js', 'html', 'css']);

// run development task
gulp.task('dev', ['default', 'serve']);

// serve the build dir
gulp.task('serve', ['nodemon'], function (cb) {
  whenServerReady(function() {
    bs.init({
      proxy: 'localhost:3030'
    });
    runSequence('watch');
  })
  // bs.init({
  //   server: 'build'
  // })
});

gulp.task('serve:dist', ['nodemon:dist'])

gulp.task('nodemon:dist', function() {
  process.env.PORT = 8080
  process.env.IP = '0.0.0.0'
  return nodemon({
    script: 'server',
    ext: 'js',
    ignore: [],
    watch: ['server'],
  });
})

gulp.task('nodemon', function() {
  return nodemon({
    script: 'server',
    ext: 'js',
    ignore: [],
    watch: ['server'],
  });
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('client/**/*.js', ['js', 'reload']);
  gulp.watch('client/**/*.html', ['html', 'reload']);
  gulp.watch('client/**/*.css', ['reload:css']);
});

gulp.task('reload', function() {
  console.log('reloading')
  bs.reload();
})

function checkAppReady(cb) {
    var options = {
        host: 'localhost',
        port: 3030
    };
    http
        .get(options, () => cb(true))
        .on('error', () => cb(false));
}

function whenServerReady(cb) {
    var serverReady = false;
    var appReadyInterval = setInterval(() =>
        checkAppReady((ready) => {
            if (!ready || serverReady) {
                return;
            }
            clearInterval(appReadyInterval);
            serverReady = true;
            cb();
        }),
        100);
}


gulp.task('reload', function() {
  bs.reload();
});

// transpile & move js
gulp.task('js', function () {
  return gulp.src('client/**/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
  return gulp.src('client/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('client/**/*.css')
    .pipe(gulp.dest('build'))
});

gulp.task('reload:css', function() {
  return gulp.src('client/**/*.css')
    .pipe(gulp.dest('build'))
    .pipe(bs.stream());
});
