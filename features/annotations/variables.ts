const apples: number = 5;

let speed: string = 'fast';

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

//Array

let colors: string[] = ['red', 'green', 'blue'];

let myNum: number[] = [1, 2, 3];

let truths: boolean[] = [true, false];

//classes

class Car {}

let car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations

// 1.) when we have a function that returns any type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

//2.) when we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

//or

foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }

  //3.) When we want a variable to have a type that cant be inferred correctly

  let numbers = [-10, -1, 23];

  let numberAboveZero: boolean | number = false;

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      numberAboveZero = numbers[i];
    }
  }
}
