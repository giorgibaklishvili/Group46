const names = ["გიორგი", "ნინო", "ლუკა", "მარიამი"];

const greetings = names.map(name => გამარჯობა, ${name});

greetings.forEach(greet => console.log(greet));







const numbers = [2, 5, 8, 10, 15];

const doubled = numbers.map(num => num * 2);

console.log(doubled);








const namess = ["გიორგი", "ნინო", "მარიამი", "ლუკა", "დავით"];

const longNames = namess.filter(name => name.length > 5);

console.log(longNames);