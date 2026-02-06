const input = document.getElementById("password");

const result = document.getElementById("result");

// ვუსმენთ input-ს როცა რაღაც ტექსტი შეიცვლება
input.addEventListener("input", function () {

  // ვქმნით ცვლადს სადაც შენახულია პაროლის ტექსტი
  let pass = input.value;

  // ვქმნით ცვლადს upperCount, რომელიც ითვლის რამდენი დიდი ასო გვაქვს პაროლში
  let upperCount = 0;

  // გადავუვლით პაროლის ყველა ასოს
  for (let i = 0; i < pass.length; i++) {

    // თუ ასო არის დიდი
    if (pass[i] >= "A" && pass[i] <= "Z") {
      upperCount++;
    }
  }


  result.className = "";

  // ახლა ვამოწმებთ პაროლის სიძლიერეს

  // Weak თუ პაროლი მოკლეა 6 სიმბოლოზე
  if (pass.length < 6) {
    result.textContent = "Weak";      // ტექსტი Weak
    result.classList.add("weak");     // CSS წითელი ფერი
  }

  // Strong თუ პაროლი 8 ან მეტი სიმბოლოსაა და აქვს მინიმუმ ერთი დიდი ასო
  else if (pass.length >= 8 && upperCount > 0) {
    result.textContent = "Strong";    // ტექსტი Strong
    result.classList.add("strong");   // CSS მწვანე ფერი
  }

  // Medium თუ პაროლი 6 ან მეტი სიმბოლოსაა და აქვს დიდი ასო
  else if (pass.length >= 6 && upperCount > 0) {
    result.textContent = "Medium";    // ტექსტი Medium
  }
});