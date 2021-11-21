const fs = require("fs");
const inquirer = require("inquirer");

const generatePage = require("./src/page-template");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager name."
        },
        {
            type: "input",
            name: "Id",
            message: "Enter team manager employee ID number.",
        },
        {
           type: "input",
           name: "email",
           message: "Enter team manager email address." 
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter team manager office number."
        }
    ])
}

const promptEmployeeAdd = () => {   
    console.log(`
    ADD NEW EMPLOYEE
    `);

    inquirer.prompt({
        type: "list",
        name: "employeeType",
        message: "Which employee position type would you like to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I do not want to add another employee"
        ]
    })
    .then(({ employeeType }) => {
        if (employeeType === "I do not want to add another employee") {
            return;
        } else {
            console.log("Add information for: " + employeeType);
            new Employee(employeeType).getName();
        }
    })
}

promptManager()
    .then(promptEmployeeAdd)
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })


// const writeFile = () => {

//     const generatedHtml = generatePage(team);

//     fs.writeFile("index.html", generatedHtml,
//         (err) => {
//             if (err) throw err;
//             else {
//                 console.log("File written successfully.");
//             }
//         })
// }