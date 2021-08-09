// My Age
const myAge = 1;

// Early years, will be change
let earlyYears = 2;

earlyYears *= 10.5;

// Later years, will be change
let laterYears = myAge - 2;

// Number of dog years accounted for by your later years
laterYears *= 4;

console.log(`earlyYears ${earlyYears}`);
console.log(`laterYears ${laterYears}`);

// My age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name in lower case
let myName = 'Erick De Leon'.toLowerCase();

// My age and my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);