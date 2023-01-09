// 1
for (let i = 5; i < 11; i++) {
  console.log(i);
}

// 2
for (let i = 20; i >= 10; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

// 3
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4
for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

// 5

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
  arrayOfNumbers.push(i);
}

console.log(arrayOfNumbers);
return arrayOfNumbers;

