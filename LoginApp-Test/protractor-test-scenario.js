'use strict'; 
describe('LoginApp Test Project', function() {  

    beforeEach(function(){
       //disable angular detection for non-angular web sites
        browser.ignoreSynchronization = true;
	});

  it('should load the default loginPage', function() { 
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:8090/loginApp/");
     
    var location = browser.getLocationAbsUrl();

     //Read the url in async promise way
    location.then(function(data){
      console.log("Browser url is "+data);
});
//Verify the defualt home page
expect(browser.getLocationAbsUrl()).toMatch("/LoginPage.html");  
});

it("The page title should be User Login Page", function() {   
     
   //Verify the title of the page
 expect(browser.getTitle()).toEqual("User Login Page");

});

});
 
 