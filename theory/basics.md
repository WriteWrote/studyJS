[Back](../README.md)
***

# Basics

### noscript
Тег `noscript` служит для того, чтобы выводить пользователю сообщение, если у него выключен js. Все, что внутри тега, показывается только при выключенном в браузере js.

```html
<body>
    <noscript>Включите JS для корректной работы сайте</noscript>
</body>
```

### script
Тег `script` подключает js на страницу (либо сторонние файлы, либо исполняемый код прямо в нем). Его можно прописывать где угодно.

```html
<body>
    <script type="module" src="/src/main.js"></script>
</body>
```

Обычно теги `script` прописываются в конце html, перед закрывающей скобкой боди, т.к. браузер быстрее прочитает страницу с элементами и стилями, а потом будет дольше подгружать скрипты js.

### Strict mode
Из-за того, что js развивался так, чтобы не ломать уже существующие фичи языка, до сих пор осталось много плохих практик, которые уживаются с адекватными практиками.

Например, в js можно объявлять и ассайнить переменную, у которой не указано, var, let или const она.

```js
age = 10    // валидный код
console.log(age)
```

Поэтому на поздних этапах развития языка появился "строгий режим", который запрещает использовать неблагонравные конструкции. Он включается в каждом файле отдельно, но сборщики и иде обычно включают его по умолчанию.

```js
'use strict'

age = 10  // уже ошибка
console.log(age)
```

### Комментарии
Комментировать в js можно через `//`, как обычно.

```html
<body>
    <!--    Html comment-->
    <script>
        // One line JS comment
        /*
            Long JS comment
         */
    </script>
</body>
```

### Подключение JS-файла к html-странице
Через проперти сорс:
```html
<body>
    <script src="../src/basics.js"></script>
</body>
```

Периодически файлы попадают в кэш и его нужно сбрасывать.

***

### Вывод в консоль
Можно вывести внутрь тега боди, используя объект `document` для манипуляция дом-деревом, но это устаревшая практика:

```html
<body>
    <script>
        document.write("Hello world!")
    </script>
</body>
```

Еще можно использовать объект консоли и выводить информацию в консоль девтулзов браузера:
```html
<body>
    <script>
        console.log("Hello world!")
        console.info("Hello world!")
        console.error("Hello world!")
    </script>
</body>
```

### Переменные
```js
// variables change:
var dd = "2";
dd = "3";
console.log(dd); // produces 3

// constants don't change
const bb = "2";
bb = 2; // don't work

// let нельзя использовать без предварительного объявления, в отличие от var, поэтому в современном языке ее используют вместо var
let cc = "2";
```
### Типы данных:
```js
let str = 'STring'
// also
let str2 = "String"
// also
let str3 = `String ${str2}`
// also
let str4 = `
    Long string
`
```
```js
let age = 1
let isTrue = true
let char = Symbol("1")
```
```js
// object
let user = {
    login: "123",
    password: "qwerty"
}
```
```js
let smth = undefined // память аллоцирована, но значения нет
let smth2 = null // отсутствует значение и память
```
#### Проверка типа данных:
```js
let message = "message"
console.log(typeof message) // string
```
Очередной подводный камень:
```js
console.log(typeof [1, 2, 3]) // object
console.log(typeof [1, 2, 3]) // object
console.log(typeof ["1", "2", "3"]) // object
```

#### Явное приведение типов:
```js
let age = 11
let strAge = String(age)
let strObj = String({}) // [object Object], независимо от содержимого объекта

let backToNumberAge = Number(strAge)
let number = Number("str") // NaN
let problem = Number("100-")

let trueNum = Number(true) // 1
let falseNum = Number(false) // 0

let bigProblem = Number(null) // 0
let ok = Number(undefined) // NaN

// если в строке есть любой символ, то строка преобразуется в true, иначе - в false
Boolean("Hello, world!") // true
Boolean("") // false

// если число != 0, то преобразуется в true, иначе - в false
Boolean(0) // false
Boolean(-1) // true
```

