// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//Want to inherit from employee class
class Engineer extends Employee{
    constructor(name, id, email, gitHub){

        //Super will call the functions from employee
        super (name,id,email)
        this.gitHub = gitHub;
    }
    getGitHub(){

        return this.gitHub;
    }
    getRole(){

        return "Engineer";
    }

}

module.exports = Engineer;