const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer.prompt({
            type: "input",
            name: "officeNumber",
            message: "Enter office number.",
            validate: numberInput => {
                if (isNaN(numberInput)) {
                    console.log("Enter a valid office number");
                    return false;
                } else {
                    return true;
                }
            }
        })
        .then(({ inputNumber }) => {
            this.officeNumber = inputNumber;
            this.getRole();
        })
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
}

module.exports = Manager;