const inquirer = require("inquirer");
class Employee {
    constructor(name, Id) {
        this.name = name;
        this.Id = Id;
    }

    getName() {
        inquirer.prompt({
            type: "text",
            name: "name",
            message: "Enter your name."
        })
        .then(({ inputName }) => {
            this.name = inputName;
            this.getId();
        })
    }

    getId() {
        inquirer.prompt({
            type: "text",
            name: "Id",
            message: "Enter your employee ID number.",
            validate: numberInput => {
                if (isNaN(numberInput)) {
                    console.log("Enter a valid ID number");
                    return false;
                } else {
                    return true;
                }
            }
        })
        .then(({ inputId }) => {
            this.Id = inputId;
        })
    }
}

module.exports = Employee;