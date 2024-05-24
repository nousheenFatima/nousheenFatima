// //********************** Tasks*************************//


// 1. Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format:
// The distance of 130 kms is equal to 209.2142 miles

//```````````````````````````````solution```````````````````````````````````````````````

//Create a variable named miles and assign a numeric value representing distance in miles.

let miles: number = 130;

// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.

let kilometers: number = miles * 1.60934;

// • Use console.log to print a message in the following format:
// The distance of 130 kms is equal to 209.2142 miles

console.log(`The distance of ${miles} miles is equal to ${kilometers} kilometers`)

//```````````````````````````````````Question 2```````````````````````````````````````````````````//
// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value.

//```````````````````````````````solution```````````````````````````````````````````````````````````//

import inquire from "inquirer"

// • Prompt the user to enter a number

let dynamicNumber: number = Math.floor((Math.random() * 10))
//console.log(dynamicNumber);

const ans = await inquire.prompt([
    {
        name : "guessingNumber",
        type :  "number",
        message : "Please Enter Your Number: "
    }    
])
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value.

if (ans.guessingNumber === dynamicNumber) {
    console.log("The user guessing number is equal to the dynamicNumber");
}
    else if (ans.guessingNumber > dynamicNumber) {
        console.log("The user guessing number is greater than to the dynamicNumber");
    }
    else if (ans.guessingNumber < dynamicNumber) {
        console.log("The user guessing number is less than to the dynamicNumber");
    }

//```````````````````````````````Question 3```````````````````````````````````````````//
    // 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default
// response.

//```````````````````````````````solution```````````````````````````````````````````````//

// Prompt the user to enter a name.
import inquirer from "inquirer"

// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a 
//default response.
const userName = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Please Enter a name: ",
    }
]);
const known_friend = ["Fatima", "Tom", "Haniya"];

if (known_friend.includes(userName.userName)) {
    // Use switch-case for confirmation
    switch (userName.userName) {
        case "Fatima":
        case "Tom":
        case "Haniya":
            console.log(`Congratulations! ${userName.userName} is a known friend.`);
            break;
    }
} else {
    console.log(`Sorry! ${userName.userName} is an unknown friend.`);
}

//`````````````````````````````Question 4```````````````````````````````````````````````````````//
// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.

//```````````````````````````````solution``````````````````````````````````````````````````````````//

// • Set up two different variables with different values.
let num1: number = 23;
let num2: number = 54;

// • Call a function with these variables as arguments and output the result using console.log.
function sum(num1: number, num2: number): number {
     return num1 + num2
}
let result: number = sum(num1, num2);
//console.log(result);

// • Create a second call to the function with two more numbers as arguments.
let secondCall: number = sum(67, 98);
console.log(secondCall);

//```````````````````````````````Question 5````````````````````````````````````````````````````//

// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

//```````````````````````````````solution``````````````````````````````````````````````````````````//

// • Set up two variables containing number values.
let value1: number = 134;
let value2: number = 65;

// • Set up a variable to hold an operator (+ or -)
let operator: string = "+";


// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.

function calculation(value1: number, value2: number, operator: string){
    switch (operator) {
        case "+":
            return value1 + value2;
            break;
        case "-": 
            return value1 - value2 
            break;  
    }
}

// • Call the function with the variables and operator, and output the result using console.log.
let firstOperation = calculation(value1, value2, operator);
//console.log(firstOperation);

// • Update the operator value and call the function again with the updated arguments.
operator = "-";
let updatedOperator = calculation(value1, value2, operator);
//console.log(updatedOperator);

//``````````````````````````````Question 6````````````````````````````````````````````````````//
// 4.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.

//```````````````````````````````solution````````````````````````````````````````````````````````//

//  Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
let greetings = function(name:string){
    console.log(`Assalam o Alaikum ${name} saheb!`);
}
// • Pass an argument into the function.
 greetings("Imran");

 // • Create the same function as a normal function declaration.

 function greeting(name: string){
    console.log(`Assalam o Alaikum ${name} saheb!`);
 }
 greeting("Khan");
