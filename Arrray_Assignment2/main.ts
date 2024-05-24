// Question 1) Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".

const fruits: string[] = ["apple", "banana", "mango", "orange"];

// Question 2) Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[];
numbers = [10, 20, 30, 40];

// Question 3) Access the third element of the fruits array and assign it to a variable named thirdFruit.

const thirdFruit: string = fruits[2];

// Question 4) Change the second element of the numbers array to 25.

numbers[1] = 25;

// Question 5) Add the element "grape" to the end of the fruits array using the method.

fruits.push("grape");

// Question 6) Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

const lastFruit: string | undefined = fruits.pop();

// Question 7) Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

const firstFruit: string | undefined = fruits.shift();

// Question 8) Add the element "kiwi" to the beginning of the fruits array using the method.

fruits.unshift("kiwi");

// Question 9) Remove 2 elements from the fruits array starting from index 1 using the method.

fruits.splice(1, 2);

// Question 10) Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

fruits.splice(2, 0, "pineapple", "pear");

// Question 11) Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.

const citrusFruits: string[] = fruits.slice(0, 2);

// Question 12) Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

const lastTwoFruits: string[] = fruits.slice(-2);

console.log(fruits);         // for debugging purpose
console.log(numbers);        // for debugging purpose
console.log(thirdFruit);     // for debugging purpose
console.log(lastFruit);      // for debugging purpose
console.log(firstFruit);     // for debugging purpose
console.log(citrusFruits);   // for debugging purpose
console.log(lastTwoFruits);  // for debugging purpose
console.log(fruits);         // for debugging purpose

