const fs = require("fs");
const path = require("path");
const jest = require("jest");
const inquirer = require("inquirer");

let intern = [];
let manager = [];
let engineer = [];
let employees = {manager, engineer, intern};

const teamQuestions = questions => {
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
                manager.push(new Manager(employee, id, email, office))
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
                engineer.push(new Engineer(employee, id, email, github))
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
                intern.push(new Intern(employee, id, email, school))
                if (entry) {
                    teamQuestions();
                }
            })
        }
    })
}
