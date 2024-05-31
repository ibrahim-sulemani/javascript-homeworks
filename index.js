// - Funkcija koja sto ke presmetuva stepeni "celsius to fahrenheit".
// Kako parametar ke prakjame celsius. fahrenheit = (celsius * 9/5) + 32;

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log("Temperature 25 celsius is " + celsiusToFahrenheit(25) + " fahrenheit");
console.log("Temperature 0 celsius is " + celsiusToFahrenheit(0) + " fahrenheit");
console.log("Temperature -10 celsius is " + celsiusToFahrenheit(-10) + " fahrenheit");
