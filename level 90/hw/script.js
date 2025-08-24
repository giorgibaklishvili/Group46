// addEventListener - აკავშირებს მოვლენას და ფუნქციას





let myNumber = 7;

let userInput = document.getElementById("userInput");
let checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function() {
  let userNumber = parseInt(userInput.value);

  if (userNumber === myNumber) {
    alert("შენ გამოიცანი ჩემი რიცხვი");
  } else {
    alert("შენ ვერ გამოიცანი ჩემი რიცხვი");
  }
});