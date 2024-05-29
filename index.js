//1. Da se kreira promenliva od tip string so vrednost "33.33".
// Da se pretvori vo number istata, da se pomnozi so 5 i rezultatot da se prikaze do 2 decimali.

let a = "33.33";

let b = Number(a);
console.log("Kreiranata promenliva pretvorena vo number ima vrednost: " + b);

b = b * 5;
console.log("Pomnozeno so 5: " + b);
console.log("Rezultatot e: " + b.toFixed(2));


