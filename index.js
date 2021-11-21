const fs = require("fs");
const inquirer = require("inquirer");

const generatePage = require("./src/page-template");

const Manager = require("./lib/Manager");

const questions = require("./utils/questions");
const managerQuestions = require("./utils/managerQuestions");
const Employee = require("./lib/Employee");

const employeeArr = [];

const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager name."
        },
        {
            type: "input",
            name: "id",
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
    .then(managerAnswers => {
        const manager = new Manager(managerAnswers);
        employeeArr.push(manager);
        console.log(`
        ADD NEW EMPLOYEE
        `);
        promptEmployeeAdd();
    })
}

const promptEmployeeAdd = () => {
    inquirer.prompt(questions)
        .then(answers => {
            const employee = new Employee(answers);
            employeeArr.push(employee);
        })
}

promptManager()
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })


// const writeFile = () => {

//     const generatedHtml = generatePage(employeeArr);

//     fs.writeFile("index.html", generatedHtml,
//         (err) => {
//             if (err) throw err;
//             else {
//                 console.log("File written successfully.");
//             }
//         })
// }