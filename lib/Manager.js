// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");
class Manager extends Employee {
    constructor(name, id, email) {
      super(name, id, email);
      this.officeNum = "";
    }

    setExtra(data) {
        officeNum = data;
    }

    getOfficeNumber() {
        return this.officeNum;
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