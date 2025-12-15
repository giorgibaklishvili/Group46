const div = document.getElementById("myDiv");
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("removeBtn");

button.addEventListener("click", () => {
    div.removeChild(paragraph);
});