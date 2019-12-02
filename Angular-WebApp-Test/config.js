 

exports.config = {
 
  //Connect to local selenimum server
//The address of a running selenium server.If not specified prottrcator will launch its own server

  //seleniumAddress: 'http://localhost:4444/wd/hub',

 directConnect: true,

  
  //Capabilities to be passed to the webdriver instance.
  capabilities: 
 { 
 'browserName': 'chrome'
  
  },
framework: 'jasmine2',

  
 //chromeDriver: 'chromedriver.exe',

  //Specify the name of the specs files.
  specs: ['example_spec.js'],
  
  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      defaultTimeoutInterval: 30000,
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true
  }
 

};