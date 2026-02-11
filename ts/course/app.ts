console.log('Hello world!');

let a = 1000;
let b = 500;
let c: number = a + b;

function logAny(arg) {
  // дефолтный тип параметра без указанного типа **any**
  console.log(arg);
}

function onePlusTwo(one: number, two: number) {
  return one + two;
}

// стрелочная функция
const constructGreetings = (name: string): string => {
  return `Hello, ${name}!`;
};



