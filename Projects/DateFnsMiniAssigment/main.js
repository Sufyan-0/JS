// 04/20/2024 13:45:30
let date1 = dateFns.format(new Date(2024 , 3 , 20 , 13 , 45 , 30 ), "P HH:mm:ss" )

// Sat 20/4/2024 13:45
let date2 = dateFns.format(new Date(2024 , 3 , 20 , 13 , 45),"ccc dd/M/y HH:mm")

// 3. 2024-04-20 3:45 Thursday
let date3 = dateFns.format(new Date(2024,3,29,3,45), "y-MM-dd h:mm cccc")

// 4. April 20th, 2024 01.45.30 PM
let date4 = dateFns.format(new Date(2024 , 3 , 20 , 13 , 45 , 30), "MMMM do, Y pp")

// 5. 20 April 2024 at 01:45 PM
let date5 = dateFns.format(new Date(2024 , 3 , 20 , 13 , 45 , 30), "d MMMM Y 'at' p")

console.log(date1) // 04/20/2024 13:45:30
console.log(date2) // Sat 20/4/2024 13:45
console.log(date3) // 2024-04-29 3:45 Monday
console.log(date4) // April 20th, 2024 1:45:30 PM
console.log(date5) // 20 April 2024 at 1:45 PM