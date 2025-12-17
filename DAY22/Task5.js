class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Employee Name: ${this.name}`);
    console.log(`Salary: ₹${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); 
    this.department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.department}`);
  }
}


const manager1 = new Manager("Anitha", 60000, "HR");
manager1.displayInfo();