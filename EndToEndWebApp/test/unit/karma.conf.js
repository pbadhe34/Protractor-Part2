module.exports = function(config){
  config.set({

    basePath : '.',


   //The orderr of including those files is IMPORTant!!
    files : [
       './lib/jasmine-2.0.0/jasmine.js',
       './lib/jasmine-2.0.0/jasmine-html.js',
       './lib/jasmine-2.0.0/boot.js',
       './lib/angular/angular.js',
       './lib/angular/angular-route.js',
       './lib/angular/angular-resource.js',       
       './lib/angular/angular-mocks.js',       
       './js/*.js',
        './unitTest-specs/controllersSpec.js' ,
        './unitTest-specs/filtersSpec.js'          
    ],

    autoWatch : true,

   //test frameworks to use
   frameworks: ['jasmine'],   
      

    browsers : ['Chrome'],

    plugins : [            
            'karma-jasmine',             
            'karma-chrome-launcher',
            'karma-firefox-launcher',            
            'karma-junit-reporter' , 
            'karma-htmlfile-reporter' ,
            'karma-spec-reporter'                               
            ],
       
     

reporters: ['progress','dots','spec','verbose','junit', 'html'],

specReporter: {
       maxLogLines: 25,
       suppressPassed: false,
       suppressFailed: false,
       suppressSkipped: false
    },
 
    htmlReporter: {
      outputFile: 'tests/UnitTestResults.html',            
      
      pageTitle: 'Angular Unit Test Application',
      subPageTitle: 'Angular Unit Test Results'
    },

    junitReporter : {
      outputFile: 'tests/unit.xml',
      suite: 'unit'
    }

  });
};