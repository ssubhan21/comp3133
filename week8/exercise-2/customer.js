var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return Customer;
}());
var customer1 = new Customer('John', 'Doe');
customer1.greeter();
