"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerV3 = void 0;
// customer.ts
var CustomerV3 = /** @class */ (function () {
    function CustomerV3(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    CustomerV3.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    CustomerV3.prototype.GetAge = function () {
        console.log("Age: ".concat(this._age));
        return this._age;
    };
    return CustomerV3;
}());
exports.CustomerV3 = CustomerV3;
