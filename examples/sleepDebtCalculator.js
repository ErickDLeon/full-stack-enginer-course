const getSleepHours = day => {
  switch(day) {
    case 'monday':
    return 7;
    case 'tuesday':
    return 6;
    case 'wednesday':
    return 5;
    case 'thursday':
    return 6;
    case 'freeday':
    return 7;
    case 'saturday':
    return 6;
    case 'sunday':
    return 6;
  }

 };

const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('freeday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours =  getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours) {
    console.log('the user got the perfect amount of sleep');
  }

   if(actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. Get up!');
  }

   if(actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};

calculateSleepDebt();





























