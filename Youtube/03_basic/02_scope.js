
{
    let a = 3
    const b = 6 ;
    var c = 9
}
// console.log(a); // a is not define
// console.log(b); // b is not define
// console.log(c); // 9
let innerValue = 900
let name = "sufyan"
if(true){
     innerValue = 59 // update global scope
     let name = "ahmed" // it will not updated
}
console.log(name); // it will return sufyan
console.log(innerValue) // it will return 59 

// +++++++++++

// function in function scope || nested scope 
function one (){
    let userName  = "sufyan"
    function two (){
        const website = " Instagaram"
        console.log(userName + website) // sufyan Instagaram
    }
    // console.log(website)  // not define
    two()
}
one()


// hoisting and two types of declaration of function 

console.log(func1(6)) // 7 because func1 is global

function func1 (num){
    return  num + 1 
}

console.log(func1(3)) // 4

console.log(addTwo(6))  // Cannot access 'addTwo' before initialization 

const addTwo = function (num){
    return num+2
}

console.log(addTwo(3)) // 5
