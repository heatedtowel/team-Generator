const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

function buildHTML(employeeList) {
  let cards = '';
  employeeList.forEach(employee => {
    let role = employee.getRole();
    let finalLI = '';
    if (role === 'Intern') {
      finalLI = `<li class="list-group-item">School: ${employee.getSchool()}:</li>`
    } else if (role === 'Manager') {
      finalLI = `<li class="list-group-item">Number: ${employee.getNumber()}:</li>`
    } else if (role === 'Engineer') {
      finalLI = `<li class="list-group-item"><a target='_blank' href='https://github.com/${employee.getGithub()}'>Github: ${employee.getGithub()}</a></li>`
    }

    cards +=
      `<main class="container">
    <header class="p-5 my-5 bg-light">
      <h1>Name: ${employee.getName()}</h1>
      <h1>Role: ${employee.getRole()}</h1>
    </header>
    <section class="row">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.getID()}</li>
          <li class="list-group-item"><a href='mailto:${employee.getEmail()}'>Email: ${employee.getEmail()}</a></li>
          ${finalLI}
        </ul>
      </div>
    </section>
  </main>`
  });
  return `<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bio</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet">
  </head>
  
  <body>${cards}</body>
  
  </html>`
}

module.exports = buildHTML;