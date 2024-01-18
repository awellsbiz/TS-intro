const profile = {
  name: 'alex',
  age: 20,
  coordinates: {
    lat: 0,
    lng: 15,
  },
  // A method for age
  setAge(age: number): void {
    this.age = age;
  },
};

// if you want to use destructuring youhave to write out the structure
const { age }: { age: number } = profile;

const {
  coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;
