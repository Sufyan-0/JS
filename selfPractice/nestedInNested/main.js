let nestedArray = [
  [1, 3, 5, [12.444]],
  [1, 2, 3, [7, 9, 8]],
  [4, 6, [99, 99, 99], 7, 3, 2],
];

for (let i = 0; i < nestedArray.length; i++) {
  // console.log(nestedArray[i])
  for (let j = 0; j < nestedArray[i].length; j++) {
    if (typeof nestedArray[i][j] == typeof 1) {
      console.log(nestedArray[i][j]);
    } else if (typeof nestedArray[i][j] == typeof {}) {
      for (let k = 0; k < nestedArray[i][j].length; k++) {
        // console.log(nestedArray[i][j][k])

        console.log(nestedArray[i][j][k]);
      }
    }
  }
}
