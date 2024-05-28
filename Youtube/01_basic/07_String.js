let name = "Sufyan";
let age = 20 ;
// console.log(`My name is ${name} and I am ${age} years Old.`)

let username = new String("Sufyan")
// console.log(username)


let gameName = new String("FreeFire")
console.log(gameName.at(-2))  // it take index number(positive and Negative) and return index value

console.log(gameName.charAt(2)); // it takes just positive index number and return value 

console.log(gameName.charCodeAt(5)); // it will return ASCII Code of letter

console.log(gameName.codePointAt(5)) // it is same as charcode but have some deffrence

console.log("     sufyan      ".trim())

console.log(gameName.includes("e")) // it will check this value is in my varibale or not if yes return true if not return false


// console.log(gameName.charAt.matchAll())

console.log(gameName.repeat(2))  // repeat that variable means print multiple time


// replace
console.log(gameName.replace("F" , "B")) // it will take two arguments first which word change second which one is replacement it will just replace first thing change just one 

// replaceALL = > it is same as replace but it will replace on all string

// search
console.log(gameName.search("i")) //it will return starting index number of seraching value 

//slice
console.log(gameName.slice(0,5)) // it will slice string with index number taking starting and ending index 

//small => depreciated

// split 
console.log(gameName.split("")) // it will split string to an array (and more just give value where to you want to split for an array)

//startswith 
console.log(gameName.startsWith("F")); // it will return true || false  if your string start with same what you gave

//sub => depriciated
//substr => depriciated
//substring
console.log(gameName.substring(1,4)); // it will return 1 index to 3 index from string

//value of
console.log(gameName.valueOf()) 

// The valueOf() method returns the primitive value of a string.

// The valueOf() method does not change the original string.

// The valueOf() method can be used to convert a string object into a string.