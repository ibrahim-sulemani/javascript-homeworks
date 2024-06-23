
// - Vrz divot so id="firstDiv" kreirajte hover so pomos na Javascript Events, neka se menuva bojata na pozadinata.

function getRandomColor() {
  var red = Math.random() * 256;
  var green = Math.random() * 256;
  var blue = Math.random() * 256;

  return "rgb(" + red + "," + green + "," + blue + ")";
}

function changeBgColor() {
  const firstDiv = document.getElementById("firstDiv");
  firstDiv.style.backgroundColor = getRandomColor();
}

// - Selektirajte gi site divovi so klasa "card". Dodadete random text vo crvena boja vo niv.

const cards = document.getElementsByClassName("card");

function getRandomText(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

for (card of cards) {
  card.style.color = "red";
  const textLength = Math.floor(Math.random() * 30) + 10;
  card.textContent = getRandomText(textLength);
}

// - Na veke prviot so klasa "card" dodadete span element koj sto
// ke ima tekst "Hello from span", promenete ja i pozadinskata boja.

const spanElement = document.createElement("span");
spanElement.textContent = "Hello from span";

const cardElement = document.querySelector(".card");
cardElement.style.backgroundColor = getRandomColor();
cardElement.appendChild(spanElement);

// - Na pocetok pred "firstDiv" kreirajte button preku js i prikazete go.
// Promenete i stil taka sto ke kreirate klasa vo css i ke ja dodadete preku js na samiot button.

const buttonElement = document.createElement("button");
buttonElement.textContent = "button preku js";
buttonElement.classList.add("btnStyle");

const firstDivElement = document.getElementById("firstDiv");
document.body.insertBefore(buttonElement, firstDivElement);

// - Paragrafot id="toggleParagraph" na klik na kopceto id="toggleBtn" prikazuvajte go i krijte go naizmenicno.

function showHideParagraph(){
    const paragraph = document.getElementById("toggleParagraph");
    paragraph.classList.toggle('hide');
}