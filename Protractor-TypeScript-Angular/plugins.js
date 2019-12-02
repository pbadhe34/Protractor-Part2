"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myPlugin = {
    addSuccess(info) {
        console.log('on success: ' + info.specName);
    },
    onPageLoad() {
        this.addSuccess({ specName: 'Hello, World!' });
    }
};
module.exports = myPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsdWdpbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxJQUFJLFFBQVEsR0FBcUI7SUFDL0IsVUFBVSxDQUFDLElBQXdCO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIn0=