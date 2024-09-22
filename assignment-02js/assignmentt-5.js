          // Assignment # 05

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<p>Sum of" + " "+num1 + "  " + " and " +num2+ " "+ "is"+" "+sum+""+"</p>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 3;
var num2 = 5;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
document.write("<p> Subtraction of" + " "+num1 + "  " + " and " +num2+ " "+ "is"+" "+sub+""+"</p>");
document.write("<p> Multiplication of" + " "+num1 + "  " + " and " +num2+ " "+ "is"+" "+mul+""+"</p>");
document.write("<p> Division of" + " "+num1 + "  " + " and " +num2+ " "+ "is"+" "+div+""+"</p>");
document.write("<p> Modulus of" + " "+num1 + "  " + " and " +num2+ " "+ "is"+" "+mod+""+"</p>");




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

let num;
document.write("Value after variable declaration is: " + num + "<br>");
number = 5;
document.write("Initial value is: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remain = num % 3;
document.write("The remainder is: " + remain);



// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticket = 600;
var price = 5 * ticket;
document.write("<p> Total cost to buy 5 tickets to a movie is " + " "+price + "  " + " PKR "+ "</p>");



// 5. Write a script to display multiplication table of any number in your browser.
var number = 4;
document.write("<p>Table of " + number + "</p>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 25; 
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 70; 
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceItem1 = 650; 
var priceItem2 = 100; 
var quantityItem1 = 3; 
var quantityItem2 = 7; 
var shippingCharges = 100; 

var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is" + " "+ priceItem1 + "<br>");
document.write("Quantity of item 1 is" + " " + quantityItem1 +" " + "<br>");
document.write("Price of item 2 is " + " " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges" + " "+ shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + "");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 550; 
var marksObtained = 460; 

var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");




        

//9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var USD = 104.80; 
const SAR = 28; 
var dollars = 10;
var riyals = 25;
const totalInPKR = (dollars * USD) + (riyal * SAR);
document.write("<h2>Total Amount in Pakistani Rupees</h2>");
document.write("Total Amount in Pakistani Rupees: " + totalInPKR + " PKR");

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression
let number = 10;
let result = ((number + 5) * 10) / 2;
document.write("Result: " + result);


//11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

let currentYear = 2024;
let birthyear = 2003;
let age = currentYear - birthyear;

document.write("<h1> Age Calculator</h1>");
document.write("Current year:"+ "" + currentYear);
document.write("Birth year:"+ "" + birthyear);
document.write("Your age is"+ "" + age);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let radius = 10;
const pi = 3.14;
let circumference = 2 * pi * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of circle is: " + radius + "<br>");
document.write("The Circumference is: " + circumference + "<br>");
let area = pi * radius * radius;
document.write("The area is: " + area);

// 13 The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.

let favoriteSnack = "Lays";
let currentAge = 29;
let maxAge = 65;
let amountPerDay = 2;
document.write("<h1>LifeTime Supply Calculator</h1>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated age: " + maxAge + "<br>");
document.write("Amount snacks per day: " + amountPerDay + "<br>");
let totalSnackReq = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalSnackReq + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");