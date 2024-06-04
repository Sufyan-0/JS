const  userEmail = "sufiyan033130@gmail.com";

if(userEmail){
    console.log("We get user Email");
}else{
    console.log("we don't have user Email");
}

// false value  

// false , 0 , -0 , 0n , "" , undefined , big-int , null , NAN



false === 0 // true false 

// nullish  coalescing operator (??) null and undefined 

let val ; 

val = 0  ?? 10 
let val2 = 0 || 10
console.log(val2);
console.log(val);


//  how to check array is empty

let arr = []
if (arr.length === 0){
    console.log("EMPTY")
}else{
    console.log("have some value");
}

// how to check object is empty

let obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}else{
    console.log("object havve value");
}