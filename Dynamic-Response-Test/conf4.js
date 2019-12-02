exports.config = { 
  
  specs: ['./test/app.spec.js'],

//No selenium server used
//Conect to the browser with web driver

  directConnect: true,
 
 /*
  capabilities: {
   browserName: 'chrome',
    //browserName: 'firefox',

    "marionette":true
    
  }
 */
 
 

//Run test across mutlipe browsers
multiCapabilities: [{
  'browserName': 'firefox'
}, {
  'browserName': 'chrome'
}]
 

};