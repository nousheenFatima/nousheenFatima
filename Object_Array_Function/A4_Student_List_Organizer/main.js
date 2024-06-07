// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
// 2. Student List:An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// Initialize the students array
var students = [];
// Student List: An array named students stores information about several students using the Student template.
var stdnt1 = {
    name: "Imran",
    seniorStatus: true,
    asgnmntCmpltd: true
};
var stdnt2 = {
    name: "Bisma",
    seniorStatus: true,
    asgnmntCmpltd: true
};
var stdnt3 = {
    name: "Nousheen",
    seniorStatus: false,
    asgnmntCmpltd: false
};
var stdnt4 = {
    name: "Ibaheem",
    seniorStatus: false,
    asgnmntCmpltd: true
};
students.push(stdnt1, stdnt2, stdnt3, stdnt4);
console.log("Class List:", students);
// 3. Find Senior Students with Assignments (Optional):The code (not shown here) has a function that might find students who are seniors and have completed their assignments.Can you guess why this information might be helpful?
// The function below finds students who are seniors and have completed their assignments.This information is useful to identify responsible students and potentially reward or acknowledge their efforts.
function findSeniorStudentsWithAssignments(students) {
    // Filter the students array to include only those who are seniors and have completed their assignments
    return students.filter(function (student) { return student.seniorStatus && student.asgnmntCmpltd; });
}
// Call the function to get senior students who have completed their assignments
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed their assignments:", seniorStudentsWithAssignments);
//4. Class List Update:Imagine you need to update your class list! The code (not shown here) might have a function that removes students who haven't completed their assignments (assuming only seniors are responsible). Can you think of any reasons why this might be useful (consider limitations)?
// The function below updates the class list by removing students who haven't completed their assignments, assuming only seniors are responsible for completing assignments. This helps maintain accountability.
function updateClassList(students) {
    // Filter the students array to include only seniors who have completed their assignments 
    return students.filter(function (student) { return student.seniorStatus && student.asgnmntCmpltd; });
}
// Call the function to get the updated class list
var updatedClassList = updateClassList(students);
console.log("Updated class list with only seniors who have completed their assignments:", updatedClassList);
