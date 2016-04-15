module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],
    
    files: [
      'public/csv.js',
      'tests/*.js',
      'tests/*.css'
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
      'tests/index.html': ['html2js']
    },
    
    reporters: ['progress'],

      port: 9876,

      colors: true,

      logLevel: config.LOG_INFO,

     autoWatch: true,
  
     browsers: ['Firefox', 'PhantomJS'],

      captureTimeout: 60000,
 
     singleRun: false

    });
};
