
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