const obj = {
    name : "Sufyan",
    age : 20,
    class : 12,
    field : "pre-Eng"
}

// 1st way 
let data = Object.keys(obj)
console.log(data)


// 2nd way 
let key ;
for (key in obj) {
    console.log(obj[key]);
}

console.log("keys=>" ,[key]);