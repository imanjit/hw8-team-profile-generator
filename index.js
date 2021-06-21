const fs = require("fs");
const path = require("path");
const jest = require("jest");
const inquirer = require("inquirer");

const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");

const write = require("./src/write.js");
const template = require("./src/template.js");

let internData = [];
let managerData = [];
let engineerData = [];
let employeeData = {managerData, engineerData, internData};

function questions() {
    return inquirer.prompt([
        {
            type: "text",
            name: "employee",
            message: "Employee name?",
        },
        {
            type: "text",
            name: "id",
            message: "Employee ID?",
        },
        {
            type: "text",
            name: "email",
            message: "Employee email?",
        },
        {
            type: "list",
            name: "role",
            message: "Employee role?", 
            choices: ["Manager", "Engineer", "Intern"],
        }
    ]).then(({employee, id, email, role}) => {
        if (role === "Manager") {
            return inquirer.prompt([
                {
                    type: "text",
                    name: "office",
                    message: "Office number?",
                },
                {
                    type: "confirm",
                    name: "entry",
                    message: "Add another employee?",
                    default: false,
                }
            ]).then(({office, entry}) => {
                managerData.push(new Manager(employee, id, email, office))
                if (entry) {
                    teamQuestions();
                }
            })
        } else if (role === "Engineer") {
            return inquirer.prompt([
                {
                    type: "text",
                    name: "github",
                    message: "Github username?",
                },
                {
                    type: "confirm",
                    name: "entry",
                    message: "Add another employee?",
                    default: false,
                }
            ]).then(({github, entry}) => {
                engineerData.push(new Engineer(employee, id, email, github))
                if (entry) {
                    teamQuestions();
                }
            })
        } else if (role === "Intern") {
            return inquirer.prompt([
                {
                    type: "text",
                    name: "school",
                    message: "School attended?",
                },
                {
                    type: "confirm",
                    name: "entry",
                    message: "Add another employee?",
                    default: false,
                }
            ]).then(({school, entry}) => {
                internData.push(new Intern(employee, id, email, school))
                if (entry) {
                    teamQuestions();
                }
            })
        }
    })
};

questions().then(data => {
    return template(employeeData)
}).then(html => {
    return write(html)
});
