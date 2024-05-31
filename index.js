/* - Funkcija koja sto ke ni vrakja poraka vo odnos na vremeto od denot: 
-  do 12 - Good morning
- do 18 - Good afternoon
- posle 18 - Good eveinng */

function dayTime(hourTime) {
  if (hourTime >= 0 && hourTime < 12) {
    return "Good morning";
  } else if (hourTime >= 12 && hourTime < 18) {
    return "Good afternoon";
  } else if (hourTime >= 18 && hourTime < 24) {
    return "Good evening";
  } else {
    return "Invalid hour!";
  }
}

console.log(dayTime(9));
console.log(dayTime(15));
console.log(dayTime(20));
console.log(dayTime(30));
