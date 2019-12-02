"use strict";

beforeEach(
	function(){
		//browser.driver.manage().window().setSize(1280, 1024);
		browser.get("http://localhost:8090/Angular-Todo/#/");
	}
);

function hasClass(element, cls) {
	var className = cls.replace(/^\./, "");
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(className) !== -1;
    });
}

describe("Todo MVC Test", function(){
	 
	it("should enter a todo", function(){ 
		var inputField = element(by.model("todoText"));
		expect(inputField.isPresent()).toBeTruthy();  
		inputField.sendKeys("write a new review");
		inputField.getAttribute('value').then(function(inputtext){
			expect(inputtext).toEqual("write a new review");  
		});
	});

	 
	it("should save a todo", function(){
		var inputField = element(by.model("todoText")),
			todos = element.all(by.repeater("todo in todos"));
		inputField.sendKeys("write a new review");
		inputField.sendKeys(protractor.Key.ENTER);
		todos.last().getText().then(function(text){
			expect(text).toEqual("write a new review");  
		});

		inputField.getAttribute('value').then(function(inputtext){
			expect(inputtext).toEqual("");  
		});
	});

	 
	it("should edit a todo", function(){
		var todos = element.all(by.repeater("todo in todos")), 
			firstTodo = todos.first(),
			firstTodoInput = firstTodo.element(by.css("label")),
			title;

		todos.count().then(function(count){
			if (count){
				firstTodoInput.getText().then(function(text){
					title = text;

					browser.actions().doubleClick(firstTodo).perform();
					hasClass(firstTodo,"editing").then(function(hasClass){
						expect(hasClass).toBe(true); //3.1
					});

					browser.actions().sendKeys(" -xxx").perform();
					browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
					firstTodoInput.getText().then(function(text){
						expect(text).toEqual(title); //3.2
					});

					browser.actions().doubleClick(firstTodo).perform();
					browser.actions().sendKeys(" -new").perform();
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
					firstTodoInput.getText().then(function(newTitle){
						expect(newTitle).toEqual(title + " -new"); //3.3
					});

				});
			} else {
				console.info("there are no todos");
			}
		});
	});

	 
	it("should toggle the 'complete' attribute of an individual todo", function(){
		var todos = element.all(by.repeater("todo in todos"));
		hasClass(todos.first(), "completed").then(function(isCompleted){
			if (isCompleted){
				todos.first().element(by.css("input.toggle")).click();
				hasClass(todos.first(), "completed").then(function(isCompleted){
					expect(isCompleted).toBe(false);  
				});
			} else{
				todos.first().element(by.css("input.toggle")).click();
				hasClass(todos.first(), "completed").then(function(isCompleted){
					expect(isCompleted).toBe(true);  
				});
			}
		});
	});

	 
	it("should toggle the 'complete' attribute of all todos'", function(){
		element.all(by.repeater("todo in todos")).count().then(function(currentCount){
			element.all(by.css(".completed")).count().then(function(completeCount){
				element(by.css("#toggle-all")).click();
				if (currentCount === completeCount){
					// all todos completed
					element.all(by.css(".completed")).count().then(function(completeCount){
						expect(completeCount).toEqual(0); //5.1
					});
				} else {
					// not all todos completed
					element.all(by.css(".completed")).count().then(function(completeCount){
						expect(completeCount).toEqual(currentCount); //5.2
					});
				}
			});
		});
	});

	 
	it("should delete a todo", function(){
		var todos = element.all(by.repeater("todo in todos")),
			originalTodos;
		todos.map(function(todo){
			return todo.getText().then(function(text){
				return text;
			});
		}).then(function(data){
			originalTodos = data;
			originalTodos.shift(); // delete first todo
			browser.actions().mouseMove(todos.first()).perform();
			todos.first().element(by.css(".destroy")).click();

			todos.map(function(todo){
				return todo.getText().then(function(text){
					return text;
				});
			}).then(function(modifiedTodos){
				expect(originalTodos).toMatch(modifiedTodos); // 6.1
			});
		});
	});

	 
	it("should delete all completed todos", function(){
		var todos = element.all(by.repeater("todo in todos")),
			firstTodo = todos.first(),
			inputField = element(by.model("newTodo"));

		todos.count().then(function(count){
			if (count){
				todos.each(function(todo){
					hasClass(todo, "completed").then(function(isCompleted){
						if (!isCompleted){
							todo.element(by.css("input.toggle")).click();
						}
					});
				}).then(function(){
					element(by.css("#clear-completed")).isDisplayed().then(function(isDisplayed){
						expect(isDisplayed).toBeTruthy() //7.1
					});

					element(by.css("#clear-completed")).click();
					todos.count().then(function(count){
						expect(count).toBe(0); //7.3
					});

					element(by.css("#clear-completed")).isDisplayed().then(function(isDisplayed){
						expect(isDisplayed).toBeFalsy()  
					});
				});
			} else {

				element(by.css("#clear-completed")).isDisplayed().then(function(isDisplayed){
					expect(isDisplayed).toBeFalsy(); //7.2
				});

			 	inputField.sendKeys("write a new review");
				inputField.sendKeys(protractor.Key.ENTER);
				inputField.sendKeys("write a new review");
				inputField.sendKeys(protractor.Key.ENTER);
				inputField.sendKeys("write a new review");
				inputField.sendKeys(protractor.Key.ENTER);

				todos.each(function(todo){
					todo.element(by.css("input.toggle")).click();
				});

				element(by.css("#clear-completed")).click();
				todos.count().then(function(count){
					expect(count).toBe(0); //7.3
				});

				element(by.css("#clear-completed")).isDisplayed().then(function(isDisplayed){
					expect(isDisplayed).toBeFalsy() //7.1
				});
			}
		});
	});

	 
	it("should display the number of 'active' todos", function(){
		var todos = element.all(by.repeater("todo in todos")),
			firstTodo = todos.first(),
			inputField = element(by.model("newTodo"));

		todos.count().then(function(count){
			if (count){
				todos.each(function(todo){
					hasClass(todo, "completed").then(function(isCompleted){
						if (!isCompleted){
							todo.element(by.css("input.toggle")).click();
						}
					});
				}).then(function(){
					element(by.css("#clear-completed")).click();
				});
			} 

			expect(element(by.css("#todo-count")).isDisplayed()).toBeFalsy(); 

			inputField.sendKeys("write a new review");
			inputField.sendKeys(protractor.Key.ENTER);


			element(by.css("#todo-count")).getText().then(function(text){
				expect(parseInt(text)).toBe(1);  
			})

			inputField.sendKeys("write a new review");
			inputField.sendKeys(protractor.Key.ENTER);

			element(by.css("#todo-count")).getText().then(function(text){
				expect(parseInt(text)).toBe(2);  
			});

			todos.first().element(by.css("input.toggle")).click();

			element(by.css("#todo-count")).getText().then(function(text){
				expect(parseInt(text)).toBe(1);  
			});

		});
	});

	 
	it("should filter by 'active' todos", function(){
		var todos = element.all(by.repeater("todo in todos")),
			firstTodo = todos.first(),
			inputField = element(by.model("newTodo"));

		todos.count().then(function(count){
			if (count){
				todos.each(function(todo){
					hasClass(todo, "completed").then(function(isCompleted){
						if (!isCompleted){
							todo.element(by.css("input.toggle")).click();
						}
					});
				}).then(function(){
					element(by.css("#clear-completed")).click();
				});
			} 

			inputField.sendKeys("write a new review");
			inputField.sendKeys(protractor.Key.ENTER);

			inputField.sendKeys("write a new review");
			inputField.sendKeys(protractor.Key.ENTER);

			todos.first().element(by.css("input.toggle")).click();

			element(by.cssContainingText('#filters li a', 'Active')).click();

			element(by.css("#todo-count")).getText().then(function(text){
				expect(parseInt(text)).toBe(1); //9.1
			});

			todos.count().then(function(count){
				expect(count).toBe(1); //9.2
			});
		});
	});
	
	 
	it("should filter by 'completed' todos", function(){
		var todos = element.all(by.repeater("todo in todos")),
			firstTodo = todos.first(),
			inputField = element(by.model("newTodo"));

		todos.count().then(function(count){
			if (count){
				todos.each(function(todo){
					hasClass(todo, "completed").then(function(isCompleted){
						if (!isCompleted){
							todo.element(by.css("input.toggle")).click();
						}
					});
				}).then(function(){
					element(by.css("#clear-completed")).click();
				});
			} 

			inputField.sendKeys("write a new review");
			inputField.sendKeys(protractor.Key.ENTER);

			inputField.sendKeys("write a new review");
			inputField.sendKeys(protractor.Key.ENTER);

			todos.first().element(by.css("input.toggle")).click();

			element(by.cssContainingText('#filters li a', 'Completed')).click();

			element(by.css("#todo-count")).getText().then(function(text){
				expect(parseInt(text)).toBe(1);  
			});

			todos.count().then(function(count){
				expect(count).toBe(1);  
			});
		});
	});
});

		