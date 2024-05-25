// let userArr ={
//     name : "Sufyan",
//     age : 20,
//     email : "Sufyan@google.com"
// }
// console.log(userArr.email); // google
// userArr.email = "Sufyan@chatGPT.com"
// console.log(userArr.email); //chatgpt
// Object.freeze(userArr)
// userArr.email = "Sufyan@Microsoft.com"

// console.log(userArr.email) //Microsoft
let rollNumber = Symbol("WMA-252513");
let user = {
  name: "Sufyan",
  age: 20,
  rollNumber: "WMA-121212",
  "Full Name": "Sufyan Ahmed",
};
// console.log(typeof user.rollNumber) // string
// console.log(typeof user[rollNumber]) // undefined
// // console.log(user.Full Name); // this will not work
// console.log(user["Full Name"]); // Sufyan Ahmed
// console.log(typeof user["Full Name"]); //String

// inside object create function in value  below

let userData = {
  name: "Sufyan",
  age: 20,
  contactNumber: 33130,
};

userData.greeting = () => {
  return 2 + 2;
};

userData.greeting2 = function () {
  return this; //`Welcome 2 ${this}`
};

userData.greeting3 = () => {
  return this; //`Welcome 3 ${this}`
};
// console.log(userData.greeting()) // 4
// console.log(JSON.stringify(userData.greeting2())); // Welcome Sufyan
// console.log(JSON.stringify(userData.greeting3())); // Welcome undefined  // bcz of arror function

// console.log(this);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// concatination two objects/

let arr1 = {
  name1: "Sufyan",
  age1: 20,
};
let arr2 = {
  name2: "khan",
  age2: 30,
};

const concat = Object.assign({}, arr1, arr2);
// console.log(concat);

const result = {...arr1 , ...arr2}
console.log(result)

// {{{{}{{{{{{{}}}}}}}}}}}

const test = {
  a: "jack",
  b: {
    c: "sparrow",
    d: {
      e: "hahaha",
      f: 56,
      g: {
        h: "shehzad",
      },
    },
  },
  y: { aa: 876543 },
  z: 55,
};

const flatObj = (obj, result = {}) => {
  for (const t in obj) {
    const value = obj[t];
    if (typeof value === "object") {
      const TTTT = flatObj(value, result);
      if (!TTTT) result[t] = TTTT;
    } else {
      result[t] = value;
    }
  }

  return result;
};

console.log(flatObj(test));
