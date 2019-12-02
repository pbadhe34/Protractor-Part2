describe('angularjs homepage', function() {
  it('should launch the modulePage and verify the title ', function(){
    browser.ignoreSynchronization = true;
//pass the url of page to be tested
    browser.get('http://localhost:8090/WebApp/modulePage.html');
     
    var title = browser.getTitle(); 

    //to resolve the promise of title value
    title.then(function (text) {
        console.log("The title read is  "+title);
     });   

    var expectedTitle="Angular Module Page";

    console.log("The page title is  "+title); 

    expect(title).toEqual(expectedTitle);

    element(by.model('data')).sendKeys('Vijay');

    var text = element(by.id("divUser"));

    ///The expect function resolves the promise
    expect(text.getText()).toEqual('Vijay');   

    //var pText=element(by.binding("user"));
    // expect(pText.getInnerHtml()).toEqual('Hello..Baba');


/*
 loop to,list out properties and functions in selected element
 for(prop in pText)
console.log(prop+" = "+pText[prop]);

  The properties and functions list
ptor_,parentElementArrayFinder,elementArrayFinder_ ,click = function () {  }
       
sendKeys = function () { }
     
getTagName = function () {   }
getCssValue = function () {   }
getAttribute = function () {  }
getText = function () {   }
getSize = function () {   }
getLocation = function () {   }
isEnabled = function () {   }
isSelected = function () { }
submit = function () {   }
clear = function () {   }
isDisplayed = function () {  }
getOuterHtml = function () {   }
getInnerHtml = function () {   }
getId = function () {  }
getRawId = function () {   }
clone = function () {
  // A shallow copy is all we need since the underlyin
  // modified
   
}
locator = function () {}
getWebElement = function () { }
all = function (subLocator) {  }
element = function (subLocator) { }
$$ = function (selector) {
  return this.all(webdriver.By.css(selector));
}
$ = function (selector) {
  return this.element(webdriver.By.css(selector));
}
isPresent = function () {
  return this.parentElementArrayFinder.getWebElements(
    if (arr.length === 0) {
      return false;
    }
    return arr[0].isEnabled().then(function() {
      return true; // is present, whether it is enable
    }, function(err) {
      if (err.code == webdriver.error.ErrorCode.STALE_
        return false;
      } else {
        throw err;
      }
    });
  }, function(err) {
    if (err.code == webdriver.error.ErrorCode.NO_SUCH_
      return false;
    } else {
      throw err;
    }
  });
}
isElementPresent = function (subLocator) {  }
   
 
evaluate = function (expression) { }
allowAnimations = function (value) {  }


  */
 

 
  })
});


/*
The element function takes one parameter, a Locator, which describes how to find the element. The by object creates Locators. Here, we're using three types of Locators:

    by.model('first') to find the element with ng-model="first".  
    by.id('testbutton') to find the element with the given id. This finds <button id="testbutton">.

    by.binding('latest') to find the element bound to the variable latest. This finds the span containing {{latest}}
*/
 
  
/*
  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
*/