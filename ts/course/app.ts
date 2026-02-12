import * as stream from 'node:stream';

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
  .forEach((s) => {
    console.log(s);
  });

// .reduce и т.д. также существуют

// array of tuples
let myTuple: [number, string] = [1, 'One'];
myTuple[0];
myTuple[1];
// myTuple[2]; error

// exotic:
let arr: [number, ...string[]] = [1, 'One'];
arr = [1, 'One', 'Two', 'Three'];

// readonly
const myReadonlyTuple: readonly [number, string] = [1, 'One'];
// если не ставить ридонли, то хоть сам кортеж мы не перепишем, но его ячейки - вполне
// ридонли защищает от переписывания ячейки, а не только ссылку на них

enum StatusCode {
  SUCCESS = 1,
  FAILURE = 0,
}

// константный енум улучшает производительность, т.к. вместо создания функции он ищет все места в коде,
// где упоминаются значения енума, и подставляет туда значения
const enum StatusCodeConst {
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
  if (Array.isArray(err)) {
    // проверка на тип массива
    console.error(err);
  }
}

// проверка на наличие свойств при юнионе объекта:
function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else if ('b' in obj) {
    console.log(obj.b);
  }
}

// type alias
type httpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; // это будет константа юнион-типа конкретно этой константы, не стринга

function httpMethod(method: httpMethod) {
  return Math.random() * 10;
}

// типизация параметров в функциях может быть классом, но может быть кастомным типом, или даже пересечением кастомных типов:
type User = {
  name: string;
  age: number;
};

type Role = {
  id: number;
};

let user2: User = {
  name: 'f',
  age: 1,
};

type USerWithAssignedRole = User & Role;

let user3: USerWithAssignedRole = {
  name: 'dd',
  age: 3,
  id: 1,
};

// нужно быть осторожным, если в разных типах есть одинаковые поля, т.к. если у них одинаковое название, выживет только один
// лучше делать новый тип, создавая поля в нем (например user: User, role: Role)

// есть опция использовать интерфейсы и классы в ts

interface UserI {
  name: string;
  age: number;

  getLogMessage: () => string;
}

interface UserWithRoleI extends UserI {
  roleId: number;
}

let user4: UserWithRoleI = {
  name: 'ws',
  age: 1,
  roleId: 1,

  getLogMessage: function () {
    return `name=${this.name}`;
  },
};

console.log(user4.getLogMessage());

// в ts есть опшнлс, который выполняет примерно то же самое, что и в джаве: страхует от неопределенности в приходящих данных
interface USerWithOptionalPassword {
  login: string;
  password?: string; // ? показывает опциональность
  fieldA?: {
    type: 'on' | 'off';
  }
}
const user5 = {
  login: 'ddd',
  // password не обязателен
  fieldA: 'on'
};

function foo(user: USerWithOptionalPassword): void {
  console.log(user.fieldA?.type); // запись вернет undefined либо значение типа
  console.log(user.fieldA!.type); // мы уверены, что не будет undefined, однако мы неправильно определили fieldA, и будет undefined при обращении к полю
}

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
console.log(multiply(1)); // получаем NaN, если уберем проверку на второе число

foo(user5);  // нам показывает ошибку что fieldA определен неправильно, но это скомпилируется и будет результат при прогоне джс кода

// упражнение
interface Payment {
  sum: number,
  idFrom: number,
  idTo: number,
}

interface FinishedPayment extends Payment {
  databaseId: number;
}

interface ErrorPayment {
  errorMessage: string;
  errorCode: number;
}

type paymentStatus = "success" | "failed";

interface PaymentResponse {
  status: paymentStatus,
  data: FinishedPayment | ErrorPayment,
}

let request: Payment = {
  sum: 10000,
  idFrom: 2,
  idTo: 4
};

let response: PaymentResponse[] = [
  {
    status: "success",
    data: {
      databaseId: 567,
      sum: 10000,
      idFrom: 2,
      idTo: 4
    }
  },
  {
    status: "failed",
    data: {
      errorMessage: "Недостаточно средств",
      errorCode: 4
    }
  }
]

// unknown type
let d: unknown;
console.log(`value: ${d} type: ${typeof d}`);
d = 2;
console.log(`value: ${d} type: ${typeof d}`);
d = "2";
console.log(`value: ${d} type: ${typeof d}`);

// let e: string = d; // вот так нельзя, т.к. стоит ограничение по типу


