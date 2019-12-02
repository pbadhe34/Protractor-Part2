describe('Protractor Demo App', function() {
 //Disabled Angular synchroniation in config onprepare
  

  it('should have a title', function() {
    browser.get('https://www.google.co.in/');
    expect(browser.getTitle()).toEqual('Google');
   // browser.pause();
  });
}); 

 