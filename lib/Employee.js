const inquirer = require("inquirer");
class Employee {
    constructor(answers) {
        const {name, id, email} = answers;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    };

    getId() {
        inquirer.prompt({
            type: "input",
            name: "id",
            message: "Enter employee ID number.",
            validate: id => {
                if (isNaN(id)) {
                    console.log("Enter a valid ID number");
                    return false;
                } else {
                    return true;
                }
            }
        })
        .then(({ id }) => {
            this.id = id;
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
        .then(( { email }) => {
            this.email = email;
            this.getRole();
        })
        return this.email;
    };

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;