exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['.test/app.spec.js'],

localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.gecko.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0.exe'
    ]
  },

 capabilities: { 
    'browserName': 'firefox',       
 
  }
 
 
};