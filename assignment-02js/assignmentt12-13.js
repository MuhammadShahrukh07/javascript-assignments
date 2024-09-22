                   //  Assignment 12-13

// 1. Write a program that takes a character (number or string in 
// a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

let character = prompt("Enter a character:");
let asciiCode = character.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("" + character + " is a number.");
}
else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("" + character + " is an uppercase letter.");
}

else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("" + character + " is a lowercase letter.");
}
else {
    console.log("" + character + " is not a number or a letter.");
}


  // 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
} else {
    console.log("Both numbers are equal.");
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    console.log(num + " is a positive number.");
} else if (num < 0) {
    console.log(num + " is a negative number.");
} else {
    console.log("The number is zero.");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let char = prompt("Enter a character:").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("True, it is a vowel.");
} else {
    console.log("False, it is not a vowel.");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.

let correctPassword = "pass123";

let userPassword = prompt("Please enter your password:");

if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); 

