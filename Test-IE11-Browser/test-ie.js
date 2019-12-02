describe('Protractor Test App', function() {
 //Disable Angular Detection

 beforeEach(function(){
       //disable angular detection
        browser.ignoreSynchronization = true;
        //browser. waitForAngularEnabled(false)

browser.manage().timeouts().implicitlyWait(10000);
browser.manage().timeouts().pageLoadTimeout(6000);

  // implicitly wait time
/*Implicit wait tries to find the element in first go, if element is not present implicit wait tries to find the element after 500ms of first polling, if element is not available on the second time also then implicitWait tries the third time after 500 ms of the second try and it goes on till the time reaches the 30,000 milliseconds (herea s specified).
*/

//If the page is not loaded within the given time, then the protractor throws a Timeout Error
 // 
	});

  it('should have a title', function() {
    

   //browser.manage().timeouts().implicitlyWait(10000)

   //browser.manage().timeouts().pageLoadTimeout(40000)
     
    console.log("launching the IE Browser");

    browser.get('http://www.google.com').then(function(drv)  {

              browser.getCapabilities().then(function(caps) {
              console.log("The test running in  "+caps.get('browserName'));             
             
     });
    
 });
    
       

     browser.getTitle().then(function(title){
     console.log(title);
     }); 


      //browser.sleep(1000);
 
    expect(browser.getTitle()).toEqual('Google');   

   
  });
}); 

 