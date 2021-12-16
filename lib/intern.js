const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    const school = school;


    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getSchool() {
    return school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;