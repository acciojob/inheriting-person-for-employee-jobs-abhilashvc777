// complete this js code



// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee
function Employee(name, age, jobTitle) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);

    // Initialize jobTitle for Employee
    this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Fix the constructor property of Employee prototype
Employee.prototype.constructor = Employee;

// Adding method to Employee prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage
var person1 = new Person('John', 30);
person1.greet(); // Output: Hello, my name is John, I am 30 years old.

var employee1 = new Employee('Alice', 25, 'Software Engineer');
employee1.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee1.jobGreet(); // Output: Hello, my name is Alice, I am 25 years old, and my job title is Software Engineer.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
