/*
2. Proverka za vozrast: 
0-2 years: "Infant"
3-12 years: "Child"
13-19 years: "Teenager"
20-59 years: "Adult"
60 years and above: "Senior"

*/

let age = 60;

if (age <= 2) {
  console.log("Infant");
} else if (age <= 12) {
  console.log("Child");
} else if (age <= 19) {
  console.log("Teenager");
} else if (age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}
