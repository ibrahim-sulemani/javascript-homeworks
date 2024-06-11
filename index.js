//1. So pomos na while presmetajte ja sumata na site broevi od 1 od 10.

let i = 1;
let sum = 0;

while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log("Sumata na site broevi od 1 do 10 e " + sum);

/*2. Izminete ja nizata so while 
let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];  
- Dokolku clenot sozdrzi "a" vo sebe vratete go celiot so golemi bukvi 
- Dokolku e pogolem od 5 karakteri a ne go ispolnuva prviot uslov vratete go so soodveta poraka 
(is longer than 5 characters... )- Dokolku ne gi ispolnuva nikoj od prvite 2 - is a short fruit name*/

let fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

let fruitIndex = 0;

while (fruitIndex < fruits.length) {
  if (fruits[fruitIndex].includes("a")) {
    console.log(fruits[fruitIndex].toUpperCase());
  } else if (fruits[fruitIndex].length > 5) {
    console.log(fruits[fruitIndex] + " is longer than 5 characters.");
  } else {
    console.log(fruits[fruitIndex] + " is a short fruit name.");
  }
  fruitIndex++;
}

/*3. So pomos na do while izminete ja nizata 

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio"];
- Dokolku eden grad sodrzi vo sebe"o" promenete gi site so "0" 
- Dokolku eden grad ima povekje od 8 karatkeri prikazete go do tolku karakteri i ostavete 3 tocki. 
- Site ostanati so pomos na template literals isprintajte go gradot so brojot na karakterite vo sebe.*/

let cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
];
let cityIndex = 0;

do {
  let city = cities[cityIndex];

  if (cities[cityIndex].includes("o")) {
    city = cities[cityIndex].replaceAll("o", "0");
  }

  if (city.length > 8) {
    console.log(city.slice(0, 8) + "...");
  } else {
    console.log(`${city} ${city.length}`);
  }

  cityIndex++;
} while (cityIndex < cities.length);

/*4. So pomos na for of vratete gi site clenovi od nizata na kvardrat 
let numbers = [1, 2, 3, 4, 5];*/

let numbers = [1, 2, 3, 4, 5];
for (num of numbers) {
  console.log(Math.pow(num, 2));
}

//5. So pomos na for of sekoj karakter od vaseto ime i prezime isprintajte go so negovata vrednost od Unicode
// (charCodeAt)

let nameSurname = "Ibrahim Sulemani";

for (ch of nameSurname) {
  console.log(`${ch}: ${ch.charCodeAt()}`);
}

/*6. So pomos na for of izminete go objektot 
let persons = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 25 },
{ name: "Charlie", age: 35 }
]; 

I za sekoj person isprintajte primer "Alice is 30 years old" .*/

let persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

for (person of persons) {
  console.log(`${person.name} is ${person.age} years old`);
}

/*7. Izvadete gi site broevi od stringot : 
let text = "Today is 2024-06-09 and it's a sunny day. Temperature is 25°C."; 
isNaN (is Not a Number) ke vi bide od pomos */

let text = "Today is 2024-06-09 and it's a sunny day. Temperature is 25°C.";

function extractNumbers(text) {
  let numbers = "";
  for (c of text) {
    if (!isNaN(c)) {
      numbers += c.trim();
    } else if (numbers != "") {
      console.log(numbers);
      numbers = "";
    }
  }
}

console.log(text);

extractNumbers(text);

/*8 So pomos na for in izminete go objektot 
let formData = {
username: "john_doe",
password: "password123",
email: "john@example",
age: 25
};

So ona sto go znaete do sega napravete validacija za klucot email vrednosta da sodrzi "@"
- So klucot age vrednosta da e broj i da ne e pogolem od 100 
- So klucot password da ne e pokratok od 8 karakteri.*/

let formData = {
  username: "john_doe",
  password: "password123",
  email: "john@example",
  age: 25,
};

for (key in formData) {
  if (key == "email" && formData[key].includes("@")) {
    console.log(`${formData[key]} is valid email.`);
  }

  if (key == "age" && !isNaN(formData[key]) && formData[key] <= 100) {
    console.log(
      `${formData[key]} is valid number and less than or equal to 100.`
    );
  }

  if (key == "password" && formData[key].length >= 8) {
    console.log(`Password ${formData[key]} is valid`);
  }
}
