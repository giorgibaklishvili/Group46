let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // გვერდის გადატვირთვის თავიდან ასაცილებლად

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log("შენ წარმატებით გაიარე რეგისტრაცია");
  console.log("სახელი:", name);
  console.log("ემაილი:", email);
  console.log("პაროლი:", password);
});