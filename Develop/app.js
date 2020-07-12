const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//Questions for all employees
const questions = [

    {
      type: "input",
      message: "Please enter team member's name.",
      name: "name"
    },
    {
      type: "list",
      message: "Please select the member's role.",
      name: "role",
      choices: ['Intern', 'Engineer', 'Manager']
    },
    {
      type: "input",
      message: "Please enter team member's id.",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter team member's email.",
      name: "email"
    }
     
];

//initial function
function init(){

    inquirer
    .prompt(questions)
    .then(function({name,role,id,email}){

        let info = "";

        //Switch statement for the three different employee types
        switch(role){

            case 'Engineer':
            info = "Github username";
            inquirer.prompt([
              {

                name: "roleInfo",
                message:"Please enter team member's " +info
                }
          ])

            
            break;

            case 'Intern':
            info = "school name";
            inquirer.prompt([
              {

                name: "roleInfo",
                message:"Please enter team member's " +info
                }
          ])

            break;

            case 'Manager':
            info = "office phone number";
            inquirer.prompt([
              {

                name: "roleInfo",
                message:"Please enter team member's " +info
                }
          ])
            break;
        }

    })
    //Add all info into the object so we can add to array
    .then(function(name,role,id,email,roleInfo){
      let member;

      switch(role){
        case 'Engineer':
        member = new Engineer(name,id,email,roleInfo)
        break;

        case 'Intern':
        member = new Intern(name,id,email,roleInfo)

        break;

        case 'Manager':
        member = new Manager(name,id,email,roleInfo)
        break;
      }

      employees.push(member);
    })
    
}

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
