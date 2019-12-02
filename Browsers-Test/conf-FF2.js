/*
HKEY_LOCAL_MACHINE\SOFTWARE WOW6432Node\Mozilla\Mozilla Firefox\[VERSION]\Main\PathToExe
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Mozilla Firefox\[VERSION]\Main\PathToExe
*/

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  // seleniumAddress: 'http://localhost:4444/wd/hub',

//geckoDriver: "./node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.25.0.exe",

  //java -jar selenium-server-standalone-2.53.1.jar -Dwebdriver.gecko.driver="geckodriver-v0.25.0"

  specs: ['test-spec.js'],


   directConnect: true,

/*
 localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.ie.driver=./IEDriverServer_x64_3.141.0/IEDriverServer.exe'
    ]
  },
*/

localSeleniumStandaloneOpts: {
        jvmArgs: ['-Dwebdriver.gecko.driver="./node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.25.0.exe']
    },

 capabilities: { 
    'browserName': 'firefox',
     'marionette': true,
     'moz:firefoxOptions': {
       "binary": "C:/Program Files/Mozilla Firefox/firefox.exe"
      }       
  },

  // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        isVerbose: true,
        includeStackTrace: true

    } 
 
};