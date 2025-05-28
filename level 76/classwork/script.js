let age = 15;

if (age < 13) {
  console.log("You are kid");
} else if (age < 18) {
  console.log("You are not adult yet");
} else {
  console.log("You are adult");
}

let int = 7; 

if (int % 2 === 0) {
  console.log(int);
} else {
  console.log("ეს რიცხვი კენტია");
}

// ! - ნიშნავს უარყოფას

let number = 27; 

if (number % 3 === 0 && number % 9 === 0) {
  console.log(number);
} else {
  console.log("task was not completed.");
}