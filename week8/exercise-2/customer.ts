class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

const customer1 = new Customer('John', 'Doe');
customer1.greeter();
