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
    callback();
}
runAfter1S(() => {
    return 10;
});
