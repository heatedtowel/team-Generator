const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, phone) {
    const officeNumber = phone;


    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;