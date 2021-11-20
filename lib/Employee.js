const inquirer = require("inquirer");
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
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
            this.getId();
        })
        return this.name;
    };

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
            this.id = inputId;
            this.getEmail();
        })
        return this.id;
    };

    getEmail() {
        inquirer.prompt({
            type: "text",
            name: "email",
            message: "Enter your email address."
        })
        .then(( { inputEmail }) => {
            this.email = inputEmail;
            this.getRole();
        })
        return this.email;
    };

    getRole() {
        inquirer.prompt({
            type: "list",
            name: "role",
            message: "Select your position at the company.",
            choices: ["Manager", "Engineer", "Intern"]
        })
        .then(( { inputRole }) => {
            this.role = inputRole;
        })
        return this.role;
    }
}

module.exports = Employee;