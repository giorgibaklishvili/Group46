const randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("checkBtn").addEventListener("click", function () {
  const userInput = Number(document.getElementById("userNumber").value);
  const result = document.getElementById("result");

  if (!userInput || userInput < 1 || userInput > 10) {
    result.textContent = "გთხოვ, შეიყვანე რიცხვი 1-10-ის ფარგლებში";
    result.style.color = "red";
    return;
  }

  if (userInput === randomNumber) {
    result.textContent = "შენ კარგად გაართვი თავი დავალებას";
    result.style.color = "green";
  } else {
    result.textContent = "სცადე ხელახლა";
    result.style.color = "orange";
  }
});