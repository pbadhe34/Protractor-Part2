
//Run the command in seperate window as npm run start-selenium to start the selenimum server

//then open another cmd window and run 'npm run test'

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/app.spec.js'],
  capabilities: {
    browserName: 'chrome'   
  }
};