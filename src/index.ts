// interfaces are used to combine multiple types and hence it is used to check the types of variables that as multiple properties (You can use interfaces to aggregate types)

interface Vehicle {
    price: number,
    brand: string,
    yearOfManufacturer: number,
    totalDriven: number,
    register?: string


    vehicleInfo: () => void,
    driven: () =>number
}

// "this is the difference between interface and types". "interfaces can be implemented" ( this sought of provide pre-defined structure to the class ) know some class who implements Vehicle should has all the types defined in the interface


// implementing interfaces ( know the Car should define all the types that is present in vehicle interface), "not inheritance" we are implementing types for the class
class CarIm implements Vehicle {

    // typescript oriented, in js we does not give anything related to this
    price: number;
    brand: string;
    yearOfManufacturer: number;
    totalDriven: number;

    constructor(price: number, brand: string, yom: number, kmDriven: number) {
        this.price = price;
        this.brand = brand;
        this.yearOfManufacturer = yom;
        this.totalDriven = kmDriven
    }

    vehicleInfo(): void {
        console.log(`car brand is ${this.brand}`);
    }

    driven(): number {
        return this.totalDriven
    }
}
