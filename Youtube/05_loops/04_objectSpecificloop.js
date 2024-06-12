// for in 

// this is object specific loop 

const obj ={
    name : "Sufyan",
    age : 20
}

for (const key in obj) {
    console.log(`object key is ${key} and value is ${obj[key]}`);
   
}

// map is not iterable so  for in loop will not work on map 