exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['test.spec.js'],

	   jasmineNodeOpts: {
		  showColors: true,
		  defaultTimeoutInterval: 30000
	   },

 capabilities: 
 { 
 'browserName': 'chrome'  
  },

framework: 'jasmine2'


};
