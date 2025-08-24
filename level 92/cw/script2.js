const colors = ["red", "blue", "green", "orange", "purple", "black", "yellow"];
let index = 0;

document.getElementById("addBtn").addEventListener("click", function () {
  const p = document.createElement("p");
  p.textContent = "ახალი პარაგრაფი";
  p.style.color = colors[index % colors.length];
  document.getElementById("container").appendChild(p);
  index++;
});