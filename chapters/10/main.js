// 1. Declare and initialize an empty multidimensional array. (Array of arrays) 
let emptyArray = [];

// 2. Declare and initialize a multidimensional array representing the following matrix :
let matrix = [
    [1, 2, 3],  // 1 row
    [4, 5, 6],  // 2 row
    [7, 8, 9]   // 3 row
  ];

// 3. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// 4. Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user.

// 5. Write a program to print items of the following array using for loop :
//  fruits = ["apple”, “banana", "mango", "orange", "strawberry"]\

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Generate the following series in your browser. See example output. 

// a. Counting : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
// b. Reverse counting : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for (let i = 20; i >= 1; i--) {
    console.log(i);
  }
//  c. Even : 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
  
// d. Odd : 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
// e. Series : 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let k = 1;
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k = " + i * k);
}

// 7. You have an array 
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
//  Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Example :

// 8. Write a program to identify the largest number in the given array.
//  A = [24, 53, 78, 91, 12].

// 9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12] 

// 10. Write a program to print multiples of 5 ranging 1 to 100.
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }