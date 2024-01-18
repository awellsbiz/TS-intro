//  interfaces and classes = how we get strong code to reuse in TS

// interfaces creates a new type, describing the property names and value types of an object

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `name is ${this.name}`;
  },
};

const beverage = {
  color: 'brown',
  carbonated: true,
  summary(): string {
    return `is my drink carbonated? : ${this.carbonated}`;
  },
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(beverage);
