var CustomerV2 = /** @class */ (function () {
    function CustomerV2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CustomerV2.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return CustomerV2;
}());
var customer2 = new CustomerV2('Jane', 'Smith');
customer2.greeter();
