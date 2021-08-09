// Race random number for the runners
let raceNumber = Math.floor(Math.random() * 1000);

// Indicates when register is early or later
let registeredEarly = false;

// Age of the runner
let runnerAge = 18;

// Runners age over 18 and registered early 
if(runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`You will race at 9:30 am race number ${raceNumber}`);
} else if(runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am race number ${raceNumber}`);
} else if(runnerAge < 18) {
  console.log(`You will race at 12:30 am race number ${raceNumber}`);
} else {
  console.log(`see the registration desk`);
}