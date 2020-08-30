const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What's the Employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What's the Employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What's the Employee's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What's the Employee's role?  \n 1. Manager \n 2. Engineer \n 3. Intern \n?",
        name: "role"
    }
];

function employeeFactory(name, id, email, roleID) {
    switch (roleID) {
        case 1: return new Manager(name, id, email, "");
        case 2: return new Engineer(name, id, email, "");
        case 3: return new Intern(name, id, email, "");
        default: return new Employee(name, id, email);
    }
}

// function to initialize program
async function init() {

    let employees = [];
    let entering = true;

    while (entering) {
        await inquirer.prompt(questions).then(async data => {
            try {
                let employee = employeeFactory(data.name, data.id, data.email, parseInt(data.role));
                console.log(employee.getRole());
                await employee.askFollowUp();
                employees.push(employee);
            } catch (err) { }
        });

        await inquirer.prompt([{type:"input",message:"would you like(y/n)?",name:"resp"}]).then(data => {
            entering = data.resp == "y";
        });

    }

    const out = render(employees);
    writeToFile("./output/team.html", out);

}

// function call to initialize program
init();

// function to write to html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{ 
        if (err) {
            return console.log(err);
        }

        console.log("success!");
    });
}
