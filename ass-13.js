/*  🚀 Day 13: JavaScript Functions - Beginner Assignment

Today's Goal: Learn to create and use functions step by step with simple examples!



 🎯 What You're Learning Today

Core Concepts:
- How to create basic functions
- Parameters vs Arguments (simple explanation)
- Return statements (why we need them)
- Assignment: 20 easy function problems



 🔧 Functions Made Simple

 🎯 What is a Function?

Function = A box that does something for you

Real Life Example:
- Coffee Machine: You put in coffee beans (input) → Machine makes coffee (process) → You get hot coffee (output)
- Calculator: You put in 5 + 3 (input) → Calculator adds them (process) → You get 8 (output)

 🎯 Basic Function Structure


function functionName() {
    // Do something here
    return something; // Give back a result
}

// Use the function
functionName();


Simple Example:

function sayHello() {
    return "Hello!";
}

let message = sayHello();
console.log(message); // "Hello!"




 📝 Parameters and Arguments (Easy Way)

 🎯 What are Parameters?

Parameters = Empty boxes waiting for values


function addTwoNumbers(number1, number2) {  // number1 and number2 are parameters
    let result = number1 + number2;
    return result;
}


 🎯 What are Arguments?

Arguments = Actual values you put in the boxes


let sum = addTwoNumbers(5, 3);  // 5 and 3 are arguments
console.log(sum); // 8


Think of it like:
- Parameters: Empty cups labeled "sugar" and "milk"
- Arguments: Actual sugar and milk you pour into the cups



 🔄 Return Statements (Why We Need Them)

 🎯 Functions Without Return


function sayHi() {
    console.log("Hi there!");
    // No return = function gives back nothing useful
}

let result = sayHi();
console.log(result); // undefined (not useful!)


 🎯 Functions With Return


function makeGreeting() {
    return "Hi there!";
    // Return = function gives back something useful
}

let greeting = makeGreeting();
console.log(greeting); // "Hi there!" (useful!)


Why Return is Important:
- You can save the result in a variable
- You can use the result in calculations
- You can pass the result to other functions



 🎯 ASSIGNMENT: 20 Easy Function Problems

 📋 Problem Set 1: Basic Functions (No Parameters) - 5 problems

 Problem 1.1: Your first function

// Create a function that returns your name

function getMyName() {
    return "ramGopiNath";  // Put your name here
}

// Test your function
let name = getMyName();
console.log("My name is: " + name);

// Expected: "My name is: [ramGopiNath]"


 Problem 1.2: Simple calculator

// Create a function that returns 10 + 5

function addTenAndFive(a,b) {
    let result = a + b ;  // Fill in the numbers
    return result;
}

// Test your function
let sum = addTenAndFive(10,5);
console.log("10 + 5 = " + 15);

// Expected: "10 + 5 = 15"


 Problem 1.3: Current year

// Create a function that returns the current year

function getCurrentYear() {
    return 2024;  // Put 2024 here
}

// Test your function
let year = getCurrentYear();
console.log("Current year: " + 2024);

// Expected: "Current year: 2024"


 Problem 1.4: Simple message

// Create a function that returns "Learning JavaScript is fun!"

function getLearningMessage() {
    return "Leatning Javascript is fun!";  // Put the message here
}

// Test your function
let message = getLearningMessage();
console.log(message);

// Expected: "Learning JavaScript is fun!"


 Problem 1.5: Lucky number

// Create a function that returns your lucky number

function getMyLuckyNumber() {
    return 2;  // Put any number you like
}

// Test your function
let luckyNumber = getMyLuckyNumber();
console.log("My lucky number is: " + luckyNumber);

// Expected: "My lucky number is: [2]"


 📋 Problem Set 2: Functions with One Parameter - 5 problems

 Problem 2.1: Greet a person

// Create a function that greets a person by name

function greetPerson(name) {
    return "Hello, " + name + "!";  // Use the name parameter
}

// Test your function
let greeting1 = greetPerson("Alice");
let greeting2 = greetPerson("Bob");

console.log(greeting1);  // Expected: "Hello, Alice!"
console.log(greeting2);  // Expected: "Hello, Bob!"


 Problem 2.2: Double a number

// Create a function that doubles any number

function doubleNumber(number) {
    return number + number ;  // What should you multiply by to double? {No for double the number we have to do the addition and {+ "plus "} operator we have to use}
}

// Test your function
let result1 = doubleNumber(5);
let result2 = doubleNumber(10);

console.log(result1);  // Expected: 10
console.log(result2);  // Expected: 20


 Problem 2.3: Age next year

// Create a function that tells someone's age next year

function ageNextYear(currentAge) {
    return currentAge + 1;  // How much to add for next year? {every year we should increase the age by one}
}

// Test your function
let nextAge1 = ageNextYear(20);
let nextAge2 = ageNextYear(25);

console.log("Next year you will be: " + nextAge1);  // Expected: 21
console.log("Next year you will be: " + nextAge2);  // Expected: 26


 Problem 2.4: Square a number

// Create a function that squares any number (multiply by itself)

function squareNumber(number) {
    return number * number;  // What should you multiply number by?
}

// Test your function
let square1 = squareNumber(4);
let square2 = squareNumber(7);

console.log("4 squared = " + square1);  // Expected: 16
console.log("7 squared = " + square2);  // Expected: 49


 Problem 2.5: Add 10 to any number

// Create a function that adds 10 to any number

function addTen(number) {
    return number + 10;  // Use the number parameter
}

// Test your function
let result1 = addTen(5);
let result2 = addTen(25);

console.log(result1);  // Expected: 15
console.log(result2);  // Expected: 35


 📋 Problem Set 3: Functions with Two Parameters - 5 problems

 Problem 3.1: Add two numbers

// Create a function that adds any two numbers

function addNumbers(num1, num2) {
    return num1 + num2 ;  // Add the two parameters
}

// Test your function
let sum1 = addNumbers(5, 3);
let sum2 = addNumbers(10, 7);

console.log("5 + 3 = " + sum1);    // Expected: 8
console.log("10 + 7 = " + sum2);   // Expected: 17


 Problem 3.2: Multiply two numbers

// Create a function that multiplies any two numbers

function multiplyNumbers(num1, num2) {
    return num1 * num2 ;  // Multiply the two parameters
}

// Test your function
let product1 = multiplyNumbers(4, 5);
let product2 = multiplyNumbers(3, 8);

console.log("4 × 5 = " + product1);  // Expected: 20
console.log("3 × 8 = " + product2);  // Expected: 24


 Problem 3.3: Full name maker

// Create a function that combines first and last name

function makeFullName(firstName, lastName) {
    return firstName + " " + lastName;  // Combine with a space in between
}

// Test your function
let name1 = makeFullName("John", "Smith");
let name2 = makeFullName("Alice", "Johnson");

console.log(name1);  // Expected: "John Smith"
console.log(name2);  // Expected: "Alice Johnson"


 Problem 3.4: Find the larger number

// Create a function that returns the larger of two numbers

function findLarger(num1, num2) {
    if (num1 > num2) {
        return num1;  // Which number is larger?
    } else {
        return num2;  // Which number is larger?
    }
}

// Test your function
let larger1 = findLarger(8, 5);
let larger2 = findLarger(3, 9);

console.log("Larger of 8 and 5: " + larger1);  // Expected: 8
console.log("Larger of 3 and 9: " + larger2);  // Expected: 9


 Problem 3.5: Calculate age

// Create a function that calculates age from birth year

function calculateAge(birthYear, currentYear) {
    return (currentYear - birthYear);  // Subtract birth year from current year {No we have to subtract currentYear from birthYear}
}

// Test your function
let age1 = calculateAge(2000, 2024);
let age2 = calculateAge(1995, 2024);

console.log("Born in 2000, age is: " + age1);  // Expected: 24
console.log("Born in 1995, age is: " + age2);  // Expected: 29


 📋 Problem Set 4: Real-World Functions - 5 problems

 Problem 4.1: Restaurant bill calculator

// Create a function that calculates total bill with tip

function calculateBill(foodCost, tipPercent) {
    let tipAmount = foodCost * tipPercent / 100;
    let totalBill = foodCost + tipAmount;
    return totalBill;
}

// Test your function
let bill1 = calculateBill(500, 10);  // ₹500 food, 10% tip
let bill2 = calculateBill(1000, 15); // ₹1000 food, 15% tip

console.log("₹500 + 10% tip = ₹" + bill1);  // Expected: ₹550
console.log("₹1000 + 15% tip = ₹" + bill2); // Expected: ₹1150

// Create a simpler version:
function addTip(amount, tip) {
    return amount + tip;
}

let simpleTotal = addTip(500, 50);  // ₹500 + ₹50 tip
console.log("Simple total: ₹" + simpleTotal);  // Expected: ₹550


 Problem 4.2: Temperature converter

// Create a function that converts Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Test your function
let temp1 = celsiusToFahrenheit(0);   // Freezing point
let temp2 = celsiusToFahrenheit(100); // Boiling point

console.log("0°C = " + temp1 + "°F");   // Expected: 32°F
console.log("100°C = " + temp2 + "°F"); // Expected: 212°F

// Create the reverse function:
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;  // Return celsius
}

let backToC = fahrenheitToCelsius(32);
console.log("32°F = " + backToC + "°C");  // Expected: 0°C


 Problem 4.3: Simple interest calculator

// Create a function that calculates simple interest

function calculateInterest(principal, rate, time) {
    let interest = principal * rate * time / 100;
    return interest;
}

// Test your function
let interest1 = calculateInterest(10000, 5, 2);  // ₹10000, 5%, 2 years
let interest2 = calculateInterest(5000, 8, 3);   // ₹5000, 8%, 3 years

console.log("Interest on ₹10000: ₹" + interest1);  // Expected: ₹1000
console.log("Interest on ₹5000: ₹" + interest2);   // Expected: ₹1200

// Create total amount function:
function calculateTotal(principal, interest) {
    return principal + interest ;  // Add principal and interest
}

let total1 = calculateTotal(10000, interest1);
console.log("Total amount: ₹" + total1);  // Expected: ₹11000


 Problem 4.4: Grade calculator

// Create a function that determines grade from marks

function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test your function
let grade1 = getGrade(95);
let grade2 = getGrade(75);
let grade3 = getGrade(55);

console.log("95 marks = Grade " + grade1);  // Expected: A
console.log("75 marks = Grade " + grade2);  // Expected: C
console.log("55 marks = Grade " + grade3);  // Expected: F

// Create a function to check if passed
function isPassed(marks) {
    if (marks >= 60) {
        return true;  // true or false?
    } else {
        return false;  // true or false?
    }
}

let result = isPassed(75);
console.log("Passed with 75 marks: " + result);  // Expected: true


 Problem 4.5: Shopping discount calculator

// Create a function that applies discount

function applyDiscount(price, discountPercent) {
    let discountAmount = price * discountPercent / 100;
    let finalPrice = price - discountAmount;
    return finalPrice;
}

// Test your function
let price1 = applyDiscount(1000, 20);  // ₹1000, 20% off
let price2 = applyDiscount(500, 10);   // ₹500, 10% off

console.log("₹1000 with 20% off = ₹" + price1);  // Expected: ₹800
console.log("₹500 with 10% off = ₹" + price2);   // Expected: ₹450

// Create savings calculator:
function calculateSavings(originalPrice, discountedPrice) {
    return originalPrice - discountedPrice;  // How much money saved?
}

let savings = calculateSavings(1000, price1);
console.log("Money saved: ₹" + savings);  // Expected: ₹200




 🧪 Testing Your Functions

 📝 Testing Template


<!DOCTYPE html>
<html>
<head>
    <title>Day 13 - JavaScript Functions</title>
</head>
<body>
    <h1>🔧 My JavaScript Functions</h1>
    <p>Check the Console (F12) to see your functions working!</p>
    
    <script>
        console.log("=== Problem 1.1: My First Function ===");
        
        // Paste your function here
        function getMyName() {
            return "Your Name Here";
        }
        
        let name = getMyName();
        console.log("My name is: " + name);
        
        console.log("=== Problem 1.2: Simple Calculator ===");
        
        // Continue with next problem...
        
    </script>
</body>
</html>




 🎯 Assignment Checklist

 ✅ Complete All 20 Function Problems

Problem Set 1: Basic Functions (No Parameters)
- Problem 1.1: Your first function
- Problem 1.2: Simple calculator
- Problem 1.3: Current year
- Problem 1.4: Simple message
- Problem 1.5: Lucky number

Problem Set 2: Functions with One Parameter
- Problem 2.1: Greet a person
- Problem 2.2: Double a number
- Problem 2.3: Age next year
- Problem 2.4: Square a number
- Problem 2.5: Add 10 to any number

Problem Set 3: Functions with Two Parameters
- Problem 3.1: Add two numbers
- Problem 3.2: Multiply two numbers
- Problem 3.3: Full name maker
- Problem 3.4: Find the larger number
- Problem 3.5: Calculate age

Problem Set 4: Real-World Functions
- Problem 4.1: Restaurant bill calculator
- Problem 4.2: Temperature converter
- Problem 4.3: Simple interest calculator
- Problem 4.4: Grade calculator
- Problem 4.5: Shopping discount calculator



 🏆 Understanding Check

 ✅ After completing all problems, you should understand:

Basic Function Concepts:
- How to create a function with `function` keyword
- How to call/use a function
- What `return` does and why it's important
- Difference between parameters and arguments

Function Skills:
- Create functions without parameters
- Create functions with one parameter
- Create functions with multiple parameters
- Use functions for real-world calculations

Practical Applications:
- Calculator functions (add, multiply, etc.)
- Text functions (greetings, name combining)
- Math functions (square, interest, discounts)
- Decision functions (grades, comparisons)



 🎯 Success Criteria

Beginner Level Mastery:
- Can create basic functions that return values
- Understands how to pass data to functions
- Can use functions for simple calculations
- Knows when and why to use return statements

You're ready for Day 14 when you can:
- Write functions without looking at examples
- Combine multiple functions together
- Debug simple function errors
- Explain what parameters and return do



 💡 Tips for Success

 🎯 Remember the Function Pattern:

function nameOfFunction(inputData) {
    // Do something with inputData
    return result;
}

// Use it like this:
let answer = nameOfFunction(someValue);


 🎯 Common Mistakes to Avoid:
- Forgetting `return` (function gives undefined)
- Wrong parameter names (use descriptive names)
- Not testing with different values
- Forgetting parentheses when calling function

 🎯 Testing Strategy:
1. Write the function
2. Test with simple values first
3. Test with different values
4. Make sure return value makes sense

 */