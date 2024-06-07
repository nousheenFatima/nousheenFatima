// 5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops to iterate through array elements.
// Instructions:
// 1. Create an empty array: Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:  Use a for loop to iterate 10 times. In each iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console: After populating the array, log the myArray into the console.
// 4. Use the for loop to iterate through the array: Use a for loop to iterate through the array elements. Adjust the number of iterations based on the number of values in the array. Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array: Use a for...of loop to iterate through the array elements. Output each

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SOLUTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//1. create an empty array named myArray

let myArray: number[] = [];

//2.Run for loop 10 times. Because array is empty so add a new incrementing value by push method

for(let i=1; i<=10; i++){
    myArray.push(i);
};

//step 3. log the myArray to the console

console.log(myArray);

// 4. Use the for loop to iterate through the array: Use a for loop to iterate through the array elements. Adjust the number of iterations based on the number of values in the array. Output each array element along with its index into the console.

// Use the for loop to iterate through the array elements

for (let i = 0; i < myArray.length; i++) {
    console.log(`Index: ${i}, Value: ${myArray[i]}`);
}

// 5. Use the for...of loop to output the value into the console from the array:
//  Use a for...of loop to iterate through the array elements. Output each array element directly into the console.

//Step 5: Use the for...of loop to output the value into the console from the array

for (let element of myArray) {
    console.log(element)
}


