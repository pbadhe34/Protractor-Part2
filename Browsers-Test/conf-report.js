
var HtmlReporter = require('protractor-html-screenshot-reporter');

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var jasmineReporters = require('jasmine-reporters');



exports.config = {
//No initial running selenim  server:
// Protractor will start the selenium server

//Protractor uses selenium browser driver to connect to browsers 

  specs: ['./test-spec.js'],

  capabilities: {
    browserName: 'chrome'     
  },

   framework: 'jasmine2',


  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true
  },

   onPrepare: function() {
      
     
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