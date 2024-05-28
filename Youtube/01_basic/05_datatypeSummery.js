// 1. premitive
// Nummber , String , boolean , null , undefined , symbal , bigint

let number = 89;
let userName = "Sufyan Ahmed"
let isLoggedIn = false ;
let data = null ;
let application = undefined
let id = Symbol("123")
let AnotherID = Symbol("123")
console.log(id)
console.log(AnotherID);
console.log(id === AnotherID) //false

let bigNumber = 89898989432748738479837n
console.log(typeof bigNumber); // bigint
// 2. non premitive (reference )
// Array , object , function

let array = ["Sufyan" , "Abdullah" , "Moaqib"]
console.log(typeof array); // object

let obj = {
    name : "Sufyan",
    age : 39,
}
console.log(typeof obj); // object
function FuncName(){
    return "Hello World"
}