/// <reference path='usage.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(carColor, model) {
        _super.call(this, true, carColor);
        this.model = model;
    }
    return Sedan;
}(Car));
