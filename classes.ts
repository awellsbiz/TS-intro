// classes is a blueprint to create an object with some fields ( values ) and methods ( functions ) to represent a 'thing'

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Hooooonk');
  }
}

const dopeVehicle = new Vehicle('orange');
console.log(dopeVehicle.color);

// to get all of the properties/ functions from another class use extends::::this is inheritance::::
//vehicle is the super class or the oparent class
// telling TS to take all the the methods to paste over to Car

class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    //reference to parent constructor...super() that is
    super(color);
  }
  private drive(): void {
    console.log('vrooom');
  }
  startDrivingProcess(): void {
    this.drive;
    this.honk;
  }
}

const niceCar = new Cars(4, 'blue');

// const vehicle = new Vehicle();
// niceCar.startDrivingProcess();

//Modifiers are a key word to add to classes functins or variables
//by default modifiers are public
// public - can be called any where at any time

// private - that method can be called only by other methods in this class -- not for system security at all -- only to restrict different methods from being called by other developers. for example if there is a method that very deeply manipulates a class & there is a complicated --other devs can break it.

// protected - this method can be called by other methods in this class or by other methods in child classes-- just lioke private but can access in child classes well
