// Stack and Heap 

// Stack (premitive) , Heap(non-Premitive)
// 1.Stack will give you a copy 
// 2.Heap will give you a reference

// Stack Below

let name = "Sufyan"
let userName = name;
userName = "khan"
console.log(name)
console.log(userName)

// heap Below

let obj = {
    name : "Sufyan",
    age: 49
}
let newObj = obj
newObj.age = 89

console.log(newObj.age)
console.log(obj.age);

