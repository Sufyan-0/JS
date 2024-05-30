// IIFE  = >  Immediately Invoked Function Expression

// => global scope ky polution sy problem hoti hai kaibar tu us global scope ky varible ko hatany ky liya IIFE use karty hain or ya fucntion banty hi excute hota hai 



// TypeError: (intermediate value)(...) is not a function in below code 

// (function chai (){
//     console.log(`DB Connected`)
// })()

// (()=>{
//     console.log(`DB cojnnected`)
// })()


// because IIFE  want to end and we neeed simicolon ; for end the IIFE below is the right example

(function chai (){
    // named IIFE
    console.log(`DB Connected`)
})(); 

(()=>{
    // UnNamed IIFE 
    console.log(`DB cojnnected`)
})(); 


// if IIFE want to take varibale how can i take below is code Example

((name)=>{
      console.log(`My name is ${name}`)  // My name is Sufyan
})("Sufyan")

