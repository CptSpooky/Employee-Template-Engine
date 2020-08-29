// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id) {
      super(name, id, email);
      this.name = name;
      this.id = id;
      this.officeNum = "";
    }

    setExtra(data) {
        officeNum = data;
    }

    getOfficeNum() {
        return officeNum;
    }

    getRole(){
        return "Manager";
    }
}