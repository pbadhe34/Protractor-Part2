exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  //seleniumAddress: 'http://localhost:4444/wd/hub',  



 //In absence of above selinium server, Local server will be //starrted with following options of IE driver path
 

  
localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.ie.driver=./IEDriverServer3.4.0.exe'
    ]
  },
  specs: ['./test/app.spec.js'],

  capabilities: {
    'browserName': 'internet explorer',
     version: 'ANY',
     'ignoreZoomSetting':true
  }
};