function printNumbers(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}






function greetUser(name, age) {
  if (age < 18) {
    return "you are not adult yet";
  } else {
    return "Hello, " + name + "!";
  }
}





function printLetters(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}