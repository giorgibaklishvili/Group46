let myList = [];

for (let i = 1; i <= 30; i++) {
  myList.push("ელემენტი " + i);
}

for (let element of myList) {
  console.log(element);
}







let list1 = [];
let list2 = [];

for (let i = 1; i <= 10; i++) {
  list1.push("ელემენტი " + i);
}

for (let item of list1) {
  list2.push(item);
}

console.log("მეორე სია (list2):");
for (let item of list2) {
  console.log(item);
}






let text = "Hello world!";
let vowels = ["a", "e", "i", "o", "u"];

for (let char of text.toLowerCase()) {
  if (vowels.includes(char)) {
    console.log(char);
  }
}
