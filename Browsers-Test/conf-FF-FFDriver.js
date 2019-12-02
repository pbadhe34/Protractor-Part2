exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test-spec.js'],

 //In absence of above selinium server, Local server will be starrted with following options of driver path
 


/*
localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.gecko.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0.exe'
    ]
  },
*/

 capabilities: { 
    'browserName': 'firefox',       
 
  },

  // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        isVerbose: true,
        includeStackTrace: true

    }

 
 
};