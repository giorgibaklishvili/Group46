for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}








let person = {
  name: "გიორგი",
  surname: "ბაკლიშვილი",
  age: 20
};

for (let key in person) {
  console.log(key + ":", person[key]);
}





let numbers = [3, 8, 5, 12, 7, 10];

for (let num of numbers) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}