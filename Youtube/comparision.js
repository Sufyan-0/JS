console.log("2" == 2) //true 
console.log(undefined == 0);  //false
console.log(undefined >= 0);  //false
console.log(undefined <= 0);  //false

console.log(null == 0);  //false
console.log(null >= 0);  //true
console.log(null <= 0);  //true

console.log(typeof null)  //object

/*
aviod (==) bcz it have alot of issue and it will not check datatype while camprision 
instead of use this (===) it is recommended and it will check datatype while comparion
*/

console.log(null === 0);  //false
console.log(null >= 0);  //true
console.log(null <= 0);  //true

console.log("2" == 2) //true
console.log("2" === 2) //false