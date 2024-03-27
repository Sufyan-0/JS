// // 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser :
let a = 10 ;
console.log(`The Value of a is : ${a}`)
console.log(`The Value of ++a is : ${++a}`);
console.log(`Now The Value of a is : ${a}`)
console.log(`The Value of a++ is : ${a++}`);
console.log(`Now The Value of a is : ${a}`)
console.log(`The Value of --a is : ${--a}`);
console.log(`Now The Value of a is : ${a}`)
console.log(`The Value of a-- is : ${a--}`);
console.log(`Now The Value of a is : ${a}`)
// // M 2. What will be the output in variables a, b & result after execution of the following script
  var a1 = 2, b = 1; 
var result = --a1 - --b + ++b+ b--; //1-2 - 1-1 + 1+1 + 1 -1 
// console.log(-1+2 - 1+1 +1+1 + 1-1);
// // Explain the output at each stage :
--a1;   // -1 +2 = 1
--a1 - --b; // a1 = -1 -1 = 0 , b = -1+1= 0  , 0-0 = 0 
--a1 - --b + ++b; // a1 = -1 -0 = -1 , b = -1-0+ 1+0 = 0  , -1 0 
--a1 - --b + ++b+ b--; //a1 = -1-1 = -2, b= - 1-0+1+0-0-1 = -1
console.log(a1)
console.log(b)
console.log(result)


// 3. Write a program that takes input a name from user & greet the user.
let userName = prompt("Enter Your Name")
alert(`welcome ${userName}`)

//  4. Write a program to take input a number from user & display it's multiplication table on your browser.
let TableNumber = prompt("Enter Table Number")
// console.log(TableNumber)
let table = "";
//  If user does not enter a new number, multiplication table of 5 should be displayed by default.
if(TableNumber === ""){
  TableNumber = 5 
  for (let i = 1 ;i <=10 ; i++ ){
    // console.log(`${TableNumber} X  ${i} = ${i*5}` )
    table += `<tr><td>${TableNumber} X  ${i} = ${i*5} </td></tr>`;
  } 
}else{
  for (let i = 1 ;i <=10 ; i++ ){
    // console.log(`${TableNumber} X  ${i} = ${i*TableNumber}` )
    table += `<tr><td>${TableNumber} X  ${i} = ${i*TableNumber} </td></tr>`;
  } 
} 
document.getElementById("multiplicationTable").innerHTML = table;



//  6. Take 
// a) Take three subjects name from user and store them in 3 different variables.
let subject1 = prompt('Enter your First Subject Name')
let subject2 = prompt('Enter your Second Subject Name')
let subject3 = prompt('Enter your Third Subject Name')
//  b) Total marks for each subject is 100, store it in another variable. 
let TotalMarks = 100;
// c) Take obtained marks for first subject from user and stored it in different variable.
let subject1Marks = +prompt("Enter Your first Subject Number")
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
let subject2Marks = +prompt("Enter Your Second Subject Number")
let subject3Marks = +prompt("Enter Your Third Subject Number")
//  e) Now calculate total marks and percentage and show the result in browser like this. (Hint : user table)
let percentageSubject1 = (subject1Marks / TotalMarks) * 100;
let percentageSubject2 = (subject2Marks / TotalMarks) * 100;
let percentageSubject3 = (subject3Marks / TotalMarks) * 100;


document.write("<tr><td>" + subject1 + "</td><td>" + TotalMarks + "</td><td>" + subject1Marks + "</td><td>" + percentageSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + TotalMarks + "</td><td>" + subject2Marks + "</td><td>" + percentageSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + TotalMarks + "</td><td>" + subject3Marks + "</td><td>" + percentageSubject3 + "%</td></tr>");