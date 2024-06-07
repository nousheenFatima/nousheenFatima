// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:

// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).

// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solution~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//scrambledArray as given in the question
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

//by using map method convert boolean and number data type in string as directed
const convertedArr: string[] = scrambledArray.map(element => element.toString())
console.log(convertedArr);   //["student", "of","true", "123", "am", "a", "GIAIC", "I"]

//by using splice method delete "true" at index 2 and "123"at index3
convertedArr.splice(2,2)  //  starting from index 2 delets 2 elements 
console.log(convertedArr); //["student", "of", "am", "a", "GIAIC", "I"]

// here slice method copies the elements regarding their index position
let slicedElements = convertedArr.slice(2,4); // copies from 2 (starting) index to befor index 4
 console.log(slicedElements); //["am", "a"]

 convertedArr.splice(2,2) //delets "am" and "a" from index 2 to index 3
console.log(convertedArr);  //prints ["student", "of", "GIAIC","I"]

//unshift method add 1 or more elements from starting index of the array
 convertedArr.unshift(slicedElements[0], slicedElements[1]) //adds "am" "a"

 convertedArr.unshift(convertedArr[5]); //now adds "I" at index 0

// pop method deletes just one element at last index 
convertedArr.pop()  //deletes "I" at the end

console.log(convertedArr); // here we get arranged array with 5 string values

//to convert 2 or more than values of string into 1 string, we use join method
 console.log(`combine elements back into a single string: ${convertedArr.join(" ")}.`);

 
