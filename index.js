/*

1.So pomos na "if", "else if" i "else napravete soodvetna proverka za temperaturata koja sto ke ja stavite vie prvicno vo edna varijabla. 

Print "It's freezing!" if the temperature is below 0.
Print "It's cold." if the temperature is between 0 and 15.
Print "It's warm." if the temperature is between 16 and 25.
Print "It's hot!" if the temperature is above 25.

*/

let temperature = 26;

if (temperature < 0) {
  console.log("It's freezing");
} else if (temperature < 15) {
  console.log("It's cold");
} else if (temperature < 25) {
  console.log("It's warm");
} else {
  console.log("It's hot");
}
