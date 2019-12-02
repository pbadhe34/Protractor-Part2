
//Run the command in seperate window as npm run start-selenium to start the selenimum server

//then open another cmd window and run 'npm run test'

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

   specs: ['./test-spec.js'],

    directConnect: true,

    multiCapabilities: [{
     'browserName': 'firefox'
     }, {
    'browserName': 'chrome'
    }],

   // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        isVerbose: true,
        includeStackTrace: true

    }

};