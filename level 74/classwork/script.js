let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let strings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

let combined = numbers.concat(strings);

combined[5] = undefined;

combined.pop();

combined.shift();

combined[1] = "ვანო";

combined.push("მოთიაშვილი");

let finalString = combined.join(", ");

console.log(finalString);