const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const render = require("./lib/htmlRenderer");
const { resolve } = require("path");
const { rejects } = require("assert");

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

//initiation
function init(){

  newMember();
}

//adding members
function newMember(){

    inquirer
    .prompt(questions)
    .then(function({name,role,id,email}){

        let info = "";

        //Switch statement for the three different employee types
        switch(role){

            case 'Engineer':
            info = "Github username";
            break;

            case 'Intern':
            info = "school name";
            break;

            case 'Manager':
            info = "office phone number";
            break;
        }

        //prompt for specific info for that role
        inquirer.prompt([{
          message: "Enter team member's " +info,
          name: "roleInfo"
        }
      ])
      // Next, need to create the new object
      .then(function({roleInfo}){

        let member;

        //Check what role they are and input matching role info
        if (role == "Engineer"){
          member = new Engineer(name,id,email,roleInfo);
        } else if (role == "Intern"){
          member = new Intern(name,id,email,roleInfo);
        } else if (role == "Manager"){
          member = new Manager(name,id,email,roleInfo);
        }
        
        //added to the array
        employees.push(member)

        //See if they would like to add another member
        inquirer.prompt([{
          type: "list",
          message: "Would you like to add another member",
          name: "nextMember",
          choices: ['Y','N']
        }])

        //Check whether they selected yes
        .then(function({nextMember}){
          if(nextMember == 'Y'){
            newMember();
            
            //If they are done entering members, render the html
          }else{
                // Render and write file
                var final = render(employees);
                fs.writeFile('output/team.html', final, function (err) {
                  if (err) return console.log(err);
                      });
          }
        })
    
        
      })

    })
  }




init();

