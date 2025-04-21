const user = {
    name: "Sahil",
    getName(age) {
        console.log(`Name: ${this.name}, Age: ${age}`);
    }
}
user.getName.call(user, 21); // call
user.getName.apply(user,[21]) // apply array main

const bindfn = user.getName.bind(user);
bindfn(21);//bind

//Bind function 
const per1 = {
    name: "king",
    getname() {
        console.log(`${this.name}`)
    }
}
const per2 = {
    name: "Lion"
}
const bindon = per1.getname.bind(per2);
bindon();
per1.getname();

//-1
// You have an object person with a method fullName(city, country).
// There is another object user with firstName and lastName properties.
// Write a code using the call() method to call the fullName method using the user object's data and print the full name along with the city and country.
const user1 = {
    informs: function (city, country) {
        console.log(`My Name is ${this.firstname} ${this.lastname} lives in ${city}, ${country}`)
    }
}
const name = {
    firstname: "Sahil",
    lastname: "Khare"
}
user1.informs.call(name, "Lucknow", "India")

//-2
// Create a method greet(greeting, punctuation) in an object.
// Then use another object with a name property.
// Use the apply() method to call the greet() function with the second object's context and pass arguments as an array.
const person1 = {
    greet: function (greeting, punctuation) {
        console.log(`${greeting},${this.name1} ${punctuation}`);
    }
};
const Name1 = {
    name1: "Aditya"
};

person1.greet.apply(Name1, ["Hello", "!"])

//-3
//Create an object with a method that uses this.name to display a greeting.
// Now use setTimeout() to call that method after 1 second.
// Use the bind() method to ensure the correct value of this inside the method when it's called later.
const you = {
    name: "Sahil",
    greeting: function () {
        console.log(`${this.name}, have a nice day`);
    }
};

const boundGreet = you.greeting.bind(you);
setTimeout(boundGreet, 1000)

//-4
// Create a standalone function that multiplies a number property from this with another number passed as an argument.
// Now create an object with a number property.
// Use the call() method to invoke the function with that object’s data and log the result.
function multiplying(number) {
    return this.num * number;
}
const numpro = {
    num: 5
}
const result = multiplying.call(numpro, 3)
console.log(result);
//-5
// Create an object with a method that prints a message using the this.name value.
// Now store that method in a variable and call it.
// Then use the bind() method to permanently bind the original object’s context to the method and call it again.
// Observe the difference in output.
const printer = {
    name: "Sahil",
    visible: function () {
        console.log(`The message is ${this.name}`)
    }
}
//Store in a variable
const store = printer.visible;
//Calling the value that is stored in a the variable
store();

const bindig = printer.visible.bind(printer);
bindig();