// // 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// let num1 =+prompt("Enter First Number")
// let num2 =+prompt("Enter Second Number")
// document.querySelector("#add").innerHTML=`Sum of ${num1} and ${num2} is ${num1 + num2}`
// // // 2. Repeat taskı for subtraction, multiplication, division & modulus. 
// document.querySelector("#math1").innerHTML=`<p>sub of ${num1} and ${num2} is ${num1 - num2}</p>`
// document.querySelector("#math2").innerHTML=`<p>Multiplication of ${num1} and ${num2} is ${num1 * num2}</p>`
// document.querySelector("#math3").innerHTML=`<p>Divide of ${num1} and ${num2} is ${num1 / num2}</p>`
// document.querySelector("#math4").innerHTML=`<p>modules of ${num1} and ${num2} is ${num1 % num2}</p>`

// // 3. Do the following using JS Mathematic Expressions 
// // 
// // a. Declare a variable.
// let declareVariable = 6;
//     //  b. Show the value of variable in your browser like "Value after variable declaration is : ??". 
//     document.querySelector('#variable').innerHTML = `Value after variable declaration is : ${declareVariable}`
//     //    c. Initialize the variable with some number. 
//            let anyNumber = 10 ;
//     //    d. Show the value of variable in your browser like "Initial value : 5". 
//     document.querySelector("#showNumber1").innerHTML = `Initial value is : ${anyNumber}`
//     //    e. Increment the variable. 
//     anyNumber++
//     // f. Show the value of variable in your browser like "Value after increment is : 6". 
//     document.querySelector("#showNumber2").innerHTML = `Value after increment is :${anyNumber}`
//     // g. Add 7 to the variable. 
//     anyNumber += 7
//     // h. Show the value of variable in your browser like "Value after addition is : 13". 
//     document.querySelector("#showNumber3").innerHTML = `Value after addition 7 is : ${anyNumber}`

//     //   i. Decrement the variable.
//     anyNumber--
//     //  j. Show the value of variable in your browser like "Value after decrement is : 12". 
//     document.querySelector("#showNumber4").innerHTML = `Value after decrement is : ${anyNumber}`
    
//     //    k. Show the remainder after dividing the variable's value by 3. 1. Output : "The remainder is : 0". tin%
//     document.querySelector("#showNumber5").innerHTML = `The remainder is : ${anyNumber % 3}`
    

//     // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output :
//     let movieTicket = 600
//     let buyTicket = 5
//     document.querySelector("#movei").innerHTML = `Total Cost to buy ${buyTicket} to a movie ${movieTicket * buyTicket}PKR`
    // 5. Write a script to display multiplication table of any number in your browser. E.g
    let i;
    for (i=0 ; i <= 10 ; i++){
       let table = 4;
       console.log(`${table} X ${i} = ${table * i}` )
    }
    // 6. The Temperature Converter : It's hot out! Let's make a converter based on the steps here.
   //   a. Store a Celsius temperature into a variable. 
   let CelsiusTemp = 30
   // b. Convert it to Fahrenheit & output "NNoC is NNoF". 
   let FahrenheitTemp = (9/5) * CelsiusTemp + 32;
   console.log(`Farhenheit Temperation is ${FahrenheitTemp}`)
   // c. Now store a Fahrenheit temperature into a variable.
   let FahrenheitTempValue = 30
   //  d. Convert it to Celsius & output "NNoF is NN.C". Conversion 
   let CelsiusTempValue = (5/9) * (FahrenheitTempValue - 32);
   console.log(`Celsius Temperation is  ${CelsiusTempValue}`)
    // Formulae : °C (°F-32)x5/9 °F = (°C x 9/5)+32 Computing

    // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    // a. Price of item 1 
    // b. Price of item 2 
    // c. Ordered quantity of item 1
    //  d. Ordered Quantity of item 2
    //  e. Shipping charges 
    // Compute the total cost & show the receipt in your browser.


   //  8. Store total marks & marks obtained by a student in 2 variables.
   //  Compute the percentage & show the result in your browser


   // 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
   // Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
   //  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


   // 10. Write a program to initialize a variable with some number and do arithmetic in following sequence :
   //  a. Add 5 
   // b. Multiply by 10 
   // c. Divide the result by 2 Perform all calculations in a single expression Sundu 


   // 11. The Age Calculator : Forgot how old someone Calculate it! 
   // a. Store the current year in a variable. 
   // b. Store their birth year in a variable. 
   // c. Calculate their 2 possible ages base values.
   //  on the stored Output them to the screen like so : "They are either NN or NN years old".



   // 12. The Geometrizer : Calculate properties of a circle. 
   // a. Store a radius into a variable. 
   // b. Calculate the circumference based on the radius, and output "The circumference is NN". 
   // (Hint : Circumference of a circle - 2πr, π- 3.142)
   //  Calculate the area based on the radius, and output “The area is NN". 
   // (Hint : Area of a circle = πr2, π = 3.142) -


   // 13. The Lifetime Supply Calculator : 
   // Ever wonder how much a "lifetime supply" of your favorite snack is?Wonder no more. 
   // a. Store your favorite snack into a variable 
   // b. Store your current age into a variable. 
   // c. Store a maximum age into a variable. 
   // d. Store an estimated amount per day (as a number). 
   // e. Calculate how many would you eat total for the rest of your life.
   // Mo Output the result to the screen like so
   //  : "You will need NNNN to last you until the ripe old age of NN".