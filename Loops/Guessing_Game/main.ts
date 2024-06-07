// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SOLUTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Create a variable to store the maximum value

let maxValue: number = 100;

//Generate a random number by Useing Math.random() and Math.floor()

let randomVal: number = Math.floor(Math.random() *maxValue) +1 ;

//for development purpose print the random value
console.log("Your guess :  ",randomVal);

//Create a variable to track whether the user's guess is correct. Set it to false initially.

let userGuess: boolean = false;

//Use an array to store a series of predefined guesses

let userGuesses: number[] = [30, 84, 28, 63, 49, 56, 71, 98];

//Iterate over guesses by using while loop

let i = 0;       //initialization
while (!userGuess && i<userGuesses.length)       //condition
    {
    const currentGuess: number = userGuesses[i]  //add user guess into the array as well as store in a variable for checking purpose

    //check if the current guess matches the random number. Provide feedback if the guess is too high or too low.
if (currentGuess < randomVal){
    console.log(`Your guess is too low than the random value`);
}else if(currentGuess > randomVal){
    console.log(`Your guess is too high than the random value`);
} 
else{
    console.log(`Congratulations! Your guess is correct`);
    userGuess = true;
}
i++     //updation
}
if(!userGuess){
    console.log(`Sorry! your guess is wrong`);
}

