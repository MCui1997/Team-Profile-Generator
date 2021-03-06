// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

//Want to inherit from employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){

        if (!officeNumber) {
            throw new Error("You are missing an officeNumber.");
          }

        //Super will call the functions from employee
        super (name,id,email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

