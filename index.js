/*
5. Vo let phoneNumber = "(123)456-7890"; so pomos na string i number metodi: 
- Izvadete go povikuvackiot broj vo areaCode
- Izvadete go ostatokot vo  remainingDigits
- Prikazete gi vo consola kade sto ke bidat od tip number
*/

let phoneNumber = "(123)456-7890";

let startAreaCodeIndex = phoneNumber.indexOf("(") + 1;
let endAreaCodeIndex = phoneNumber.indexOf(")");

let areaCodeStr = phoneNumber.slice(startAreaCodeIndex, endAreaCodeIndex);

let areaCode = Number(areaCodeStr);

let remainingNumberStr = phoneNumber.slice(endAreaCodeIndex + 1);
let remainingDigitsStr = remainingNumberStr.replace("-","");

let remainingDigits = Number(remainingDigitsStr);

console.log(areaCode);
console.log(remainingDigits);
