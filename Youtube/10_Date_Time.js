// console.log(typeof new Date()) // object

// let createdDate = new Date()
// console.log(createdDate) // 2024-05-18T09:58:49.775Z
// console.log(createdDate.toDateString()); // Sat May 18 2024

// console.log(createdDate.toISOString()); // 2024-05-18T09:59:52.251Z

// console.log(createdDate.toLocaleString()); // 5/18/2024, 3:00:18 PM

// console.log(createdDate.toTimeString()); // 15:00:43 GMT+0500 (Pakistan Standard Time)

// console.log(createdDate.getTime()); // 1716026465084

// console.log(createdDate.getMonth()); // 4 (Start month from 0)

// let obj  = createdDate.toLocaleString("defult" ,{
//     year : "numeric",
//     month : "numeric",
//     day : "numeric",
//     dayPeriod : "long",
//     hourCycle : "h12",
//     hour : "numeric"

// })
// console.log(obj);



// mini assgiment for pracitce using tolocalString


// 1. 04/20/2024 13:45:30

console.log(new Date(2024 , 3 , 20 , 13 ,45 , 30).toLocaleString("defult" , {
    day : "2-digit" ,
    month : "2-digit",
    year : "numeric", 
    hour : "numeric",
    minute : "2-digit",
    second : "2-digit",
    hourCycle : "h24"
} )) // 04/20/2024 13:45:30

// 2. Thu 20/4/2024 13.45
console.log(new Date(2024 , 3 , 20 , 13 ,45 , 30).toLocaleString("defult" , {
    weekday : "short", 
    day : "2-digit" ,
    month : "2-digit",
    year : "numeric", 
    hour : "numeric",
    minute : "2-digit",
    hourCycle : "h24"


}))