const Employee = require("./Employee");

class Manager extends Employee {
    constructor(answers) {
        const {name, id, email, officeNumber} = answers;
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
}

module.exports = Manager;