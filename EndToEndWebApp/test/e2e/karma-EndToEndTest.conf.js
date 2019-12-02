//End to end Test with Karma and karma-ng-scenario is NOT //recommennded; Use protractor for End to end Test 

module.exports = function(config){
  config.set({

    basePath : '.',

    files : [
  //'./lib/angular.js', 

  './lib/angular-mocks.js',

 //'./lib/angular-scenario.js',

 './node_modules/karma-ng-scenario/lib/angular-scenario.js',
'./node_modules/karma-ng-scenario/lib/adapter.js',

//'./node_modules/karma-ng-scenario/lib/index.js',

 

// './node_modules/karma-ng-scenario/lib/*.js',
     
//'./node_modules/karma-ng-scenario/lib/angular-scenario.js',
//'./node_modules/karma-ng-scenario/lib/adapter.js',
//'./node_modules/karma-ng-scenario/lib/index.js',

'Karma-test-scenarios.js'


      
         
    ],

    autoWatch : true,

   // frameworks: ['jasmine'],
    //test frameworks to use
     frameworks: ['jasmine', 'ng-scenario'],

    browsers : ['Chrome'],

    plugins : [            
            'karma-jasmine',
            'karma-ng-scenario',
            'karma-chrome-launcher',
            'karma-firefox-launcher',            
            'karma-junit-reporter' , 
            'karma-htmlfile-reporter' ,
            'karma-spec-reporter'                               
            ],
    
    
    //urlRoot : '/_karma_/',

reporters: ['progress','dots','spec','verbose','junit', 'html'],

specReporter: {
       maxLogLines: 25,
       suppressPassed: false,
       suppressFailed: false,
       suppressSkipped: false
    },

 
    htmlReporter: {
      outputFile: 'tests/EndEndTestResults.html',            
      
      pageTitle: 'EndToEnd Tests',
      subPageTitle: 'EndToEnd Test Application'
    },

    junitReporter : {
      outputFile: 'tests/e2e.xml',
      suite: 'e2e'
    }

  });
};
