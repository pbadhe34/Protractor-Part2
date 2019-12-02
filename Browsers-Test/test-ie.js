describe('Protractor Demo App', function() {
 //Disable Angular Detection
 beforeEach(function(){
       //disable angular detection
        browser.ignoreSynchronization = true;
      // browser. waitForAngularEnabled(false)
	});

  it('should have a title', function() {

    //debugger;
    console.log("launching the IE Browser");
    browser.get('http://www.google.com/').then(function(drv) {
                console.log("The browser launched by "+drv);
    });

     
    console.log("launched the IE Browser");

browser.getCapabilities().then(function(caps) {
                console.log("The test running in  "+caps.get('browserName'));
});
     
           
     browser.getTitle().then(function(webpagetitle){
           console.log("The page title read is "+webpagetitle);
     });

    //browser.debugger();

    expect(browser.getTitle()).toEqual('Google');   

   
  });
}); 

 