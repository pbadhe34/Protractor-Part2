'use strict';

describe('favourite rapper', function () {
	it('should bind to input', function () {
		browser.get('http://localhost:8090/Binding-Test/');
		var emceeInput = element(by.model('emcee'));
		var emceeOutput = element(by.binding('emcee'));
		expect(emceeOutput.getText()).toBe('Ramanna');
		emceeInput.clear();
		emceeInput.sendKeys('The Rock');
		expect(emceeOutput.getText()).toBe('The Rock');
	});
});
