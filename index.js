// 4.Generirajte random boja.
//Boite vo css ni doagjaat od 3-te primarni R (red) G(green) B(blue)
// i sekoja od niv dobiva vrednost od 0-256.
// rgb(255, 165, 0) e primer za zolta, ovie ovde fiksni zapisani broevi treba da gi dobiete random.

let red = Math.round(Math.random() * 256);
let green = Math.round(Math.random() * 256);
let blue = Math.round(Math.random() * 256);

console.log("rgb(" + red + ", " + green + ", " + blue + ")");