#### Неявное приведение типов:
Проблемы во время конвертации:
```js
var num = 5;
var str = "5";

console.log(num + str); // "55" из-за неявного преобразования num в строку
console.log("Вычитание: " + num - str) // также ошибка из-за неявного приведения во время первой операции +
console.log("Вычитание: " + (num - str)) // вот так верно

var foo = Number("2");
var bar = Number("2");
console.log(foo + bar); // будет 4

console.log("16" / "8"); // получим 2 из-за неявного преобразования строки в число
```

Проблемы во время сравнения:
```js
console.log(2 == 2) // true
console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(2 !== "2") // true
```

### Math
Модуль для математических констант и операций:
```js
Math.PI;
Math.abs(-2);
Math.max(1, 2, 3); // aka vararg
```

### Условные операторы
```js
var number = 15;
var flag = true;

if (number < 0 && flag) {
    console.log("Lesser than zero");
} else {
    if (number == 15 || flag){
        console.log("Is 15");
    } else {
        console.log("Greater than zero, but not 15")
    }
}
```

### Тернарный оператор
```js
var foo = Date.getMonth() === 12 ? "Скоро Новый год" : "Новый год еще нескоро"
```

***

### Массивы
```js
var arr = [];
// или 
let arr = new Array();

arr = [1, 2, 3];
```

Обращение по индексу:
```js
var arr = [5, true, "str", 3.14];
arr[2] = "str2"

arr[-1] // undefined, но:
arr.at(-1) // первый элемент с конца
arr[1000] // undefined

console.log(arr[2]); // "str2"
console.log(arr.length);
```

Изменение элемента:
```js
arr[1] = "New Value"

arr[4] = "Adding new value"

arr[1000] = "Adding new value long forward"     // добавит к массиву 996 пустых элементов и один тот, который мы добавляем
```

Добавить элемент в конец массива:
```js
arr.push("first")
arr.push("second", "third", ...)

// достать элемент из конца массива (и удалить его из массива при этом):
arr.pop()
```

Добавить элемент в начало массива:
```js
arr.unshift("Zero", "Minus one")

// достать элемент из начала массива:
arr.shift()
```

Добавление элементов в начало массива дороже, чем добавление в конец, как в классических массивах.

Копирование массивов работает аналогично спискам в Джаве: при простом присваивании в новую переменную записывается ссылка.
```js
let arr = [1, 2, 3]
let arr2 = arr // ссылка

let arr3 = [...arr] // копирование через spread-оператор

let arr4 = arr.slice() // вызов слайса без аргументов будет копировать весь массив
let arr5 = arr.slice(1, 2) // срез массива от индекса до индекса
let arr6 = arr.slice(-1) // срез последнего элемента

let bigArr = [...arr, ...arr2] // получим дважды arr в виде массива
let secondBigArr = arr.concat(arr2, arr3) // получим тройную копию arr
```

Сравнение массивов по == будет приводить к сравнению ссылок. 

Полезные функции массивов:
```js
var arr = [1, 2, 3, 4, 5];
arr.join(", "); // сливает массив в одну строку с разделителем
arr.sort(); // сортировка
arr.reverse() // обращение
Array.isArray(arr) // проверка на массивность
```

### Циклы
```js
for (let i = 0; i < 10; i++){
    console.log(i);
}
```
```js
var i = 10;

while (i > 0){
    console.log(i);
    --i;
}
```

Также существуют break, continue, как и в джаве.

### Классы
```js
class Person {
    constructor(
        name,
        age
    ){
        this.name = name;
        this.age = age;
    }
    
    info(){
        console.log(this.name + " " + this.age);
    }
}
```
```js
var man = Person(
    "Old Man",
    1111
);

man.info();
```

### Оператор нулевого слияния
Аналог java.Optionals(). Возвращает значение первой переменной, если она не null, и значение второй переменной, если первая == null.

Есть случаи, когда она ведет себя одинаково:
```js
let a = null;
let b = 100;

console.log(a || b); // 100
console.log(a ?? b); // 100
```

Однако:
```js
let a = 0;
let b = 100;

console.log(a || b); // 100, т.к. 0 неявно привелся к булевскому типу false
console.log(a ?? b); // 0
```

***

