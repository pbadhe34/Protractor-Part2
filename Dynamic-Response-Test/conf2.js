exports.config = {
//No initial running selenim  server:
// Protractor will start the selenium server

//Protractor uses selenium browser driver to connect to browsers 

  specs: ['./test/app.spec.js'],
  capabilities: {
    browserName: 'chrome'     
  }
};