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

type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOption: string[]
    }
};

//2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.

let products: Product[] = [
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
            colorOption: [ "pink", "orange", "brown", "white", "black"]
        },
    }
];
//console.log(products)


// 3. Implement a function named changeColor that takes a product object and a newcolor as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).

 function changeColor(products: Product, newColor: string):void {
   products.inventory.colorOption.push(newColor)
   switch (newColor) {
    case "red":
        console.log(`you chose the red color so the ${products.name} price with 10 percent increment will be ${products.price + (products.price * 0.10)}.`);
        break;
    case "blue":
        console.log(`you chose the blue color so the ${products.name} price with 5 percent decrement will be ${products.price - (products.price *  0.05)}`);
        break;
    default:
        console.log(`The price of the ${products.name} is ${products.price}`)
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
console.log(`--------------------------------------------------------`)
// 4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.

products.forEach(product => {
    console.log(`Name: ${product.name}`); // will log product name for each product
    console.log(`Price: ${product.price.toFixed(2)}`); // will log price for each product and .toFixed(2) shows two digits after decimal point
    console.log(`Stock: ${product.inventory.stock}`);  //will log inventory stock for each product
    console.log(`Available Colors: ${product.inventory.colorOption.join(", ")}`); // will log color option for each product and .join(",") adds new colors (", " ot means strind data type will be join)
    console.log('---');
});

// ````````````````````````````````````````````Part-2``````````````````````````````````````````//

// You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the 
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

type Student = {
    name : string,
    grade : number[]
}

// 2. Create an array named students containing at least three student objects. Each student  object should include a name and an array of grades.

let student: Student[] = [
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

]

// 3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.

function calculateAverageGrade(grades: number[]): number{
    let sum = 0;
    for (let grade of grades){
        sum += grade;
    }
    return sum / grades.length;   //average formula (sum of n / n)
}

// calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade

student.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grade);   // will print each student's name
    console.log(`The average grade of ${student.name} is ${averageGrade}`) // will print each student's name and average grade

})
// 4. Display each student's name and average grade. Iterate through the students array, 
// calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade

student.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grade); //storing function in a variable
    console.log(`Name : ${student.name},`)   // will print each student's name
    console.log(`The average grade for ${student.name} is ${averageGrade}`); // will print each student's name and average grade
})

console.log(`--------------------------------------------------------------------`); //for separate the part



// `````````````````````````````````````````````Part-3``````````````````````````````````````````````//

//You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.

type Employee = {
    name: string,
    hoursWorked: number,
    hourlyRate: number,
    salary: number
}

// 2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.

let employees: Employee[] = [
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

]

// 3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary

function calculateSalary(employee: Employee){
    let salary = employee.hoursWorked * employee.hourlyRate;  //salary formula = work hours * hourly rate
   console.log(`The actual salaray of ${employee.name} is ${salary.toFixed(2)}`)
   if (employee.hoursWorked >= 20){       //applying condition if worke hours are greater than or equal to 20 
    let salaryWithBonus = salary *= 1.10;  // applying 10 % bonus
    console.log(`Since ${employee.name} has worked ${employee.hoursWorked} hours therefor, the total salary with bonus is ${salaryWithBonus.toFixed(2)}.`);
} else{
    console.log(`The without bonus salary of ${employee.name} is ${salary.toFixed(2)}.`)
}
return salary; //will return salary when function will be called
}

employees.forEach(employee => {
    employee.salary = calculateSalary(employee);   // tjis will iterare the function for each employ
    console.log(`${employee.name}'s final salary is ${employee.salary.toFixed(2)}`);   //this will iterate the statement (inside the console.log) for each employee
});

