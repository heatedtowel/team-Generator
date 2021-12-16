const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const buildHTML = require('./src/script')


employeeList = [];

function newEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finished'],
        name: 'type',
      }
    ])
    .then((answers) => {
      switch (answers.type) {
        case 'Add an Engineer':
          return engineer();
        case 'Add an Intern':
          return intern();
        case 'Finished':
          return writeFile(answers);
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
    .then(({ name, id, email, phone }) => {
      const manager = new Manager(name, id, email, phone);
      employeeList.push(manager);
      newEmployee();
    });
}

function engineer() {
  return inquirer
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
    .then(({ name, id, email, github }) => {
      const engineer = new Engineer(name, id, email, github)
      employeeList.push(engineer)
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
    .then(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school)
      employeeList.push(intern)
      newEmployee();
    });
}

function writeFile() {
  fs.writeFile('./dist/index.html', buildHTML(employeeList), err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Page created successfully')
    }
  })
}

function init() {
  manager();
}

init();




