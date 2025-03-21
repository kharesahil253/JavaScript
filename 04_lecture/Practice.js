// nested if-else statement☑️
let Temp = 35;
let humid = 75;
let wind = 10 ;

if (Temp >= 35) {
    console.log("It's very hot! Drink water.")
    if (Temp >= 25 && Temp < 35) {
        console.log("  ")
    }
    else {
        if (humid > 70) {
            console.log("Hot and humid, turn on the AC.")
        }
        else {
            console.log("It's warm but manageable.")
        }
        if (wind > 15) {
            console.log("Cool breaze is blowing")
        } else {
            console.log("The Weather is pleasant")
        }
    }
}

// use nested ternary☑️
let price = 2300;
let membership = true
price >= 10000 ? console.log("20% discount") : price >= 5000 && price < 10000 ? console.log("10% discount") : price < 5000 && (membership === true) ? console.log("5% discount") : console.log("no discount")

// if-else + ternary☑️
let marks = 45
let attendance = 75
if (marks >= 90) {
    console.log("A+")
} else {
    marks >= 80 ? console.log("A") : marks >= 70 && attendance > 75 ? console.log("B+") : console.log("B")
    if (60 >= marks) {
        console.log("C")
    } else {
        clg("Fail")
    }
}

//Switch-case + ternary
// let food="pizza"
// let size = "small";
// switch (size) {
//     case small: console.log("$200")
//         break;
//     case medium: console.log("$400")
//         break;
//     case large: console.log("$600")
//         break;
//     case 
//     default:
//         food = "Burger" ? console.log("$150") : console.log("300")
//         break;
// }

//Nested ternary☑️
let age = 35
age < 18 ? console.log("50% Discount") : age < 18 && age <= 60 ? console.log("20% Discount") : console.log("30% Discount")

//switch case ☑️
let vechile = "Bike"
switch (vechile) {
    case "Car": console.log("10,000 tax")
        break;
    case "Bike": console.log("5,000 tax")
        break;
    case "Truck": console.log("20,000 tax")
        break;
    case "Electric": console.log("No tax")
        break;
    default:
        console.log("Unknown vechile type")
        break;
}

//else if ☑️
let Marks = 96
let Attendance = 95
if (Marks >= 80 && Attendance >= 75) {
    console.log("Excellent")
} 
else if(Marks >= 60 && Attendance >= 60 ) {
    console.log("Good")
}
else if(Marks >= 40 && Attendance >= 50){
    console.log("Average")
}
else{
    console.log("Poor")
}