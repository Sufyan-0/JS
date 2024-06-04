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