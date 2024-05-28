// this function will just do console in function but return undefined value
function funcName (){
    console.log(2+3) // 5
}
let result = funcName()
console.log(result) // undefined


// this is  correct way because this function will return answer
function funcName2 (){
   return 2+3
}
let result1 = funcName2 ()
console.log(result1) // 5

// parameter and arguments
// parameter when we decalare function and set parameter value 
function myFunc (num1 , num2){
    return num1 + num2
}

console.log(myFunc()) //NAN
// argument when we call function 
console.log(myFunc(2, 3)) // 5



// defult parameter in function 


//  what we set default in parameter it will show when i have no argument but if i have argument it will overwrite
function myFunc1 (userName = "user"){
   return `${userName} just Logged in`
}
console.log(myFunc1("Sufyan")) 