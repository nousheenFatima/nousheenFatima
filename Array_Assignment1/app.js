//`````````````````````````````Part 1: Basic Arrays - Product Inventory``````````````````````````````//
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.
// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
//2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
var products = [
    {
        name: "T-shirts",
        price: 300,
        inventory: {
            stock: 5000,
            colorOption: ["grey", "green", "white", "brown", "yellow"]
        }
    },
    {
        name: "Hand-bag",
        price: 1200,
        inventory: {
            stock: 500,
            colorOption: ["silver", "golden", "black", "white", "brown"]
        }
    },
    {
        name: "Scarf",
        price: 800,
        inventory: {
            stock: 2000,
            colorOption: ["pink", "orange", "brown", "white", "black"]
        },
    }
];
//console.log(products)
// 3. Implement a function named changeColor that takes a product object and a newcolor as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
function changeColor(products, newColor) {
    products.inventory.colorOption.push(newColor);
    switch (newColor) {
        case "red":
            console.log("you chose the red color so the ".concat(products.name, " price with 10 percent increment will be ").concat(products.price + (products.price * 0.10), "."));
            break;
        case "blue":
            console.log("you chose the blue color so the ".concat(products.name, " price with 5 percent decrement will be ").concat(products.price - (products.price * 0.05)));
            break;
        default:
            console.log("The price of the ".concat(products.name, " is ").concat(products.price));
            break;
    }
    return;
}
changeColor(products[0], "blue");
changeColor(products[0], "red");
changeColor(products[1], "blue");
changeColor(products[1], "red");
changeColor(products[2], "blue");
changeColor(products[2], "red");
console.log("--------------------------------------------------------");
// 4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price.toFixed(2)));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOption.join(", ")));
    console.log('---');
});
// 2. Create an array named students containing at least three student objects. Each student  object should include a name and an array of grades.
var student = [
    {
        name: "Fatima",
        grade: [87, 91, 68, 77, 81]
    },
    {
        name: "Rida",
        grade: [65, 78, 89, 56, 88]
    },
    {
        name: "Hira",
        grade: [64, 54, 76, 79, 72]
    },
];
// 3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
function calculateAverageGrade(grades) {
    var sum = 0;
    for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
        var grade = grades_1[_i];
        sum += grade;
    }
    return sum / grades.length;
}
// calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade
student.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grade);
    console.log("The average grade of ".concat(student.name, " is ").concat(averageGrade));
});
// 4. Display each student's name and average grade. Iterate through the students array, 
// calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade
student.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grade);
    console.log("Name : ".concat(student.name, ","));
    console.log("The average grade for ".concat(student.name, " is ").concat(averageGrade));
});
console.log("--------------------------------------------------------------------");
// 2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.
var employees = [
    {
        name: "Majid",
        hoursWorked: 21,
        hourlyRate: 300,
        salary: 0
    },
    {
        name: "Rashid",
        hoursWorked: 18,
        hourlyRate: 500,
        salary: 0
    },
    {
        name: "Zahid",
        hoursWorked: 24,
        hourlyRate: 100,
        salary: 0
    }
];
// 3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary
function calculateSalary(employee) {
    var salary = employee.hoursWorked * employee.hourlyRate;
    console.log("The actual salaray of ".concat(employee.name, " is ").concat(salary.toFixed(2)));
    if (employee.hoursWorked >= 20) {
        var salaryWithBonus = salary *= 1.10;
        console.log("Since ".concat(employee.name, " has worked ").concat(employee.hoursWorked, " hours therefor, the total salary with bonus is ").concat(salaryWithBonus.toFixed(2), "."));
    }
    else {
        console.log("The without bonus salary of ".concat(employee.name, " is ").concat(salary.toFixed(2), "."));
    }
    return salary;
}
employees.forEach(function (employee) {
    employee.salary = calculateSalary(employee);
    console.log("".concat(employee.name, "'s final salary is ").concat(employee.salary.toFixed(2)));
});
