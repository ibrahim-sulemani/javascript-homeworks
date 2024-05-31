// - Funkcija koja sto ke prima 2 parametri (str, times). str - stringot koj sto ke go vneseme,
// times- kolku pati da se povtoruva istiot. Treba da dobiete repeatString("abc", 3)
// Outputs: abcabcabc

function repeatString(str, times) {
  return str.repeat(times);
}

console.log(repeatString("abc", 3));
console.log(repeatString("JavaScript", 5));
console.log(repeatString("Frontend Developer ", 2));
