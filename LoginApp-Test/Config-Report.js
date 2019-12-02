//works with protractor version 4.0.11 and chrom eeversion 54
/*
In case of browser  connection isseues run
npm install protractor and webdriver-manager update from  node_modules\.bin path
  */


var HtmlReporter = require('protractor-html-screenshot-reporter');

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var jasmineReporters = require('jasmine-reporters');

exports.config = {
 
  //The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

//The path to the chromeDriver exe
 //Browser connectvity issues depenfs on versions
  //chromeDriver: 'chromedriver.exe',

seleniumServerJar: 'selenium-server-standalone-2.53.1.jar',
  
  //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

 /*
multiCapabilities: [
{
  'browserName': 'firefox'
},
 {
  'browserName': 'chrome'
},
{
  'browserName': 'phantomjs'
}

 ], 
*/

    
  //chromeOnly:false,

  directConnect: true,   //only for FF and Chrome

  //Specify the name of the specs files.

   specs: ['protractor-test-scenario.js'],

   // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',


  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true
  },

onPrepare: function() {
       /*
        jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: "html-screenshots"
      })
     );
      */
     
     jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'html-report/',
          screenshotsFolder: 'images',
          fixedScreenshotName: true,
          filePrefix: 'index',
          takeScreenshots: true 
 //When enabled, reporter create screenshots for specs.
        })
     );

jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));

   }

};

 