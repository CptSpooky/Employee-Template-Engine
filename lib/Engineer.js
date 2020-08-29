// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id) {
      super(name, id, email);
      this.name = name;
      this.id = id;
      this.github = "";
    }

    setExtra(data) {
        github = data;
    }

    getGithub() {
        return github;
    }

    getRole(){
        return "Engineer";
    }
}