### Всплывающие окна
#### Alert
```js
alert("Всплывающее окно браузера");
```
#### Confirm
```js
var responce = confirm("Подтвердить?");
if (responce) {
    alert("Подтверждено");
} else {
    alert("Не подтвержено");
}
```
#### Prompt
```js
prompt("Введите данные:"); // пустое поле для ввода
prompt("Введите возраст:", 20); // дефолтное значение в окне
```

Любое значение из prompt приводится к строке!

***

### Функции
```js
function foo(name){
    console.log("Hi, " + name + "!");
    return confirm("Привет тоже");
}

//... 

foo("world");
```
Аналогичное понятие скоупа функции.

Значения функции по умолчанию:
```js
function foo(a, b=100){
    console.log(`${a}`)
    return Number(a) + b
}
```

Внутри функции есть неявная переменная arguments, которая служит аналогом варарга:
```js
function logAll(){
    console.log(arguments)
}

// ... 

logAll("a", true, 0)
```

#### Лямбда-выражения
```js
var counter = 0;
setInterval(function () { 
    console.log(counter++)
}, 1000);
```

```js
let foo = (actionBefore, actionAfter) => {
    actionBefore()
    console.log("doing smth")
    actionAfter()
}

// ...

foo(
    () => console.log("before"),
    () => console.log("after")
)
```

### Работа с датами
```js
var date = new Date();
console.log(date.getDate());
```

метод Date.getMonth() возвращает месяцы, начиная с 0.

***

### Обработчик событий
#### В свойствах элемента:
Можно прописать что-то быстро в самом элементе:
```html
<button onclick='alert("Нажали на кнопку")'>Кнопка</button>
```

Вызов функции:
```html
<body>
    <button onclick="buttonClick()"></button>
    <script src="code.js"></script>
</body>
```

В code.js:
```js
function buttonClick(){
    alert("Нажали на кнопку");
}
```

Работа со свойствами элемента, вызвавшего обработчик:
```html
<button onclick="buttonClick(this)"></button>
<!--или-->
<button onclick="buttonClick(document.getElementById('submit-field'))"></button>
```

```js
function buttonClick(element){
    alert("Нажали на кнопку");
    element.innerHTML = "Нажатая кнопка";
    element.style.background = "red";
}
```

#### EventListener()
В документе js можно вызывать поиск элемента и к нему добавлять различные листенеры и функции обработки.
```js
document.getElementById("my-button").addEventListener("click", buttonClick);
```

#### Отключение стандартного поведения элемента
Например, если дефолтное поведение - перезагрузка страницы, можно это отключить:
```js
event.preventDefault();  // event - объект, например, форма
```

### Обращение к объекту по id и классу:
```html
<button id="our-button" title="button-title" class="button-class"></button>
```
```js
var ourButton = document.getElementById("our-button");
ourButton = document.getElementsByClassName("button-class");
console.log(ourButton.title);   // обращение к свойствам объекта
ourButton.title = "New title";
```

### Работа с формами
```html
<form id="main-form" onsubmit="return checkForm(this)">
<!--    какой-то код внутри для формы-->
    <label for="name">Name:</label>
    <input type="text" placeholder="Name" id="inputName" name="name">
    <span id="error-label"></span>
    <input type="submit" placeholder="Submit" id="submit-button">
</form>
```
У формы есть обработчик события onsubmit, который зависит от элемента с типом submit.

Если функция возвращает какое-то значение, то надо прописывать return + имя функции, чтобы страница не перезагружалась.

```js
function checkForm(form){
    var failMessage = "";
    
    var name = form.name.value; // обращение по свойству name
    console.log(name);
    if (name == ""){
        failMessage = "Заполните поле имени";
    } else if (name.length <= 2){
        failMessage = "Имя должно быть длиннее 2 символов";
    }
    
    if (failMessage != ""){
        var errorMessage = document.getElementById("error-label");
        errorMessage.text = failMessage;
        errorMessage.style.color = "red";
        return false
    } else {
        alert("Имя введено успешно");
        window.location("http:\\gotosite")
        return true
    }
}
```

***
[Next](objects.md)