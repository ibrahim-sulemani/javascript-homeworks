// - Funkcija koja sto ke sporeduva dva broja i ke ni go vrakja pogolemiot.
//   Dokolku se isti "Both numbers are equal."

function sporedba(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "Both numbers are equal.";
  }
}

console.log(sporedba(50, 30));
console.log(sporedba(10, 90));
console.log(sporedba(20, 20));
console.log(sporedba(-15, -20));
