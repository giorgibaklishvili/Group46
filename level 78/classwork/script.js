let age = prompt("შეიყვანე შენი ასაკი:");

age = parseInt(age);

if (age <= 14) {
    alert("you are kid");
} else if (age <= 18) {
    alert("you are not adult yet");
} else {
    alert("you are adult");
}






let namee = ""; 

if (namee) {
    console.log("Hello, " + namee + "!");
} else {
    namee = "guest";
    console.log("Hello, " + namee + "!");
}






let name = prompt("შეიყვანე შენი სახელი:");
let agee = parseInt(prompt("შეიყვანე შენი ასაკი:"));

if (agee <= 18) {
    alert("you are not adult yet " + name + "!");
} else {
    alert("Hello " + name + "!");
}