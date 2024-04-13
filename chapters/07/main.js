// // 1. Write a program to take "city" name as input from user. If user enters "Karachi",
// //  welcome the user like this : "Welcome to city of lights"
//     // let CityName = prompt("Enter your City Name")
//     // alert(`Welcome to City of Lights`)

// // 2. Write a program to take "gender" as input from user.If the user is male, give the message
//     // let gender = prompt("Enter you Gender")
//     // let removespacesGender = gender.toLowerCase().split(" ").join("")
//     // console.log(`gender : ${removespacesGender}` )
//     // if (removespacesGender === "male"){
//     //     alert(`Good Morning sir`)
//     // }else if (removespacesGender === "female"){
//     //     alert("Good Morning Ma'am")
//     // }else{
//     //     alert("Spelling Mistake")
//     // }
// // : Good Morning Sir. If the user is female, give the message  : Good Morning Ma'am.

// // 3. Write a program to take input color of road traffic signal from the user & show the message
// // according to this table :

//     // let trafficColor = prompt("Enter Traffic Color").toLowerCase().split(" ").join("")
//     // console.log(trafficColor)
//     // if (trafficColor === "green"){
//     //     alert("Move Now")
//     // }else if (trafficColor === "yellow"){
//     //     alert("Ready to Move")
//     // }else if (trafficColor === "red"){
//     //     alert("Must Stop")
//     // }else{
//     //     alert("Something went wrong")
//     // }

// // 4. Write a program to take input remaining fuel in car (in litres) from user.
// //  If the current fuel is less than 0.25litres, show the message "Please refill the fuel in your car"
//     // let  remainingFuel = +prompt("Enter Remaining Fuel in Liters")
//     // if(remainingFuel < 0.25){
//     //     alert("Please refill the fuel in your Car")
//     // }else{
//     //     alert("Enjoy Your journey")
//     // }
// // 5. Run this script, & check whether alert message would be } displayed or not. Record the outputs.
// //  a.
//     var a = 4;
//     if (++a=== 5){
//         alert("given condition for variable a is true")
//     };   //showed means True

// // b.
//     var b= 82;
//     if (b++ === 83){
//         alert("given condition for variable b is true")
//     };
// // c.
//     // var c= 12;
//     if (c++ === 13){ alert("condition 1 is true"); }
//     if (c === 13){ alert("condition 2 is true")};    //showed Means true
//     if (++c<14){ alert("condition 3 is true")};
//     if(c === 14){ alert("condition 4 is true"); }  //showed Means true
// // d.
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost)
//     { alert("The cost equals"); }    //showed Means true
// //  e.
//     if (true){ alert("True"); }     //showed Means true
//     if (false){ alert("False"); }
// // f.
//     if("car" =="cat"){ alert("car is smaller than cat"); }

//  6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table :
// Show the total marks, remarks like : ☐ Stained, percentage, grade &

// let subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// let subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// let subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// let totalMarks = 300

// let totalObtainedMarks = subject1 + subject2 + subject3;
// let percentage = (totalObtainedMarks / totalMarks) * 100;

// let grade;
// if (percentage >= 90) {
//     grade = 'A+';
// } else if (percentage >= 80) {
//     grade = 'A';
// } else if (percentage >= 70) {
//     grade = 'B';
// } else if (percentage >= 60) {
//     grade = 'C';
// } else if (percentage >= 50) {
//     grade = 'D';
// } else {
//     grade = 'Fail';
// }
// document.write("<h2>Result</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

// 7. Guess game : Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show "Bingo! Correct answer".
//  b. If the guessed number +1 is the secret number, show "Close enough to the correct answer".
let secretNumber = 9;
let userNumber = +prompt("Enter Number");
if (userNumber === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userNumber === secretNumber + 1) {
  alert("Close enough to the correct answer");
} else {
  alert("try Again");
}

// 8. Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3.

// Prompt the user to enter a number
let number = 30;

// Check if the number is divisible by 3
if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
}
// 9. Write a program that checks whether the given input is an even number or an odd number.
// Prompt the user to enter a number
let number2 = 8;

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}


// 10 Write a program that takes temperature as input and shows a message based on following criteria
// a. T> 40 then "It is too hot outside."
// b. T> 30 then "The Weather today is Normal."
// c. T> 20 then "Today's Weather is cool."
// d. T> 10 then "OMG! Today's weather is so Cool."
let temperature = 30;

if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today's Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today's weather is so Cool.");
} else {
    console.log("It is freezing outside!");
}

// 11 Write a program to create a calculator for +,-,*, / & % using if statements.
//  Take the following input :
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
alert(`addition of num1 and num2 is : ${firstNumber + secondNumber}`)
alert(`Subtraction of num1 and num2 is : ${firstNumber - secondNumber}`)
alert(`Multiplication of num1 and num2 is : ${firstNumber * secondNumber}`)
alert(`Division of num1 and num2 is : ${firstNumber / secondNumber}`)
