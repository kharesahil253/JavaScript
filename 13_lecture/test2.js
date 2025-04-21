//Q-1
// Create a Student class with the following requirements:
// The class should have a constructor that takes name and marks as arguments and stores them in instance variables.
// Add a method called getDetails that returns the student's name and marks.
// Add a static method called compareMarks that takes two Student objects and returns the name of the student with higher marks.
// Then create two student objects and use the static method to find out who scored more.
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    getDetails() {
        return `Name ${this.name} and Marks ${this.marks}`;
    }
    static CompareMarks(s1, s2) {
        if (s1.marks > s2.marks) {
            return (`Name ${s1.name} and Marks ${s1.marks}`);
        }
        else if (s2.marks > s1.marks) {
            return (`Name ${s2.name} and Marks ${s2.marks}`);
        }
        else {
            return (`Name ${s1.name} and Marks ${s1.marks} and Name ${s2.name} and Marks ${s2.marks}`);

        }
    }
}

const s1 = new Student("A", 40);
const s2 = new Student("B", 20);
const gien = Student.CompareMarks(s1, s2);
console.log(gien);

//Q-2
// Create a class Person with a private field #ssn (Social Security Number) and a public method getSSN(). Then, create a subclass Employee that inherits from Person and adds a property employeeId. Write a method in Employee to display all the details.
// class Person {
//     #ssn;
//     getSSN(name) {
//         this.name = name
//     }
// }
// // class Employee extends Person {
// //         this.employee = employee;

// allinfo();
//   }



// You are given an object called user that contains a person's name.
// You also have a function called introduce that introduces the person using their name, city, and country.
// Your task is to:
// Use call to invoke the function immediately with user as the context and pass individual arguments for city and country.
// Use apply to do the same but pass the arguments as an array.
// Use bind to create a copy of the function with user set as the context and predefined values for city and country. Then invoke that function later.
const user = {
    name: 'Sahil',

    introduce: function (name, city, country) {
        this.city = city;
        this.country = country;
        console.log(`${this.name} lives in ${this.city}, and the country is ${this.country}`);
    }
};

// Using call
user.introduce.call(user, 'Sahil', 'Lucknow', 'India');

// Using apply
user.introduce.apply(user, ['Sahil', 'Lucknow', 'India']);

// Using bind
const bindFn = user.introduce.bind(user, 'Sahil', 'Lucknow', 'India');
bindFn();



// Create a custom higher-order function called processData that takes a value and a callback function.
// Then simulate a real-life asynchronous operation like fetching user details, then getting their order details, then getting shipping details — all using nested callbacks
function processData(user, callback) {
    console.log(`Welcome ${user}`);
    callback(user);
}
function order(ord, callback) {
    console.log(`Your order is ${ord}`);
    callback(ord);
}

function shoppinglist(shop) {
    console.log(`Your shopping is ${shop}`);
}

processData("Sahil", (ord) => {
    order("Laptop", (shop) => {
        shoppinglist("Bharatpur, Rajasthan");
    });
});

const students = [
    { studentName: "Ajeet", rollNumber: 101, marks: 55 },
    { studentName: "Ravi", rollNumber: 102, marks: 45 },
    { studentName: "Ananya", rollNumber: 103, marks: 20 },
    { studentName: "Ishika", rollNumber: 104, marks: 85 },
    { studentName: "Kunal", rollNumber: 105, marks: 60 }
];
// Check if any student's marks are less than 60.
// If their marks are less than 60, add 20 grace marks to their score.
// After updating the marks, calculate the average marks of all the students who is passed(marks >= 60) (including those who received grace marks).
const mates = students.
    map((stud) => {
        if (stud.marks < 60) {
            stud.marks += 20;
        }
        return stud;
    })
    .filter((boom) => boom.marks >= 60)
    .reduce((acc, cu, _, arr) => acc + cu.marks / arr.length, 0);

console.log(mates);