// let userArr ={
//     name : "Sufyan",
//     age : 20,
//     email : "Sufyan@google.com"
// }
// console.log(userArr.email); // google
// userArr.email = "Sufyan@chatGPT.com"
// console.log(userArr.email); //chatgpt
// Object.freeze(userArr)
// userArr.email = "Sufyan@Microsoft.com"

// console.log(userArr.email) //Microsoft
let rollNumber = Symbol("WMA-252513")
let user = {
    name : "Sufyan",
    age : 20,
    rollNumber : "WMA-121212",
    "Full Name" : "Sufyan Ahmed" 
}
console.log(typeof user.rollNumber) // string
console.log(typeof user[rollNumber]) // undefined
// console.log(user.Full Name); // this will not work
console.log(user["Full Name"]); // Sufyan Ahmed
console.log(typeof user["Full Name"]); //String


// inside object create function in value  below
