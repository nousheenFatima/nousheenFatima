// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your friend list.


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Solution~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Define an object named people containing an empty array called friends.
interface People  {
    friends: friend[]
}
let people: People = {
    friends :[]
}    


// Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
interface  friend {
    firstName : string,
    lastName : string,
    id? : number 
}

let friend1: friend = {
    firstName : "Beena",
    lastName : "Zehra",
    id : 4563
}

let friend2: friend = {
    firstName : "Sumaira",
    lastName : "Faheem",
}

let friend3: friend = {
    firstName : "Firdous",
    lastName : "Rafi",
    id : 3421
}

//Add these friend objects to the friends array within the people object.
 people.friends.push(friend1, friend2, friend3);

// Output the entire people object to the console, displaying your information and your friend list. 
 console.log(people);
 

