describe('Protractor Demo App', function() {
 //Disable Angular Detection
 beforeEach(function(){
       //disable angular detection
        browser.ignoreSynchronization = true;
      // browser. waitForAngularEnabled(false)
	});

  it('should have a title', function() {
    //debugger;
    browser.get('http://www.google.com/');

   browser.getCapabilities().then(function(caps) {
                console.log("The test running in  "+caps.get('browserName'));
});
     
    //browser.pause();
   //browser.debugger();

     browser.sleep(2000); 
      
     browser.getTitle().then(function(webpagetitle){
           console.log("The page title read is "+webpagetitle);
     });

    

    expect(browser.getTitle()).toEqual('Google');   

   
  });
}); 

 