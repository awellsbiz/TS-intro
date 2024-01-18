//  if we initialize an empy array then we want to annotate it
//  const carMakers: string[] = []
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// only time to annotate is if you have empty arrays
const carByMake: string[][] = [];

// const carByMake= [
//   ['f150'],
//   ['corolla'],
//   ['camero']
// ]

//  Help with unference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent compatible values

// carMakers.push(100);:::error

// Help with map foreach and reduce

carMakers.map((car: string): string => {
  return car;
});

// flexible types

const importantDates = [new Date(), '2030-10-10'];

// importantDates: (Date | string)[] = [new Date()]
// importantDate.push('2030-10-10')
