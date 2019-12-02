exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  //seleniumAddress: 'http://localhost:4444/wd/hub',  

  
localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.ie.driver=./IEDriverServer3.4.0.exe'
    ]
  },
  specs: ['protractor-test-scenario.js'],


  capabilities: {
    'browserName': 'internet explorer',
     version: 'ANY',
     'ignoreZoomSetting':true
  }
};