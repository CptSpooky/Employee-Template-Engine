const Employee = require("./Employee");
const inquirer = require("inquirer");
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
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