class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}
class Employee extends Person{
	constructor(name,age,jobTitle){
		super(name,age)
		this.jobTitle = jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}
const emp1 = new Person("Alice",25)
emp1.greet()
const emp = new Employee("Bob",30,"Manager")
emp.jobGreet()
emp.greet()
// const emp = new Person("Abhilash",29)
// console.log(emp)
