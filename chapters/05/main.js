// // 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");
document.querySelector("#add").innerHTML = `Sum of ${num1} and ${num2} is ${
  num1 + num2
}`;
// // // 2. Repeat taskı for subtraction, multiplication, division & modulus.
document.querySelector(
  "#math1"
).innerHTML = `<p>sub of ${num1} and ${num2} is ${num1 - num2}</p>`;
document.querySelector(
  "#math2"
).innerHTML = `<p>Multiplication of ${num1} and ${num2} is ${num1 * num2}</p>`;
document.querySelector(
  "#math3"
).innerHTML = `<p>Divide of ${num1} and ${num2} is ${num1 / num2}</p>`;
document.querySelector(
  "#math4"
).innerHTML = `<p>modules of ${num1} and ${num2} is ${num1 % num2}</p>`;

// // 3. Do the following using JS Mathematic Expressions
// //
// // a. Declare a variable.
let declareVariable = 6;
//     //  b. Show the value of variable in your browser like "Value after variable declaration is : ??".
document.querySelector(
  "#variable"
).innerHTML = `Value after variable declaration is : ${declareVariable}`;
//     //    c. Initialize the variable with some number.
let anyNumber = 10;
//     //    d. Show the value of variable in your browser like "Initial value : 5".
document.querySelector(
  "#showNumber1"
).innerHTML = `Initial value is : ${anyNumber}`;
//     //    e. Increment the variable.
anyNumber++;
//     // f. Show the value of variable in your browser like "Value after increment is : 6".
document.querySelector(
  "#showNumber2"
).innerHTML = `Value after increment is :${anyNumber}`;
//     // g. Add 7 to the variable.
anyNumber += 7;
//     // h. Show the value of variable in your browser like "Value after addition is : 13".
document.querySelector(
  "#showNumber3"
).innerHTML = `Value after addition 7 is : ${anyNumber}`;

//     //   i. Decrement the variable.
anyNumber--;
//     //  j. Show the value of variable in your browser like "Value after decrement is : 12".
document.querySelector(
  "#showNumber4"
).innerHTML = `Value after decrement is : ${anyNumber}`;

//     //    k. Show the remainder after dividing the variable's value by 3. 1. Output : "The remainder is : 0". tin%
document.querySelector("#showNumber5").innerHTML = `The remainder is : ${
  anyNumber % 3
}`;

//     // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output :
let movieTicket = 600;
let buyTicket = 5;
document.querySelector(
  "#movei"
).innerHTML = `Total Cost to buy ${buyTicket} to a movie ${
  movieTicket * buyTicket
}PKR`;
// 5. Write a script to display multiplication table of any number in your browser. E.g
let i;
for (i = 0; i <= 10; i++) {
  let table = 4;
  console.log(`${table} X ${i} = ${table * i}`);
}
// 6. The Temperature Converter : It's hot out! Let's make a converter based on the steps here.
//   a. Store a Celsius temperature into a variable.
let CelsiusTemp = 30;
// b. Convert it to Fahrenheit & output "NNoC is NNoF".
let FahrenheitTemp = (9 / 5) * CelsiusTemp + 32;
console.log(`Farhenheit Temperation is ${FahrenheitTemp}`);
// c. Now store a Fahrenheit temperature into a variable.
let FahrenheitTempValue = 30;
//  d. Convert it to Celsius & output "NNoF is NN.C". Conversion
let CelsiusTempValue = (5 / 9) * (FahrenheitTempValue - 32);
console.log(`Celsius Temperation is  ${CelsiusTempValue}`);
// Formulae : °C (°F-32)x5/9 °F = (°C x 9/5)+32 Computing

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
//   Store the following in variables
// a. Price of item 1
let item1 = 100;
console.log(`Price of item 1 is : ${item1}`);
// b. Price of item 2
let item2 = 200;
console.log(`price of item 2 is : ${item2}`);
// c. Ordered quantity of item 1
let item1Quantity = 3;
console.log(`Quantity of item 1 is ${item1Quantity}`);
//  d. Ordered Quantity of item 2
let item2Quantity = 5;
console.log(`Quantity of item 2 is : ${item2Quantity}`);
//  e. Shipping charges
let ShippingCharges = 80;
console.log(`Shipping Charges is : ${ShippingCharges}`);
// Compute the total cost & show the receipt in your browser.
let totalCharge =
  item1 * item1Quantity + item2 * item2Quantity + ShippingCharges;
console.log(`Your total charges is ${totalCharge}`);

//  8. Store total marks & marks obtained by a student in 2 variables.
let totalMarks = 850;
let obtainedMarks = 795;
//  Compute the percentage & show the result in your browser
console.log((obtainedMarks * 100) / totalMarks);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
// Write a script to convert the total currency to Pakistani Rupees.
let US = 10;
let Riyals = 25;
// Perform all calculations in a single expression.
console.log(`total pakistani paisy : ${US * 104.8 + Riyals * 28}PKR`);
//  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence :
let IntitalizeNumber = 10;
//  a. Add 5
IntitalizeNumber += 5;
// b. Multiply by 10
IntitalizeNumber *= 10;

// c. Divide the result by 2 Perform all calculations in a single expression
IntitalizeNumber /= 2;
console.log(IntitalizeNumber);

// 11. The Age Calculator : Forgot how old someone Calculate it!
// a. Store the current year in a variable.
let CurrentYear = 2024;
// b. Store their birth year in a variable.
let BirthYear = 2004;
// c. Calculate their 2 possible ages base values.
console.log(` Your Age is ${CurrentYear - BirthYear}`);
//  on the stored Output them to the screen like so : "They are either NN or NN years old".

// 12. The Geometrizer : Calculate properties of a circle.
// a. Store a radius into a variable.
let Radius = 20;
// b. Calculate the circumference based on the radius, and output "The circumference is NN".
let circumstances = 2 * 3.142 * Radius;
console.log(`The circumference is ${circumstances}`);
// (Hint : Circumference of a circle - 2πr, π- 3.142)
//  Calculate the area based on the radius, and output “The area is NN".
let area = 3.142 * Radius * Radius;
console.log(`The area is ${area}`);
// (Hint : Area of a circle = πr2, π = 3.142) -

// 13. The Lifetime Supply Calculator :
// Ever wonder how much a "lifetime supply" of your favorite snack is?Wonder no more.
// a. Store your favorite snack into a variable
let chips = "French Fries";
// b. Store your current age into a variable.
let currentAge = 20;
// c. Store a maximum age into a variable.
let maximumAge = 60;
// d. Store an estimated amount per day (as a number).
let estimatedAmount = 10;
// e. Calculate how many would you eat total for the rest of your life.
let remainAge = maximumAge - currentAge;
let totalChipsNeeded = remainAge * 365 * estimatedAmount;
// Mo Output the result to the screen like so
//  : "You will need NNNN to last you until the ripe old age of NN".
console.log(
  `You will need ${totalChipsNeeded} ${chips} to last you until the ripe old age of ${remainAge}`
);
