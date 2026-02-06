function printNumbers(current) {
  if (current <= 5) {
    console.log(current);
    
    setTimeout(() => {
      printNumbers(current + 1);
    }, 2000);
  }
}

printNumbers(1);






let count1 = 10;
let counting1 = setInterval(() => {
    count1 -= 1
    console.log(count1)
    if(count1 === 0){
        console.log("done")
        clearInterval(counting1)
    }
}, 1000);







setInterval(() => {
  globalSeconds++;
  console.log(`--- გავიდა ${globalSeconds} წამი ---`);
  setInterval(() => {
    if (globalSeconds % 2 === 0) {
      console.log("   (შიდა შეტყობინება: წამი ლუწია!)");
    }
  }, 2000); 

}, 4000);







setTimeout(() => {
  console.log(5);
}, 5000);