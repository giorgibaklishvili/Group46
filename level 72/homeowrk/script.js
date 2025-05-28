const numbers = [15, 42, 7, 93, 28, 64, 3];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log("მინიმალური მნიშვნელობა:", min);
console.log("მაქსიმალური მნიშვნელობა:", max);





let randomNumber = Math.random() * 10;
let roundedNumber = Math.round(randomNumber);

console.log("შემთხვევითი რიცხვი:", randomNumber);
console.log("დამრგვალებული რიცხვი:", roundedNumber);






let negativeNumber = -25;
let positiveNumber = Math.abs(negativeNumber);

console.log("დადებითი რიცხვი:", positiveNumber);






let decimalNumber = 7.34;
let roundedUp = Math.ceil(decimalNumber);
let roundedDown = Math.floor(decimalNumber);

console.log("ორიგინალი რიცხვი:", decimalNumber);
console.log("დამრგვალებული მაღლა:", roundedUp);
console.log("დამრგვალებული დაბლა:", roundedDown);








let number = 3;
let power4 = Math.pow(number, 4);

console.log(number + " მე-4 ხარისხში არის: " + power4);
