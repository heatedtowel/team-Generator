const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('Employee');
const Engineer = require('Engineer');
const Intern = require('Intern');
const Manager = require('Manager');


function newEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', `I'm done`],
        name: 'type',
      }
    ])
    .then((answers) => {
      switch (answers.type) {
        case 'Add an Engineer':
          engineer();
        case 'Add an Intern':
          internal();
        case `I'm done`:
          buildHTML();
      }
    });
};

function manager() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the managers name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id'
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },
      {
        type: 'number',
        message: 'What is their phone number?',
        name: 'phone',
      }
    ])
    .then((name, id, email, phone) => {
      const intern = new Manager(name, id, email, phone)
      employees.push(intern)
      newEmployee();
    });
}


function engineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the their name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id'
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is their Github?',
        name: 'github',
      }
    ])
    .then((name, id, email, github) => {
      const engineer = new Engineer(name, id, email, github)
      employees.push(engineer)
      newEmployee();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the their name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id'
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What school did they attend?',
        name: 'school',
      }
    ])
    .then((name, id, email, school) => {
      const intern = new Intern(name, id, email, school)
      employees.push(intern)
      newEmployee();
    });
}