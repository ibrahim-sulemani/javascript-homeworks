/* Switch
1. Proverete ja ulogata na userot: 
- admin - You have full access.
- editor - You can edit content.
- viewer - You can view content.
- all other - Role not recognized.*/

let user = "editor";

switch(user) {
    case "admin":
        console.log("You have full access.");
        break;
    case "editor":
        console.log("You can edit content");
        break;
    case "viewer":
        console.log("You can view content");
        break;
    default:
        console.log("Role not recognized.");
}





/*2. Napravete proverka za operativen sistem: 
- Windows - You are using Windows.
- MacOs -  You are using MacOS.
- Linux - You are using Linux. 
- all other - Operating system not recognized.*/


let os = "Linux";

switch(os) {
    case "Windows":
        console.log("You are using Windows.");
        break;
    case "MacOs":
        console.log("You are using MacOS.");
        break;
    case "Linux":
        console.log("You are using Linux.");
        break;
    default:
        console.log("Operating system not recognized.");
        break;
}




/*For 
3. Isprintajte gi site neparni broevi od 1 do 100. */

 for(i = 1; i <= 100; i++) {
    if(i % 2 ==1) {
         console.log(i);
    } 
 }

/*
4. Site elementi od nizata vo konzola prikazete gi so golemi bukvi 
["apple", "banana", "cherry", "orange"];*/

let fruits = ["apple", "banana", "cherry", "orange"];

for(index = 0; index < fruits.length; index++) {
    console.log(fruits[index].toUpperCase());
}

/*
5. Na istata niza prikazete ja dolzinata (broj na karakteri) na sekoj od stringovite. */


for(index = 0; index < fruits.length; index++) {
    console.log(`'${fruits[index]}' ima ${fruits[index].length} karakteri`);
}


/*
6. Oslobodete se od praznite mesta vo nizata: 
 ["   user44444   ", "user223   ", " username12334   "];*/



 niza = ["   user44444   ", "user223   ", " username12334   "];

 for(index = 0; index < niza.length; index++) {
    console.log(`'${niza[index]}' bez prazni mesta e '${niza[index].trim()}'`);
 }

 
