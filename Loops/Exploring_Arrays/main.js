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
var myArray = [];
//2.Run for loop 10 times and add a new incrementing value
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
;
// 3. log the myArray to the console
console.log(myArray);
// 4. Use the for loop to iterate through the array: Use a for loop to iterate through the array elements. Adjust the number of iterations based on the number of values in the array. Output each array element along with its index into the console.
for (var i = 0; i < myArray.length; i++) {
    console.log("Index: ".concat(i, ", Value: ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var element = myArray_1[_i];
    console.log(element);
}
