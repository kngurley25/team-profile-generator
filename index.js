const fs = require("fs");
const inquirer = require("inquirer");

const generatePage = require("./src/page-template");

const Manager = require("./lib/Manager");

const inquirerQuestions = require("./utils/questions");
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
        console.log(employeeArr);
        promptEmployeeAdd();
    })
}

const promptEmployeeAdd = () => {
    inquirer.prompt(inquirerQuestions)
        .then(answers => {
            employeeArr.push(answers);
            console.log(employeeArr);
        })
}

// const promptEmployeeAdd = () => {   
//     console.log(`
//     ADD NEW EMPLOYEE
//     `);

//     inquirer.prompt({
//         type: "list",
//         name: "employeeType",
//         message: "Which employee position type would you like to add?",
//         choices: [
//             "Manager",
//             "Engineer",
//             "Intern",
//             "I do not want to add another employee"
//         ]
//     })
//     .then(({ employeeType }) => {
//         if (employeeType === "I do not want to add another employee") {
//             return;
//         } else {
//             const employee = new Manager();
//             employee.getName();
//         }
//     })
// }

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