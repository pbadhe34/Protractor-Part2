/*
HKEY_LOCAL_MACHINE\SOFTWARE WOW6432Node\Mozilla\Mozilla Firefox\[VERSION]\Main\PathToExe
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Mozilla Firefox\[VERSION]\Main\PathToExe
*/

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  //seleniumAddress: 'http://localhost:4444/wd/hub',

   specs: ['test-spec.js'],

    directConnect: true,


 capabilities: { 
    'browserName': 'firefox',
     'marionette': true  
 
  },

  // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        isVerbose: true,
        includeStackTrace: true

    } 
 
};