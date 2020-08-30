const Employee = require("./Employee");
const inquirer = require("inquirer");
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
      super(name, id, email);
      this.officeNumber = officeNum;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }

    async askFollowUp(){

        // question
        const question = [
            {
            type: "input",
            message: "What's the Employee's office number?",
            name: "officenum"
            }
        ]    

        const data = await inquirer.prompt(question);
        this.officeNum = data.officenum;
    }
}

module.exports = Manager;