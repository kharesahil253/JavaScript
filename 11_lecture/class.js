class Car {
    constructor(brand, color, type) {
        this.brand = brand;
        this.color = color;
        this.type = type;
    }
    display() {
        console.log(`My Car Brand is ${this.brand}`)
    }
}
const car = new Car("Scorpio")
car.display();



//. Create a class Employee with properties name and salary. Print the name using a method.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`My Name is ${this.name}`)
    }
}
const employee = new Employee("Sahil")
employee.display();

// .Create a class User with:
// A class field age = 25
// A constructor that takes name and also sets this.age = 30
// A method getInfo() that returns "<name> is <age> years old"
// Then:
// Create a User object with any name.
// Call getInfo() and explain whether age is 25 or 30, and why. write simple code
class User {
    static age = 25;
    constructor(name, age) {
        this.age = 30;
        this.name = name;
    }
    getinfo() {
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }
}
const user = new User("Sahil", 26)
user.getinfo();
console.log(User.age)
//age is always will be 30 as this age set the default value to 30



// .Create a class Calculator with:
// A static method add(a, b) that returns the sum.
// An instance method multiply(a, b) that returns the product.
// Then:
// Create an instance of Calculator.
// Call both methods:
// calc.multiply(3, 4)
// Calculator.add(5, 6)
// Try calc.add(2, 3) and observe what happens.

class Calculator {
    static add(a, b) {
        return a + b;
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    multiply() {
        return this.a * this.b;
    }
}

const values = new Calculator(2,3);
console.log(values.multiply());
console.log(Calculator.add(5, 6));
// console.log(values.add(2, 3));



// .Create a class Animal with:
// A constructor that takes name
// An instance method speak() that returns "<name> makes a noise."
// A static method info() that returns "Animals are living beings."
// Then:
// Create an instance of Animal with name "Dog".
// Call speak() using the object.
// Call info() using the class.
// Try calling info() using the object and observe what happens.

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise`
    }
    static info() {
        return "Animals are living being.";
    }
}
const dog = new Animal("Dog");
console.log(dog.speak());
console.log(Animal.info());