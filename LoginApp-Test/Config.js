 

exports.config = {
 
 //The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

 
 //seleniumServerJar: 'selenium-server-standalone-2.53.1.jar',
  
  //Capabilities to be passed to the webdriver instance.

  capabilities: {
    'browserName': 'chrome'
  },

  //Launch the browser without selenium server
  directConnect: true,   //only for FF and Chrome browsers


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

 