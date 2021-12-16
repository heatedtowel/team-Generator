const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    const github = github;


    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getGithub() {
    return github
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;