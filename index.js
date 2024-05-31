// - Funkcija koja sto ke vi vrakja dali eden string zapocnuva so nekoj prefix ili ne. 
// startsWithPrefix("Javascript", "Java") // Outputs: true

function startsWithPrefix(str, startStr){
  return str.startsWith(startStr);
}

console.log(startsWithPrefix("Javascript", "Java"));
console.log(startsWithPrefix("Hello front-end developers", "Hello"));
console.log(startsWithPrefix("Lorem ipsum dolor sit amet", "ipsum"));
