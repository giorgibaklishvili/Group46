for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}






let text = "Hello";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}



let array = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]);
  }
}






let i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}







let x = 1;
let sum = 0;

while (x <= 80) {
  if (x % 2 === 0) {
    sum += x;
  }
  x++;
}

console.log("Sum of even numbers from 1 to 80 is:", sum);