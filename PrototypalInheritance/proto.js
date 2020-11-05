// Person constructor
let Person = function(name, age){
    this.name = name;
    this.age = age;
  }

  Person.prototype = {
      greet: function() {
          console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old");
      }
  }
  
  // Manager constructor
  let Manager = function(name, age, managees){
    this.managees = managees;
    Person.apply(this, [name, age])
}

Manager.prototype.__proto__ = Person.prototype;

  
  // Developer constructor
  let Developer = function(name, age, skillset){
    this.skillset = skillset;
    Person.apply(this, [name, age])
  }
  Developer.prototype.__proto__ = Person.prototype;
  
  // Developer instance
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instance
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  // use the objects:
  maria.greet();
  pesho.greet();
  gates.greet();