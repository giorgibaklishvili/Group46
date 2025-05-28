
let list1 = [1, 2, 3, 4];
let list2 = ["ა", "ბ", "გ", "დ"];
let list3 = ["X", "Y", "Z", "W"];

let combined1 = list1.concat(list2);

let combined2 = combined1.concat(list3);

combined2.splice(2, 5);

delete combined2[2];

let lastElement = combined2[combined2.length - 1];
console.log("ბოლო ელემენტი:", lastElement);