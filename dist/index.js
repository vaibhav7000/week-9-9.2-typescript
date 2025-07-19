"use strict";
class CarIm {
    constructor(price, brand, yom, kmDriven) {
        this.price = price;
        this.brand = brand;
        this.yearOfManufacturer = yom;
        this.totalDriven = kmDriven;
    }
    vehicleInfo() {
        console.log(`car brand is ${this.brand}`);
    }
    driven() {
        return this.totalDriven;
    }
}
