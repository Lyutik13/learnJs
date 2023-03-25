// (*) 1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// console.log(result);
// return result;

result.push(...arr);
console.log(result);

// (*) 2
const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data[i] = data[i] * 2;
  } else if (typeof data[i] === "string") {
    data[i] = `${data[i]} - done`;
  }
}

console.log(data);

// (*) 3
const data3 = [5, 10, "Shopping", 20, "Homework"];
const result3 = [];

data3.reverse();
for (let i = 0; i <= data3.length; i++) {
  result3[i] = data3[i];
}

console.log(result3);

// (**) 1 hard
let result = "";
const lines = 5;

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
