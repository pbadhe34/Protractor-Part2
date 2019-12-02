"use strict";
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
// local import of the exported AngularPage class
const angularPage_1 = require("./angularPage");
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
    it('should greet the named user', () => __awaiter(void 0, void 0, void 0, function* () {
        const angularHomepage = new angularPage_1.AngularHomepage();
        yield angularHomepage.get();
        yield angularHomepage.setName('Julie');
        expect(yield angularHomepage.getGreeting()).toEqual('Hello Julie!');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY1BhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlY1BhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlEO0FBQ2pELCtDQUE4QztBQUU5QywwRUFBMEU7QUFDMUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNsQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO1FBQzNDLE1BQU0sZUFBZSxHQUFHLElBQUksNkJBQWUsRUFBRSxDQUFDO1FBQzlDLE1BQU0sZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsTUFBTSxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=