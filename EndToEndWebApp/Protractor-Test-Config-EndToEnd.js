//works with protractor version 4.0.11 and chrom eeversion 54
/*
In case of browser  connection isseues run
npm install protractor and webdriver-manager update from  node_modules\.bin path
  */

exports.config = {
 
  //The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

//The path to the chromeDriver exe
//Chrome browser compatibility issues 
  //chromeDriver: 'chromedriver.exe',

 //seleniumServerJar: 'selenium-server-standalone-2.53.1.jar',
  
  //Capabilities to be passed to the webdriver instance.

  capabilities: {
    'browserName': 'chrome'
  },

//Launch the browser without selenium server
  //  directConnect: true,   //only for FF and Chrome browsers


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
  }
};

 