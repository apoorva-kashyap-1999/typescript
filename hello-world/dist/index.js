"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let n = 123;
let level;
function render(document) {
    console.log(document);
}
render('APOORVA');
let arrays = [1, 2, 3];
let user = [1, 'apoorva', true, 0];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
;
let mySizes = 5;
console.log(mySizes);
function calculateTask(income, tax) {
    if (income < 50000) {
        console.log(income * 1.2);
        console.log(tax);
        return income * 1.2;
    }
    else {
        console.log(income);
        return 0;
    }
}
calculateTask(5000078, 2022);
calculateTask(80000);
let employee1 = {
    id: 1,
    name: 'apoorva',
    age: 25,
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 2,
    name: 'aparajita',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        console.log(weight * 2.2 + 'kg');
    }
    else
        console.log(weight);
}
kgToLbs(10);
kgToLbs('100kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let quan = 50;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('OOPS');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer1 = getCustomer(0);
console.log(customer1);
let customer2 = getCustomer(2);
console.log(customer2);
let customer3 = getCustomer(3);
console.log(customer3 === null || customer3 === void 0 ? void 0 : customer3.birthDay);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map