//use strict';
 

describe('phoneModule App', function() {

 it("Test Simple", function() {      
       
      expect("data".toEqual("test"));
    });


  it('should redirect index.html to index.html#/phones', function() {
    browser().navigateTo('http://localhost:8080/EndToEndTest/app/index.html');
    console.log("Browser navigation to index.html#/phones");
    expect(browser().location().url()).toBe('http://localhost:8080/EndToEndTest/app/index.html#/phones');
  });


  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('http://localhost:8080/EndToEndTest/app/index.html#/phones');
    });


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(20);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(10);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(9);
    });


    it('should be possible to control phone order via the drop down select box', function() {
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('Alphabetical');

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('should render phone specific links', function() {
      input('query').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().url()).toBe('/phones/nexus-s1111');
    });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser().navigateTo('http://localhost:8080/EndToEndTest/app/index.html#/phones');
    });


    it('should display nexus-s page', function() {
      expect(binding('phone.name')).toBe('Nexus S');
    });


    it('should display the first phone image as the main phone image', function() {
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.phone-thumbs li:nth-child(3) img').click();
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

      element('.phone-thumbs li:nth-child(1) img').click();
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });
  });
});