let number = prompt("შეიყვანეთ რიცხვი:");

if (number === null) {
  alert("შეყვანა გაუქმდა.");
} else {
  number = Number(number);

  if (isNaN(number)) {
    alert("გთხოვთ, შეიყვანოთ ვალიდური რიცხვი.");
  } else {
    if (number % 2 === 0) {
      alert("რიცხვი ლუწია.");
    } else {
      alert("რიცხვი კენტია.");
    }
  }
}




let age = prompt("გთხოვთ შეიყვანეთ თქვენი ასაკი:");

if (age === null) {
  alert("შეყვანა გაუქმდა.");
} else {
  age = Number(age);

  if (isNaN(age) || age < 0) {
    alert("გთხოვთ, შეიყვანეთ ვალიდური ასაკი.");
  } else {
    if (age < 18) {
      alert("თქვენ ხართ არასრულწლოვანი და მიიღებთ 50%-იან ფასდაკლებას.");
    } else {
      alert("თქვენ ხართ სრულწლოვანი და ფასდაკლება არ გეკუთვნით.");
    }
  }
}





let agee = prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი:");

if (agee === null) {
  alert("შეყვანა გაუქმდა.");
} else {
  agee = Number(agee);

  if (isNaN(agee) || agee < 0) {
    alert("გთხოვთ, შეიყვანოთ ვალიდური ასაკი.");
  } else {
    if (agee < 18) {
      alert("თქვენ ხართ არასრულწლოვანი და მიიღებთ 50%-იან ფასდაკლებას.");
    } else if (agee === 18) {
      alert("თქვენ ხართ 18 წლის და მიიღებთ 25%-იან ფასდაკლებას.");
    } else {
      alert("თქვენ ხართ სრულწლოვანი და ფასდაკლება არ გეკუთვნით.");
    }
  }
}







// ცვლადს ექნება false მნიშვნელობა, თუ მასში ვადებთ ერთ-ერთ falsy მნიშვნელობას.
// დანარჩენ შემთხვევაში, ის ითვლება truthy-დ ანუ იწარმოება როგორც true ლოგიკურ პირობებში.





let namee = prompt("გთხოვთ, შეიყვანეთ თქვენი სახელი:");

if (namee === null || namee.trim() === "") {
  alert("სახელი არ არის შეყვანილი.");
} else {
  if (namee.length > 6) {
    alert("hello my friend '" + namee + "'!");
  } else {
    alert("hello '" + namee + "'!");
  }
}