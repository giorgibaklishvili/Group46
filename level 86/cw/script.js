let fruits = ["apple", "banana", "orange", "kiwi"];

for (let fruit of fruits) {
  console.log(fruit);
}






let word = "hello";

for (let letter of word) {
  console.log(letter);
}





let person = {
  name: "Giorgi",
  age: 25,
  city: "Tbilisi"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}




// local scope - ცვლადი რომელიც აღწერილია ფუნქციის შიგნით და მოქმედებს მხოლოდ ამ ფუნქციაში
// block scope - ცვლადი როელიც აღწერილია ბლოკის {} შიგნით და მოქმედებს  მხოლოდ ამ ბლოკში
// global scope - ცვლადი რომელიც აღწერილია ყველა ბლოკის და ფუნციის გარეთ