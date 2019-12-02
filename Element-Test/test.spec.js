/*CSS select rules
 tag : div : $('div')
   based on id : '#div1'  : $('div#div1')  p#id1
based on parent type : $('div#test > p#id1')
 based on css class : $('div.MyClass,div.test') 
*/

describe('element present test',function(){
    beforeEach(function(){
       //disable angular detection
        browser.ignoreSynchronization = true;
	});
    
    it('Test for the element', function(){
        browser.driver.get('http://localhost:8090/Element-Test/')
        expect($('div').isPresent()).toBe(true)
        expect($('h1').getText()).toEqual('welcome')

        console.log(($('h1')).getText())



       //expect(element(by.id('div1')).isPresent()).toBe(true)
    })
})