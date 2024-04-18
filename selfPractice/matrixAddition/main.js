let matric1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matric2 = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

for (let i = 0 ; i <matric1.length ; i ++){
    for(let j = 0 ; j <matric2.length;  j++){
       console.log(matric1[i][j] + matric2[i][j])
    } 
}