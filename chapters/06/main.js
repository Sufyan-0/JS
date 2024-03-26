// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser :
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
// M 2. What will be the output in variables a, b & result after execution of the following script
  var a1 = 2, b = 1; 
var result = --a1 - --b + ++b+ b--; //1-2 - 1-1 + 1+1 + 1 -1 
console.log(-1+2 - 1+1 +1+1 + 1-1);
// Explain the output at each stage :
--a1;   // -1 +2 = 1
--a1 - --b; // a1 = -1 -1 = 0 , b = -1+1= 0  , 0-0 = 0 
--a1 - --b + ++b; // a1 = -1 -0 = -1 , b = -1-0+ 1+0 = 0  , -1 0 
--a1 - --b + ++b+ b--; //a1 = -1-1 = -2, b= - 1-0+1+0-0-1 = -1
console.log(a1)
console.log(b)
console.log(result)


// 3. Write a program that takes input a name from user & greet the user.
//  4. Write a program to take input a number from user & display it's multiplication table on your browser. 
//  If user does not enter a new number, multiplication table of 5 should be displayed by default.
//  6. Take 
// a) Take three subjects name from user and store them in 3 different variables.
//  b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//  e) Now calculate total marks and percentage and show the result in browser like this. (Hint : user table)