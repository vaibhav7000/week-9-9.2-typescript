const x: number = 1;
console.log(1)

const firstName: string = "vaibhav";
const lastName: string = "chawla";


let fullName: string = `${firstName} ${lastName}`;


/*

    fullName = 10; because of typescript which introduces types to the variable we will not be able to assign value to the variables out of their own types

    by-default (implicitly) the types of variables are "any", and if we does not give types to the variables ts compiler will throw error. rather explicity provide type as "any" or give the variables valid type show that the conversion of ts to js should happens.

    using the "type inference" -> ts compiler show what is the return type of function. but it is good to used type with variables and functions

    // can decide what should be the output ( version of the ecma-script ) version of the typescript into js (es6, es5 ...)

*/

function greet(firstName: string, lastName: string, age: number) {
    return `Hello ${firstName} ${lastName} whose age is ${age}`
}

function greeting(firstName: string) {
    return `Hello ${firstName}`;
}

function sum(a: number, b:number): number {
    return a + b;
}

sum(10,20);

function isAdult(age: number): boolean {
    return age > 18;
}

isAdult(20);

function returnFn(fn: () => number, timer: number): void {

    setTimeout(fn, timer);
}


returnFn(function() {
    return 10;
}, 2000);


function runAfter1S(callback: () => void): void {
    const result = callback();
}


/*
    In TypeScript, a function declared to return void can return a value — as long as the return value is not used. This is allowed because:

    void means that the return value will be ignored — not that the function must not return anything at all.   
*/
runAfter1S(() => {
    return 10;
})

// this will throw error because the value will be exposed to the end user.
function runAfter2S(callback: () => void): void {

    return undefined;
}

/*

    typescript throws error related to types only at the compile time (when the ts code is converted into js code). No runtime error will be handled by the ts compiler

    ts.config.json options
    "target" -> using this we can handle / generate different versions of ecmascript (js) from a single typescript file
    "rootDir" -> the developer folder where all the application logic will be written in typescript
    "outDir" -> the final folder where all the ts files will be converted down into js files
    "noImplicitAny" (true, false) -> option this can be used to avoid the implicity any error. if there the error will be thrown, else not thrown
    "removeComments": true -> now the generate js files does not contains comments 

*/


// "interfaces" are used to define "types" for variables that has "multiple-properties" (objects) + it follows DRY. "interfaces" allow to combine "multiple type"s into a "single type"
interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}

// using "interface" for declaring types for the objects
const user: User = {
    firstName: "vaibhav",
    lastName: "chawla",
    email: "random@gmail.com",
    age: 23
}

function isLegal(payload: User): boolean {
    return payload["age"] > 18
}

// we do similar to the same interface but violates DRY
function greetUser(user: {
    firstName: string,
    lastName: string,
    age: number,
    email: string
}): void {
    console.log(user["firstName"] + user["lastName"]);
}

// optional with types (?) using this we can either pass the value or not, but if passed it should follow the type mention in the type declaration

interface Car {
    price: number,
    model: number,
    fullName: string,
    yom?: number // declaring an optional type, 
}

function carInfo(vehicle: Car): void {
    console.log("Car is " + vehicle["fullName"] + " price is " + vehicle["price"] + " model is " + vehicle["model"] + " year of manufacturer is " + `${vehicle["yom"] ? vehicle["yom"] : "we do not"}`);
}

carInfo({
    price: 100,
    model: 2002,
    fullName: "Car",
    yom: 2001
})


interface Bike {
    model: string,
    brand: string,
    price: number
}

function bikeInfo({model, brand, price}: Bike): string {
    return `Bike brand is ${brand} model is ${model} and price is ${price}`;
}