// nested if-else statement
let Temp = 28;
let humid = 75;
let wind = 10;

if (Temp >= 35) {
    console.log("It's very hot! Drink water.")
}
else {
    if (Temp >= 25 && Temp < 35) {
        if (humid > 70) {
            console.log("Hot and humid, turn on the AC.")

        } else {
            console.log("It's warm but manageable.")
        }
    }
    if (Temp >= 15 && Temp < 25) {
        if (wind > 15) {
            console.log("Cool breeze is blowing.")

        } else {
            console.log("The weather is pleasant.")
        }
    }
    else if (Temp < 15) {
        console.log("It's cold, wear a sweater.")
    }
}

// use nested ternary☑️
let price = 8000;
let membership = true
let disc = price >= 10000 ? 20 : price >= 5000 && price < 10000 ? 10 : price < 5000 && (membership === true) ? 5 : 0
console.log(`Discount ${disc}`)

// if-else + ternary
let marks = 75
let attendance = 85
if (marks >= 90) {
    console.log("A+")
} else {
    if (marks >= 80) {
        console.log("A")
    }
    else {
        if (marks >= 70) {
            attendance > 75 ? console.log("B+") : console.log("B")
        }
        else {
            marks >= 60 ? console.log("C") : console.log("Fail")
        }
    }
}

// Switch-case + ternary
let food = "pizza"
let size = "large";
switch (food) {
    case "pizza": size == 'small' ? console.log("$200") : size === 'medium' ? console.log("$400") : console.log("$600")
        break;
    case "Burger": console.log("$150")
        break;
    case "Pasta": console.log("300")
        break;
    default:
        console.log("Not Available")

}

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
let Marks = 70
let Attendance = 65
if (Marks >= 80 && Attendance >= 75) {
    console.log("Excellent")
}
else if (Marks >= 60 && Attendance >= 60) {
    console.log("Good")
}
else if (Marks >= 40 && Attendance >= 50) {
    console.log("Average")
}
else {
    console.log("Poor")
}