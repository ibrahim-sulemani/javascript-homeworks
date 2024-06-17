/*1. Kreirajte funkcija mergeArrays koja sto kako parametri ke prima 2 nizi. 
So pomos na nekoj od loopovite dodate gi site elementi od vtorata vo prvata niza.
 Vo prilog izgled od resenieto: 
// Example usage:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

mergeArrays(array1, array2);

console.log(array1); // Output: [1, 2, 3, 4, 5, 6] */

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function mergeArrays(array1, array2) {
  for (element of array2) {
    array1.push(element);
  }
}

mergeArrays(array1, array2);
console.log(array1);

/*
2. Napravete manipulacija so dadenata niza: 

let tasks = ['Study', 'Exercise', 'Read', 'Write', 'Code'];

- Step 1: Remove the last task
- Step 2: Add three new tasks to the beginning (by your choice)
- Step 3: Create new array with the first 3 only */

let tasks = ["Study", "Exercise", "Read", "Write", "Code"];

tasks.pop();
console.log(tasks);

tasks.unshift("Travel");
tasks.unshift("Listen music");
tasks.unshift("Watch a movie");
console.log(tasks);

let newArray = tasks.slice(0, 3);
console.log(newArray);

/*
3. Funkcija koja sto ke ni dava dali postoi takvo ime vo nizata od objekti sto ja prakjame kako parametar. 
Treba vo funkcijata da ja izmenete nizata so metoda, dokolku postoi takov user prikazete go dokolku ne not found. 

// Example usage:
  let people = [

{ name: "Alice", age: 25 },

 { name: "Bob", age: 30 },

 { name: "Charlie", age: 35 }
];


console.log(findPersonByName(people, "Bob")); // Output: { name: "Bob", age: 30 }

console.log(findPersonByName(people, "David")); // Output: Person with name David not found.
*/

let people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 35 },
];

function findPersonByName(people, name) {
  let person = people.find((person) => person.name == name);

  if (typeof person == "undefined") {
    return `Person with name ${name} not found.`;
  } else {
    return person;
  }
}

console.log(findPersonByName(people, "Bob"));

console.log(findPersonByName(people, "Ibrahim"));

