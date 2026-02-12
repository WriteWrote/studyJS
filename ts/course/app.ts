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

// функция типизирована структурой строка-строка
function getFullName(user: { name: string; surname: string }) {
  return `${user.name} ${user.surname}`;
}

// но передать в нее можно структуру не меньшую, чем та, которой она была типизирована
// то есть лишние поля быть могут, а меньше полей, чем указано, быть не может

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
};

console.log(getFullName(user));

let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79100000000',
    email: 'my@email.ru',
    address: {
      city: 'Москва',
    },
  },
};

// массивы
let skills: string[] = ['one', 'two'];

for (const skill of skills) {
  console.log(skill);
}

skills
  .filter((s) => s !== 'one')
  .map((s) => s.toUpperCase())
  .forEach((s) => { console.log(s); });

// .reduce и т.д. также существуют

// array of tuples
let myTuple: [number, string] = [1, 'One'];
myTuple[0];
myTuple[1];
// myTuple[2]; error

// exotic:
let arr: [number, ...string[]] = [1, 'One'];
arr = [1, 'One', "Two", 'Three'];

// readonly
const myReadonlyTuple: readonly [number, string] = [1, 'One'];
// если не ставить ридонли, то хоть сам кортеж мы не перепишем, но его ячейки - вполне
// ридонли защищает от переписывания ячейки, а не только ссылку на них

enum StatusCode{
  SUCCESS = 1,
  FAILURE = 0,
}

// константный енум улучшает производительность, т.к. вместо создания функции он ищет все места в коде,
// где упоминаются значения енума, и подставляет туда значения
const enum StatusCodeConst{
  SUCCESS = 1,
  FAILURE = 0,
}

let statusCode = StatusCode.SUCCESS;

let statusCodeconst = StatusCodeConst.FAILURE;

// union-тип - объединение множеств типов, например (string | number) - union
function logIt(it: string | number | boolean): void {
  console.log(it); // работать будет, но ни один специфичный для типа метод (напр. toLowerCase()) доступен не будет
  // можно сделать рантайм-проверку и сузить тип, снова получив доступ к методу суженного типа
  if (typeof it === 'string') {
    console.log(it.toUpperCase()); // здесь юнион будет состоять из number | boolean
  }
}

function logErrorStack(err: string | string[]): void {
  if (Array.isArray(err)) { // проверка на тип массива
    console.error(err);
  }
}

// проверка на наличие свойств при юнионе объекта:
function logObject(obj: {a: number} | {b: number}) {
  if ('a' in obj){
    console.log(obj.a);
  } else if ('b' in obj) {
    console.log(obj.b);
  }
}


