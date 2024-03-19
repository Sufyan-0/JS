// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let num1 =+prompt("Enter First Number")
let num2 =+prompt("Enter Second Number")
document.querySelector("#add").innerHTML=`Sum of ${num1} and ${num2} is ${num1 + num2}`
// // 2. Repeat taskı for subtraction, multiplication, division & modulus. 
document.querySelector("#math1").innerHTML=`<p>sub of ${num1} and ${num2} is ${num1 - num2}</p>`
document.querySelector("#math2").innerHTML=`<p>Multiplication of ${num1} and ${num2} is ${num1 * num2}</p>`
document.querySelector("#math3").innerHTML=`<p>Divide of ${num1} and ${num2} is ${num1 / num2}</p>`
document.querySelector("#math4").innerHTML=`<p>modules of ${num1} and ${num2} is ${num1 % num2}</p>`

// 3. Do the following using JS Mathematic Expressions 
// 
// a. Declare a variable.
let declareVariable = 6;
    //  b. Show the value of variable in your browser like "Value after variable declaration is : ??". 
    document.querySelector('#variable').innerHTML = `Value after variable declaration is : ${declareVariable}`
    //    c. Initialize the variable with some number. 
           let anyNumber = 10 ;
    //    d. Show the value of variable in your browser like "Initial value : 5". 
    document.querySelector("#showNumber1").innerHTML = `Initial value is : ${anyNumber}`
    //    e. Increment the variable. 
    anyNumber++
    // f. Show the value of variable in your browser like "Value after increment is : 6". 
    document.querySelector("#showNumber2").innerHTML = `Value after increment is :${anyNumber}`
    // g. Add 7 to the variable. 
    anyNumber += 7
    // h. Show the value of variable in your browser like "Value after addition is : 13". 
    document.querySelector("#showNumber3").innerHTML = `Value after addition 7 is : ${anyNumber}`

    //   i. Decrement the variable.
    anyNumber--
    //  j. Show the value of variable in your browser like "Value after decrement is : 12". 
    document.querySelector("#showNumber4").innerHTML = `Value after decrement is : ${anyNumber}`
    
    //    k. Show the remainder after dividing the variable's value by 3. 1. Output : "The remainder is : 0". tin%
    document.querySelector("#showNumber5").innerHTML = `The remainder is : ${anyNumber % 3}`
    

    // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output :
    let movieTicket = 600
    let buyTicket = 5
    document.querySelector("#movei").innerHTML = `Total Cost to buy ${buyTicket} to a movie ${movieTicket * buyTicket}PKR`
    // 5. Write a script to display multiplication table of any number in your browser. E.g
    let i;
    for (i=0 ; i <= 11 ; i++){
       let table = 4;
       console.log(`${table} X ${i} = ${table * i}` )
    }
    // 6. The Temperature Converter : It's hot out! Let's make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output "NNoC is NNoF". c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output "NNoF is NN.C". Conversion 
    // Formulae : °C (°F-32)x5/9 °F = (°C x 9/5)+32 Computing

    // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    // a. Price of item 1 
    // b. Price of item 2 
    // c. Ordered quantity of item 1
    //  d. Ordered Quantity of item 2
    //  e. Shipping charges 
    // Compute the total cost & show the receipt in your browser.