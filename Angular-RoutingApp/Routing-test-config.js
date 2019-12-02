exports.config = {
  allScriptsTimeout: 11000,


//The path to the chromeDriver exe
  //chromeDriver: 'chromedriver.exe',

//seleniumServerJar: 'selenium-server-standalone-2.53.1.jar',


  specs: 'Routing-Test-Scenarios.js',


  capabilities: {
    'browserName': 'chrome'
  },

  
  baseUrl: 'http://localhost:8090/RoutingApp/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
