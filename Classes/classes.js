// Person constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old");
  }
}

// Manager constructor
class Manager extends Person {
  constructor(name, age, employees) {
    super(name, age);
    this.employees = employees;
  }

  greet() {
    const employeeNameArr = [];
    this.employees.forEach((employee) => {
      employeeNameArr.push(employee.name);
    });

    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old");
    console.log("I am the manager of " + employeeNameArr.toString());
  }
}

// Developer constructor
class Developer extends Person {
  constructor(name, age, skills) {
    super(name, age);
    this.skills = skills;
  }

  greet() {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old");
    console.log("I know " + this.skills.toString());
  }
}

// Developer instance
let maria = new Developer("Maria Popova", 23, ["Python", "Machine Learning"]);
let pesho = new Developer("Petar Petrov", 19, [
  "JavaScript",
  "Angular",
  "React",
  "Vue",
]);

// Manager instance
let gates = new Manager("Bill Gates", 43, [maria, pesho]);

// use the objects:
maria.greet();
pesho.greet();
gates.greet();
