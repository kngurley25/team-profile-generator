const inquirer = require("inquirer");
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        inquirer.prompt({
            type: "text",
            name: "name",
            message: "Enter your name."
        })
        .then(({ inputName }) => {
            this.name = inputName;
            this.getEmail();
        })
    }

    getEmail() {
        inquirer.prompt({
            type: "text",
            name: "email",
            message: "Enter your email address."
        })
        .then(( { inputEmail }) => {
            this.email = inputEmail;
        })
    }

}

module.exports = Employee;