// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");
class Intern extends Employee {
    constructor(name, id, email) {
      super(name, id, email);
      this.school = "";
    }

    setExtra(data) {
        school = data;
    }

    getSchool() {
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    async askFollowUp(){

        // question
        const question = [
            {
            type: "input",
            message: "Where does the Employee go to school?",
            name: "school"
            }
        ]    

        const data = await inquirer.prompt(question);
        this.school = data.school;
    }
}

module.exports = Intern;