// The forecast today
const kelvin = 0;

// Degrees in Celcius
var celcius = kelvin - 273;

// Degrees in fahrenheit
let fahrenheit = celcius * (9/5) + 32;

// Round the number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Celsius to the Newton scale
let newton = celcius * (33/100);

// Round the number
newton = Math.floor(newton);

console.log(`The Newton scale in celcius is ${newton}.`);
