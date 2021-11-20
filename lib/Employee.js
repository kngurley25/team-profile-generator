const inquirer = require("inquirer");
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer.prompt({
            type: "input",
            name: "name",
            message: "Enter name."
        })
        .then(({ inputName }) => {
            this.name = inputName;
            this.getId();
        })
        return this.name;
    };

    getId() {
        inquirer.prompt({
            type: "input",
            name: "Id",
            message: "Enter employee ID number.",
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
            this.id = inputId;
            this.getEmail();
        })
        return this.id;
    };

    getEmail() {
        inquirer.prompt({
            type: "input",
            name: "email",
            message: "Enter email address."
        })
        .then(( { inputEmail }) => {
            this.email = inputEmail;
            this.getRole();
        })
        return this.email;
    };

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;