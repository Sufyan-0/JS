const num1 = 19;


const num = new Number(4)
console.log(num.constructor()) // not sure 
console.log(num.toExponential(34)); // The toExponential() method of Number values returns a string representing this number in exponential notation.

console.log(num.toFixed(0));   // if we give 0 as a arguments it will do same as round
console.log(num.toFixed(4)); // it will create floating point number with 4 number after the point

console.log(Number(123333333).toLocaleString("ar-EG")) // it will convert as local amount typing what you give inside in toLocalstring

console.log(Number(12.16534532).toPrecision(3)); //  it will show 3 integer after round off and return it but if i say i need 3 value but i have for values before the point it will give me 3 value but after that it will give below is the example....
console.log(Number(12232.43).toPrecision(3)) // 1.22e+4

console.log(Number(12323.3232).valueOf()) // In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// There is no reason to use it in your code