describe('Protractor Test App', function() {

  beforeEach(function(){
       //disable angular detection
        browser.ignoreSynchronization = true;
        //browser. waitForAngularEnabled(false)  
	});

   console.log("Running the test");

    it('It should have a title', async function() {
      await browser.get('http://www.google.com');
      expect(await browser.getTitle()).toEqual('Google');
    });
  }); 