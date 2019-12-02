
/// <reference path='usage.ts' />

class Sedan extends Car {
    model: string; 
    carColor : string
    constructor(carColor : string, model: string) {
        super(true,carColor );
        this.model = model;
    }
}
