"use strict";
// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor';
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularHomepage {
    constructor() {
        this.nameInput = protractor_1.element(protractor_1.by.model('yourName'));
        this.greeting = protractor_1.element(protractor_1.by.binding('yourName'));
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('http://www.angularjs.org');
        });
    }
    setName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nameInput.sendKeys(name);
        });
    }
    // getGreeting returns a native Promise<string>
    getGreeting() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.greeting.getText();
        });
    }
}
exports.AngularHomepage = AngularHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0VBQStFO0FBQy9FLG9FQUFvRTtBQUNwRSxFQUFFO0FBQ0YsK0RBQStEO0FBQy9ELHVCQUF1QjtBQUN2QixFQUFFOzs7Ozs7Ozs7OztBQUVGLDJDQUFnRDtBQUVoRCxNQUFhLGVBQWU7SUFBNUI7UUFDRSxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBYzdDLENBQUM7SUFaTyxHQUFHOztZQUNQLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsSUFBWTs7WUFDeEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFRCwrQ0FBK0M7SUFDekMsV0FBVzs7WUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0NBQ0Y7QUFoQkQsMENBZ0JDIn0=