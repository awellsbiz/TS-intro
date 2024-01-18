// classes is a blueprint to create an object with some fields ( values ) and methods ( functions ) to represent a 'thing'

class Vehicle {
  drive(): void {
    console.log(' chugga , chugga ');
  }

  honk(): void {
    console.log('Hooooonk');
  }
}

// to get all of the properties/ functions from another class use extends
// telling TS to take all the the methods to paste over to Car

class Cars extends Vehicle {}

const niceCar = new Cars();

const vehicle = new Vehicle();
niceCar.drive();
niceCar.honk();
