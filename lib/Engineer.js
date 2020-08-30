const Employee = require("./Employee");
const inquirer = require("inquirer");
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

    async askFollowUp(){

        // question
        const question = [
            {
            type: "input",
            message: "What's the Employee's GitHub?",
            name: "github"
            }
        ]    

        const data = await inquirer.prompt(question);
        this.github = data.github;
    }
}

module.exports = Engineer;