/*
1. Kreirajte slideshow so pomos na setInterval. Dodadete niza so 5 random sliki.
   Menuvajte go src atributot na eden img tag na sekoi 2 seknudi. 

2.  Kreirajte input i button koj sto na klik ne ni ja dodava vrednosta vo sessionStorage
    i ke ja prikazuvate istata vo paragraf (vrednosta zemena od sessionStorage)

3. 
Kreirajte dropdown so opcii za currency na sajtot. 
Dodade 5 razlicni currencies i vo odnos na vrednosta da ni se menuva currenci zapisuana 
vo nekoj paragraf.. Vo localStorage cuvajte ja izbranata vrednost taka sto poslednata odbrana 
ke stoi sekogas vo paragrafot.. 

4. Kreirajte dropdown za preferiran size na korisnikot (small, medium, large).
 Vrednosta sto ke ja odbere od dropdown-ot zapisete ja vo cookies i cuvajte ja 7 dena.
  Vrednosta sto ja odbral korisnikot prikazete ja vo paragraf.
*/



const arrayImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg", 
    "images/image4.jpg", 
    "images/image5.jpg"
]

const imgElement = document.getElementById("imageSlide");
let index = 0;
imgElement.src = arrayImages[index];

setInterval(slideImage, 2000);

function slideImage() {
    if (index == arrayImages.length - 1) {
        index = 0;
    } else {
        index++;
    }
    imgElement.src = arrayImages[index];
}

const buttonValue = document.getElementById("btnValue");

buttonValue.addEventListener("click", saveinSessionStorage);

function saveinSessionStorage() {
    let textValue = document.getElementById("inputValue").value;
    if(textValue) {
        sessionStorage.setItem("value", textValue);
    }
    
    showinParagraph();
}

function showinParagraph(){
    textValue = sessionStorage.getItem("value");

    if(textValue) {
        document.getElementById("showText").textContent = textValue;
    }
}

showinParagraph();

const currencyChoiceElement = document.getElementById("currencyChoice");

let currencyChoice = localStorage.getItem("Currency");

if(!currencyChoice) {
    currencyChoice = currencyChoiceElement.value;
} else {
    currencyChoiceElement.value = currencyChoice;
}
showinCurrency();

currencyChoiceElement.addEventListener("change", changeCurrencyChoice);

function changeCurrencyChoice () {
    let currencieValue = currencyChoiceElement.value;
    if(currencieValue) {
        localStorage.setItem("Currency", currencieValue);
        currencyChoice = currencieValue;

    }

    showinCurrency();
}

function showinCurrency() {
    let currencieValue = localStorage.getItem("Currency");

    if(currencieValue) {

        document.getElementById("currencyParagraph").textContent = currencieValue;
    }
}

const sizeElement = document.getElementById("sizeChoice");
const sizeParagraph = document.getElementById("sizeParagraph");

let cookies = document.cookie.split(";");
let sizeString = cookies.find((cookie) =>
    cookie.trim().startsWith("size="));

if (sizeString) {
    sizeElement.value = sizeString.split("=")[1];
    sizeParagraph.textContent = sizeString.split("=")[1]; 
}

sizeElement.addEventListener("change", setSize);

function setSize() {
    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    
    document.cookie = `size=${sizeElement.value}; expires=${date.toUTCString()} ; path=/ `;
    
    sizeParagraph.textContent = sizeElement.value;
}
    