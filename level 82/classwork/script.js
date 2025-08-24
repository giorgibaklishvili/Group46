let number = parseInt(prompt("შეიყვანე ნებისმიერი მთელი დადებითი რიცხვი:"));

let i = 0;

while (i <= number) {
  console.log(i);
  i++;
}






let namee = prompt("შეიყვანე სახელი:");

while (namee.length < 10) {
  namee = prompt("სახელი ძალიან მოკლეა. გთხოვ, შეიყვანე უფრო გრძელი სახელი (10 ან მეტი სიმბოლო):");
}

console.log("გმადლობ, შენი სახელია: " + namee);






let pin = prompt("შეიყვანე პინკოდი:");

while (pin !== "6446") {
  pin = prompt("არასწორია. გთხოვ, სცადე თავიდან:");
}

console.log("წარმატებით შეხვედი სისტემაში!");





let password = prompt("შეიყვანე პაროლი:");

while (password !== "ვანოჩკა") {
  password = prompt("არასწორი პაროლია. სცადე თავიდან:");
}

console.log("პაროლი სწორია! მისასალმებელი ხარ!");