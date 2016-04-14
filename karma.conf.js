module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],
    
    files: [
      'public/csv.js',
      'test/test.js',
      'test/mocha.js',
      'test/mocha.css',
    ],
    
    client: {
          mocha: {
            ui: 'bdd'
          }
    },
    
    exclude: [
      'gulpfile.js'
    ],
    
    preprocessors: {
      'test/index.html': ['html2js']
    },
    
    reporters: ['progress'],

  port: 9876,

  colors: true,

  logLevel: config.LOG_INFO,

  autoWatch: true,

     browsers: ['Firefox', 'PhantomJS'],

  singleRun: false

    });
};