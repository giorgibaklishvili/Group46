
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];              
let strings = ["ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ", "ი", "კ"];

let combined = numbers.concat(strings);

delete combined[5];

combined.pop();

combined.shift();

combined[1] = "ვანო";

combined.push("მოთიაშვილი");

let finalString = combined.join(", ");

console.log(finalString);