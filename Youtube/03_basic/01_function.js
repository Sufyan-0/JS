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