// console.log("Increasing Triangle");
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// console.log("Decreasing Triangle");
// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 0; j <= 4 - i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// console.log("Right-Aligned Triangle");
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= 5 - i; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// console.log("Right-Aligned Triangle Upside-down");
// for (let i = 4; i >= 0; i--) {
//   let row = "";

//   for (let j = i; j >= 1; j--) {
//     row += " ";
//   }

//   for (let k = 5; k >= 1 + i; k--) {
//     row += "*";
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("Increasing Numbers Triangle");
// for (let i = 0; i < 2 * n; i++) {
//   let row = "";
//   for (let j = 0; j < (i > n ? 2 * n - i : i); j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("triangle pattern");
// for (let i = 0; i <= n; i++) {
//   let totalCols = i;
//   let row = "";
//   let noOfSpaces = n - totalCols;
//   for (let s = 0; s < noOfSpaces; s++) {
//     row += " ";
//   }
//   for (let j = 0; j < totalCols; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("reverse triangle pattern");
// for (let i = n; i >= 0; i--) {
//   let totalCols = i;
//   let row = "";
//   let noOfSpaces = n - totalCols;
//   for (let s = 0; s < noOfSpaces; s++) {
//     row += " ";
//   }
//   for (let j = totalCols; j > 0; j--) {
//     row += "* ";
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("Diamond pattern");
// for (let i = 0; i < 2 * n; i++) {
//   let totalCols = i > n ? 2 * n - i : i;
//   let row = "";
//   let noOfSpaces = n - totalCols;
//   for (let s = 0; s < noOfSpaces; s++) {
//     row += " ";
//   }
//   for (let j = 0; j < totalCols; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("hollow right-angled-triangle pattern");
// for (let i = 0; i < n; i++) {
//   let row = "";

//   for (let s = 0; s < n - i - 1; s++) {
//     row += " ";
//   }
//   for (let j = 0; j <= i; j++) {
//     if (j === 0 || j === i || i === n - 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("Hollow triangle pattern");

// for (let i = 0; i < n; i++) {
//   let row = "";

//   // Leading spaces
//   for (let s = 1; s < n - i; s++) {
//     row += " ";
//   }

//   // Stars and hollow spaces (double the columns )
//   for (let j = 0; j < 2 * i + 1; j++) {
//     if (j === 0 || j === 2 * i || i === n - 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }

//   console.log(row);
// }

// const n = 5;
// console.log("Hollow Diamond pattern");
// for (let i = 0; i < 2 * n - 1; i++) {
//   let totalCols = i < n ? i : 2 * n - 2 - i;
//   let row = "";
//   let noOfSpaces = n - totalCols;
//   for (let s = 0; s < noOfSpaces; s++) {
//     row += " ";
//   }
//   for (let j = 0; j < 2 * totalCols + 1; j++) {
//     if (j === 0 || j === 2 * totalCols) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }

//   console.log(row);
// }

// 1
// 12
// 123
// 1234
// 12345

// const n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// 1
// 101
// 1010
// 10101
// 101010

// const n = 4;
// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 == 0) {
//       row += "0 ";
//     } else {
//       row += "1 ";
//     }
//   }
//   console.log(row);
// }

//     1
//    212
//   32123
//  4321234
// 543212345

// for (let i = 0; i <= n; i++) {
//   let row = "";
//   let spaces = n - i;
//   for (let s = 0; s < spaces; s++) {
//     row += " ";
//   }
//   // for decreasing part
//   for (let j1 = i; j1 >= 1; j1--) {
//     row += j1;
//   }
//   // for increasing part
//   for (let j2 = 2; j2 <= i; j2++) {
//     row += j2;
//   }
//   console.log(row);
// }

// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444

// var n = 4;

// for (let i = 0; i <= 2 * n; i++) {
//   let row = "";

//   for (let j = 0; j <= 2 * n; j++) {
//     let val = n - Math.min(Math.min(i, j), Math.min(2 * n - i, 2 * n - j));
//     row += val;
//   }

//   console.log(row);
// }

//    1
//   212
//  32123
// 4321234
//  32123
//   212
//    1

// for (let i = 0; i <= 2 * n + 1; i++) {
//   let row = "";
//   let cols = i > n ? 2 * n - i : i;
//   let spaces = n - cols;

//   for (let s = 0; s < spaces; s++) {
//     row += " ";
//   }
//   // for decreasing part
//   for (let j1 = cols; j1 >= 1; j1--) {
//     row += j1;
//   }
//   // for increasing part
//   for (let j2 = 2; j2 <= cols; j2++) {
//     row += j2;
//   }
//   console.log(row);
// }

// const n = 5;
// console.log("Hollow Square pattern");
// for (let i = 0; i < n; i++) {
//   let row = "";

//   for (let j = 0; j < n; j++) {
//     if (j === 0 || i === 0 || i === n - 1 || j === n - 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

const n = 5;
console.log("Butterfly Pattern");

for (let i = 1; i <= n; i++) {
  let row = "";

  // Left stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  // Spaces in the middle
  for (let j = 1; j <= 2 * (n - i); j++) {
    row += " ";
  }

  // Right stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

// lower part
for (let i = n; i >= 1; i--) {
  let row = "";

  // Left stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  // Spaces in the middle
  for (let j = 1; j <= 2 * (n - i); j++) {
    row += " ";
  }

  // Right stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}
