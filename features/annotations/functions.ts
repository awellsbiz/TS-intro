//:::::Annotations around functions::::::::
// Annotations for functions is code to tell TS what tyoe of arguments a function will recieve and what tyoe of values it will return

// Inference - TS tries to figure out what type of values the function will return

const add = (a: number, b: number): number => {
  return a + b;
};

// always add anotation because TS will not tell yopu if you forget to put a return statement in. like so:

//  const subtract = (a: number, b: number) =>{
//   a - b
//  }.....Shows no error

//  ::::::alternat forms of syntax :::::::

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// below we use void when the function wont return any value- there is no return statement. void can return null and undefined.
const logger = (message: string): void => {
  console.log(message);
};

//below is a corner case- rarley will use. type never means a function will never return anything ever. there is a chance of never reaching the end ever
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date, forecast.weather);
};

logWeather(forecast);

// to use destructuring you would replace the variable with {...what you are destructuring}
