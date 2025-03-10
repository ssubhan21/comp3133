class CustomerV2 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

const customer2 = new CustomerV2('Jane', 'Smith');
customer2.greeter();
