const drink = {
  color: 'brown',
  carbornated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

// pepsi[0] = 40 send error
