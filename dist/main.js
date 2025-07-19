"use strict";
const x = 1;
console.log(1);
const firstName = "vaibhav";
const lastName = "chawla";
let fullName = `${firstName} ${lastName}`;
function greet(firstName, lastName, age) {
    return `Hello ${firstName} ${lastName} whose age is ${age}`;
}
function greeting(firstName) {
    return `Hello ${firstName}`;
}
function sum(a, b) {
    return a + b;
}
sum(10, 20);
function isAdult(age) {
    return age > 18;
}
isAdult(20);
function returnFn(fn, timer) {
    setTimeout(fn, timer);
}
returnFn(function () {
    return 10;
}, 2000);
function runAfter1S(callback) {
    const result = callback();
}
runAfter1S(() => {
    return 10;
});
function runAfter2S(callback) {
    return undefined;
}
const user = {
    firstName: "vaibhav",
    lastName: "chawla",
    email: "random@gmail.com",
    age: 23
};
function isLegal(payload) {
    return payload["age"] > 18;
}
function greetUser(user) {
    console.log(user["firstName"] + user["lastName"]);
}
function carInfo(vehicle) {
    console.log("Car is " + vehicle["fullName"] + " price is " + vehicle["price"] + " model is " + vehicle["model"] + " year of manufacturer is " + `${vehicle["yom"] ? vehicle["yom"] : "we do not"}`);
}
carInfo({
    price: 100,
    model: 2002,
    fullName: "Car",
    yom: 2001
});
function bikeInfo({ model, brand, price }) {
    return `Bike brand is ${brand} model is ${model} and price is ${price}`;
}
