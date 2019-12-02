// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.

import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
    browser.get('http://localhost:8090/Angular-Todo/');
  });

it('should be able to add a todo item', function() { 
    // Entering application url in browser
    browser.get('http://localhost:8090/DataDriven-TestToDos/?');

    //Simulate- Enter text under TODO input field
    element(by.model('todoText')).sendKeys('write first protractor test');
    // Clicks on 'Add' button
    element(by.css('[value="add"]')).click(); 

    // Getting all Todo lists displayed
    var todoList = element.all(by.repeater('todo in todos'));

    // Asserting the TODO's count after addition as 6
    expect(todoList.count()).toEqual(6);
    //Verifying newly entered TODO is added
    expect(todoList.get(5).getText()).toEqual('write first protractor test');
     
  });
   
});
