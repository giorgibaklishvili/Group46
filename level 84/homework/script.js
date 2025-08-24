function greetUser(number) {
  let i = 0;

  while (i < number) {
    console.log("Hello, user!");
    i++;
  }
}

greetUser(5);






let num = 7;
let userInput;

while (userInput !== num) {
  userInput = parseInt(prompt("შეიყვანე რიცხვი 0-დან 10-ის ფარგლებში"));

  switch (userInput) {
    case num:
      console.log("გილოცავ! სწორად გამოიცანი");
      break;
    default:
      console.log("არასწორია, სცადე თავიდან...");
  }
}








function checkDiscount(age) {
  if (age <= 19) {
    console.log("თქვენ მიიღეთ 30% ფასდაკლება");
  } else if (age >= 19 && age < 50) {
    console.log("თქვენ მიიღეთ 10% ფასდაკლება");
  } else if (age >= 50) {
    console.log("თქვენ მიიღეთ 50% ფასდაკლება");
  }
}

let userAge = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
checkDiscount(userAge);