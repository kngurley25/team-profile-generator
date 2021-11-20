const fs = require("fs");
const inquirer = require("inquirer");

const generatedPage = require("./src/page-template");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello Team Manager. What is your name?"
        },
        {
            type: "input",
            name: "Id",
            message: "Enter your employee ID number.",
        },
        {
           type: "input",
           name: "email",
           message: "Enter your email address." 
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number."
        }
    ])
}

const promptEmployeeAdd = () => {   
    console.log(`
    ADD NEW EMPLOYEE
    `);

    return inquirer.prompt({
        type: "list",
        name: "confirmEmployeeType",
        message: "Which employee position type would you like to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I do not want to add another employee"
        ]
    })
}

promptManager()
    .then(promptEmployeeAdd);

// function createFile() {
//     fs.writeFile(path.join("./", "dist", "index.html"), generatedPage,
//             (err) => {
//                 if (err) throw err;
//                 console.log("The file has been saved.");
//             })
// }