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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function employeeFactory(name, id, email, roleID) {
    switch (roleID) {
        case 1: return new Manager(name, id, email);
        case 2: return new Engineer(name, id, email);
        case 3: return new Intern(name, id, email);
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
    console.log(out);

    //system.log("check");
}

// function call to initialize program
init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
