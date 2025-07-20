"use strict";
function doAction(input) {
    if (input === "down") {
    }
}
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
function game(keyInput) {
    if (keyInput === Direction.Down) {
        console.log(keyInput);
    }
}
game(Direction.Up);
const up = Direction.Up;
var Payment;
(function (Payment) {
    Payment["Cash"] = "cash";
    Payment["Net-Banking"] = "net-banking";
    Payment["UPI"] = "upi";
    Payment["Card"] = "card";
})(Payment || (Payment = {}));
var Categories;
(function (Categories) {
    Categories[Categories["Food"] = 0] = "Food";
    Categories[Categories["Entertainment"] = 1] = "Entertainment";
    Categories[Categories["Travel"] = 2] = "Travel";
})(Categories || (Categories = {}));
console.log(Categories);
function setCategory(category) {
    console.log(category);
}
function selectCategory(category) {
    setCategory(category);
}
selectCategory(Categories.Travel);
function setPayment(payment) {
    console.log(payment);
}
function selectPayment(value) {
    setPayment(value);
}
selectPayment(Payment.Card);
