const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(answers) {
        const {name, id, email, officeNumber} = answers;
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer.prompt({
            type: "input",
            name: "officeNumber",
            message: "Enter office number.",
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log("Enter a valid office number");
                    return false;
                } else {
                    return true;
                }
            }
        })
        .then(({ officeNumber }) => {
            this.officeNumber = officeNumber;
            this.getRole();
        })
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
}

module.exports = Manager;