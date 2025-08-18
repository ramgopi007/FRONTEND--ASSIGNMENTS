/* 🚀 Day 11: JavaScript var, let, const & Scope Problems

Today's Goal: Solve 20 beginner-level problems to master variable declarations and scope!

---

🎯 Understanding var, let, const

📝 Quick Reference

const - Cannot change value:

const name = "John";
// name = "Jane";  // ❌ Error!


let - Can change value:

let age = 20;
age = 21;  // ✅ Works!


var - Old way (avoid):

var old = "avoid using";


---

🎯 ASSIGNMENT: 20 Scope Problems

📋 Problem Set 1: Basic let vs const (5 problems)

Problem 1.1: Fix the errors

// Find what's wrong and fix it

const studentName = "Rahul";
const studentAge = 20;

studentName = "Priya";  // Line 4: Error here - {because we cannot reassign or re declare the studentName . because we created the variable by using the const keyword . the const keyword mens we cannot change the value .}
studentAge = 21;        // Line 5: Error here -{ Type error }

console.log(studentName, studentAge); // { Type error }

// Your answer:
// Line 4 error because: ???
// Line 5 error because: ???
// Fix: Change const to { let we have to use the keyword } for variables that need to change


Problem 1.2: Choose let or const

// Fill in the blanks with let or const

{const} schoolName = "ABC College";     // This never changes
{let} currentMarks = 0;               // This will change
{const} maxMarks = 100;                 // This never changes
{let} studentCount = 50;              // This might change
{const} pi = 3.14;                      // This never changes

// Test: Try to change each variable
schoolName = "XYZ College";    // Should this work? {this will not work beacuse we use the const keyword so , that's we cannot use the like this and it will give the error like}
currentMarks = 85;             // Should this work? {Yeah it will work because we use the keyword let so, for let we can declare the once and reassign many times}
maxMarks = 200;                // Should this work? {It will not work because we declared with const keyword and it will give the error Type error}


Problem 1.3: Const declaration errors

// Each line has a problem. Fix them:

const;                    // Problem:  {Syntax error unexpexted end of input }
const userName;           // Problem:  {Syntax error , we have to initialize the const variable }
const userAge = 25;       //{It will give the correct output because we are the created the variable using the const and we declare and intialize in a single line}
const isActive;           // Problem: {Synstx error , because we have to initialize the const variable}

// Write the correct versions:


Problem 1.4: Mixed declarations

// Decide let or const for each variable

{const} firstName = "Aarav";           // First name doesn't change
{const} lastName = "Sharma";            // Last name doesn't change  
{let} fullName = firstName + " " + lastName;  // Combination might change
{let} currentYear = 2024;             // Current year changes yearly
{const} birthYear = 2000;               // Birth year never changes
{let} currentAge = currentYear - birthYear;   // Age changes yearly

// Questions: 
// Which variables should be const? {birthYear , firstName , LastName}
// Which variables should be let? {fullName, currentYear , currentAge}


Problem 1.5: Value change test

// Predict which lines will cause errors

const message = "Hello";
let counter = 0;
const max = 10;

message = "Hi";           // Line 5: Error? {Type error }
counter = counter + 1;    // Line 6: Error? {No error because we use the let keyword for let we reassign the let }
max = 20;                 // Line 7: Error? {Type error}
counter = counter + 1;    // Line 8: Error? {No error}

console.log(message, counter, max);

// Write your predictions and then test the code


📋 Problem Set 2: Global Scope (5 problems)

Problem 2.1: Global variable access

// These are global variables
const globalMessage = "I'm global";
let globalCounter = 0;

// Can you access globalMessage here? {yes we can access the globalMesssage here because we have created only one time and one time acess}
console.log(globalMessage);

// Can you access globalCounter here? {yes }
console.log(globalCounter);{0}

// Can you change globalCounter here? {yes we can change the globalCounter beacuse the variable is declared with let keyword }
globalCounter = 5; 
console.log(globalCounter); {5}

// Can you change globalMessage here? ???
globalMessage = "Changed";    // Will this work? {No it will not work because we cannot reassign the variables which are declared by const keyword and it will show the type error}


Problem 2.2: Global vs local names

// Global variables
const name = "Global Name";
let age = 25;

// What will this print?
console.log("Before:", name, age);    // Output: "Before:" Global Name 25 

{
    const name = "Local Name";        // Different variable
    let age = 30;                     // Different variable
    
    console.log("Inside:", name, age);  // Output: Inside: Local Name 30 
}

console.log("After:", name, age);     // Output: After: Global Name 25

// Explain what happened:
{In the above we declared two variables with const and let key word so they will refer to the global scope and then we created another 
two variables with same name but inside the block so, it will not give any error because they are declared in the local scope }

Problem 2.3: Accessing globals everywhere

// Global variables
const siteName = "My Website";
let visitorCount = 100;

{
    // Inside a block
    console.log(siteName);      // Can access? "My Website"
    console.log(visitorCount);  // Can access? 100
    
    visitorCount = visitorCount + 1;  // Can change? {yes it will become 101}
}

{
    // Inside another block
    console.log(siteName);      // Can access? "My Website"
    console.log(visitorCount);  // Can access? {101}
}

// Final values
console.log("Final count:", visitorCount);  // Value: 101


Problem 2.4: Global scope mistakes

// Fix the scope issues

const appName = "My App";

{
    const userName = "John";
    console.log(appName);     // Works fine {yes it will give MyApp}
    console.log(userName);    // Works fine {yes it will give John}
}

console.log(appName);        // Works fine {yes because it is in the global scope so it will give}
console.log(userName);       // Error - why? {because it is declared inside the blcok level scope we cannot acess the  userName}

// How do you fix this to access userName outside the block?
// Solution: Move userName declaration to {global scope so we can acess the userName everywhere} scope


Problem 2.5: Global modifications

// Predict the final values

let score = 0;
const maxScore = 100;

{
    score = 25;
    console.log("Block 1 score:", score);  // Value: {25}
}

{
    score = score + 30;
    console.log("Block 2 score:", score);  // Value: {55}
}

score = score + 10;
console.log("Final score:", score);       // Value: {65}

// Can you change maxScore anywhere? {No we cannot change the maxscore anywhere because it is declared with const keyword }
// Why or why not? {because it is declare with const keyword and const variables are cannot reassign}


📋 Problem Set 3: Block Scope (5 problems)

Problem 3.1: Simple block scope

// Predict what works and what doesn't

{
    const blockMessage = "Inside block";
    let blockNumber = 42;
    
    console.log(blockMessage);  // Works? {Inside block}
    console.log(blockNumber);   // Works? {42}
}

console.log(blockMessage);     // Works? {No} Why? {because is declared and intialize in the local scope so we cannot access the local scope vaiables out side the scope}
console.log(blockNumber);      // Works? {No} Why? {because is declared and intialize in the local scope so we cannot access the local scope vaiables out side the scope}

// Rule: Variables declared inside {} can only be accessed {inside the block scope because they are declared in the block level scope}


Problem 3.2: Nested blocks

// Fill in the access predictions

{
    const level1 = "Level 1";
    
    {
        const level2 = "Level 2";
        
        console.log(level1);    // Can access? {yes Level 1}
        console.log(level2);    // Can access? {yes Level 2}
    }
    
    console.log(level1);        // Can access? {yes Level 1}
    console.log(level2);        // Can access? {because we cannot access the local scope variable in out side the scope}
}

console.log(level1);            // Can access? {No} Why? {Because we declared the level1 variable inside the local scope and we cannot acess that variable in the global scope}

// Rule: Inner blocks can access outer block  variables
// Rule: Outer blocks cannot access inner block variables


Problem 3.3: Block scope with same names

// Predict the outputs

const message = "Outer message";

{
    const message = "Inner message";
    console.log("Inside block:", message);    // Output: {Inner block: message}
}

console.log("Outside block:", message);      // Output: {Outside block: message}

// Question: Are these the same variable? {No}
// Explanation: {because one variable is created in the global scope and another variable is created in inner block so the memory will be allocated for both the variables is different}


Problem 3.4: Multiple blocks

// Track the variable access

let counter = 0;

{
    counter = 10;
    console.log("Block 1:", counter);        // Output: {Block 1:10}
}

{
    let counter = 20;                        // New variable!
    console.log("Block 2:", counter);        // Output: Block 2:20
}

console.log("Outside:", counter);            // Output: {Outside: 10}

// Why is the final counter value 10 and not 20? {because in the second block we created the new block scope variable so that variable we can acess only with in that block scope not outside}


Problem 3.5: Block scope errors

// Fix the errors to make all console.log work

{
    const secretCode = "ABC123";
    let attempts = 3;
}

console.log("Code:", secretCode);           // Error - How to fix? 
console.log("Attempts left:", attempts);   // Error - How to fix? ???

// Solution 1: Move variables to global scope
// Solution 2: Move console.log to block scope
// Write your fixed version:

Solution1:
const secretCode = "ABC123";
let attempts =3;
console.log(secretCode);
console.log(attempts);

Solution2:
{
const secretCode = "ABC123";
let attempts = 3;
console.log(secretCode);
console.log(attempts);
}

📋 Problem Set 4: var vs let vs const (5 problems)

Problem 4.1: var scope difference

// Compare var and let behavior

{
    var varVariable = "I'm var";
    let letVariable = "I'm let";
}

console.log(varVariable);      // Works? {declared with var keyword for variables var is a global scope variables so we acess throughout the program}
console.log(letVariable);      // Works? {No} Why different? {we cannot acess the let Variable because let keyword has block scope so we cannot acess the block scope variable out side the block scope}

// Explanation: var has global scope, let has local or Block scope


Problem 4.2: var redeclaration

// What happens with var vs let redeclaration?

var name = "First";
var name = "Second";           // Works? {yes because using var keyword we can redeclare the vairables and reasign also}
console.log(name);             // Output: {so the name will get updated and output will be Second}

let age = 20;
let age = 25;                  // Works? {No} Why? {Because we cannot redeclare variables which are created by let keyword}
console.log(age); {syntax error because age variable is already created}

// Rule: var allows {redeclaration and reassign}, let does not allow {redeclare , but we can reassign}


Problem 4.3: var hoisting confusion

// Predict the behavior (don't worry about understanding why yet)

console.log(myVar);            // Output: undefined (not an error!)
var myVar = "Hello";
console.log(myVar);            // Output: Hello

console.log(myLet);            // Output: Reference Error : because it is in the temperal deadZone we cannot acess the variable which inside the TDZ (error!)
let myLet = "World";
console.log(myLet);            // Output: World

// Note: var behaves strangely - this is why we avoid it


Problem 4.4: Mixing var, let, const

// Fix this code to use proper variable types

var userName = "John";         // Should this be var, let, or const? {let}
var userAge = 25;              // Should this be var, let, or const? {let}
var maxAge = 120;              // Should this be var, let, or const? {const}

userName = "Jane";             // This should work 
userAge = userAge + 1;         // This should work 
maxAge = 150;                  // This should NOT work

// Rewrite with proper variable declarations:


Problem 4.5: Best practices

// Choose the best variable type for each

const PI = 3.14159;               // Never changes
let radius = 5;                 // Will change for different circles
let area;                       // Will be calculated later
let circleCount = 0;            // Will count circles created

area = PI * radius * radius;
circleCount = circleCount + 1;

// Rules to remember:
// Use {const} when value never changes
// Use {let} when value might change
// Avoid {var} in modern JavaScript


---

🧪 Testing Your Solutions

📝 How to Test Each Problem

1. Copy the code into a new HTML file
2. Add your answers where you see ???
3. Open the file in a web browser
4. Press F12 to open console
5. Check for errors and fix them

🎯 Basic Testing Template

html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Practice</title>
</head>
<body>
    <h1>Check the Console (F12)</h1>
    
    <script>
        // Paste your problem code here
        console.log("Problem 1.1:");
        
        // Your solution here
        
    </script>
</body>
</html>


---

 Answer Key (Check After Attempting)

Problem 1.1 Answers:
- Line 4 error because: const cannot be changed after declaration
- Line 5 error because: const cannot be changed after declaration  
- Fix: Change const to let for variables that need to change

Problem 2.1 Answers:
- Can access globalMessage: Yes (global scope)
- Can access globalCounter: Yes (global scope)
- Can change globalCounter: Yes (let allows changes)
- Can change globalMessage: No (const doesn't allow changes)

Problem 3.1 Answers:
- blockMessage works inside: Yes
- blockNumber works inside: Yes
- blockMessage works outside: No (block scope)
- blockNumber works outside: No (block scope)

---

🎯 Assignment Checklist

✅ Complete All 20 Problems

Problem Set 1: Basic let vs const
-  Problem 1.1: Fix the errors
-  Problem 1.2: Choose let or const
-  Problem 1.3: Const declaration errors  
-  Problem 1.4: Mixed declarations
-  Problem 1.5: Value change test

Problem Set 2: Global Scope
-  Problem 2.1: Global variable access
-  Problem 2.2: Global vs local names
-  Problem 2.3: Accessing globals everywhere
-  Problem 2.4: Global scope mistakes
-  Problem 2.5: Global modifications

Problem Set 3: Block Scope  
-  Problem 3.1: Simple block scope
-  Problem 3.2: Nested blocks
-  Problem 3.3: Block scope with same names
-  Problem 3.4: Multiple blocks
-  Problem 3.5: Block scope errors

Problem Set 4: var vs let vs const
-  Problem 4.1: var scope difference
-  Problem 4.2: var redeclaration
-  Problem 4.3: var hoisting confusion
-  Problem 4.4: Mixing var, let, const
-  Problem 4.5: Best practices

✅ Understanding Check

After completing all problems, you should understand:
-  When to use const vs let
-  What global scope means
-  What block scope means  
-  Why var is problematic
-  How to fix common scope errors

---

🏆 Success Criteria

Beginner Level Mastery:
- Can choose between let and const correctly
- Understands basic global vs block scope
- Can identify and fix simple scope errors
- Knows why var should be avoided

You're ready for Day 12 when you can:
- Declare variables with proper let/const choice
- Predict which variables are accessible where
- Fix basic scope-related errors
- Explain the difference between global and block scope
 */