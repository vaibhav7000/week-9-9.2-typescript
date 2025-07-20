"use strict";
function findMaxTy(arr) {
    let max = 0;
    arr.forEach((value) => {
        max = value > max ? value : max;
    });
    return max;
}
function findMaxIn(arr) {
    let max = 0;
    const collection = arr["collection"];
    collection.forEach((value) => {
        max = value > max ? value : max;
    });
    return max;
}
function filterUseIn(users) {
    return users.filter(value => value["age"] > 18);
}
function filterUserTy(users) {
    return users.filter(value => value["age"] > 18);
}
