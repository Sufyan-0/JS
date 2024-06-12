// they are array  specific loops 

// 1. for of  for getting value 

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    console.log(num);
}


const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(greet);
}


// for of using object 

// 1.Map => map is like object but map known as a unique value it will not take 2 same key value 
// and map iteratable bhi hai means loop chal jay gha 

let map = new Map()
map.set("PK" , "Pakistan")
map.set("IN" , "India")

// console.log(map);


for (const key of map) {
    console.log(key);  //   [ 'PK', 'Pakistan' ]
    //                      [ 'IN', 'India' ] 
}

                   

// this is the right way 
for (const [key , value] of map) {
    console.log(key + " => " + value);  // PK => Pakistan
   //                                      IN => India
}
