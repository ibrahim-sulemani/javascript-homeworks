// Od site metodi do sega sto gi izucivme (samo string metodi pominavme) upotrebete te gi po 3 pati vo svoj primer.
// Dodadete i po eden primer za tie sto imaat opcionalen parametar.

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

console.log(text.charAt(3));
console.log(text.charAt(50));
console.log(text.charAt(10));

console.log(text.charCodeAt(3));
console.log(text.charCodeAt(50));
console.log(text.charCodeAt(10));

console.log("Hello".concat("World"));
console.log("Hello".concat(" ", "World"));
console.log("Hello".concat(" ", "World", "!"));

console.log(text.includes("ipsum"));
console.log(text.includes("Ipsum"));
console.log(text.includes("Hello"));
console.log(text.includes("elit", 20));

console.log(text.endsWith("amet,"));
console.log(text.endsWith("elit"));
console.log(text.endsWith("elit."));
console.log(text.endsWith("adipisci", 48));

console.log(text.indexOf("sit"));
console.log(text.indexOf("Amet"));
console.log(text.indexOf("dolor"));
console.log(text.indexOf("Lorem", 0));
console.log(text.indexOf("Lorem", 1));

console.log(text.lastIndexOf("sit"));
console.log(text.lastIndexOf("Amet"));
console.log(text.lastIndexOf("dolor"));
console.log(text.lastIndexOf("amet", 21));

console.log(text.replace("Lorem", "Hello"));
console.log(text.replace("Lorem", "Hello").replace("amet", "World"));
console.log(text.replace("People", "World"));

console.log(text.replaceAll("o", "0"));
console.log(text.replaceAll("e", "3"));
console.log(text.replaceAll("s", "5"));

console.log(text.slice(0, 5));
console.log(text.slice(5, 10));
console.log(text.slice(10, 15));

console.log(text.split(" "));
console.log(text.split(" ", 3));
console.log(text.split(","));

console.log(text.startsWith("Lorem"));
console.log(text.startsWith("Ipsum"));
console.log(text.startsWith("Hello"));
console.log(text.startsWith("Lorem", 0));
console.log(text.startsWith("Lorem", 1));

console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log("'" + "   Hello  ".trim() + "'");
console.log("'" + "   JavaScript  ".trim() + "'");
console.log("'" + "   World  ".trim() + "'");

console.log("'" + "   Hello  ".trimStart() + "'");
console.log("'" + "   JavaScript  ".trimStart() + "'");
console.log("'" + "   World  ".trimStart() + "'");

console.log("'" + "   Hello  ".trimEnd() + "'");
console.log("'" + "   JavaScript  ".trimEnd() + "'");
console.log("'" + "   World  ".trimEnd() + "'");

console.log("JavaScript".repeat(5));
console.log("Hello World".repeat(5));
console.log("Hello JavaScript World".repeat(3));