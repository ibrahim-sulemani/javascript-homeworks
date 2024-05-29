// 3.Kreirajte 2 varijabli za dolzina i vreme na eden maratonec distanceStr = "5.75" i timeStr = "45m".
// Presmetajte ja brzinata (distance/time) zaokrizena na 2 decimali. Isprintajte soodvetna poraka.

let distanceStr = "5.75";
let timeStr = "45m";

let distance = Number(distanceStr);

let time = parseInt(timeStr);

let speed = distance / time;
console.log(
  "Brzinata na maratonecot e " + speed.toFixed(2) + " kilometri vo minuta."
);
