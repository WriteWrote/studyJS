[Back](../README.md)
***
# Event Loop
Джс работает в одном потоке -> он выполняет одну операцию за раз.

За то, как выполняются в нем строки скрипта, отвечает Event Loop. 
Событийный цикл (Event Loop) создает очередь, куда добавляются задачи на выполнение.

### Callback hell
Если нужно выполнить по цепочке несколько вызовов (например, обращений к серверу) и продолжать работу на основе 
полученных данных (только в случае успешного их получения), то можно провалиться в ад коллбеков, когда в каждой функции
есть вложенная лямбда функция, которая обрабатывает успешное выполнение. Такой код сложно читать и поддерживать.

Поэтому изобрели промисы.

### Promise 
Промисы - надстройки для работы с асинхронным кодом. Они могут находиться в трех состояниях:
- pending - ожидание
- fulfilled - успешно выполнено
- rejected - неуспешно выполнено

Промис после создания может поменять свое состояние только один раз - на fulfilled или rejected.

Основные методы промисов:
- then() - обрабатывает fulfilled-состояние
- catch() - обрабатывает rejected-состояние

Создание объекта промиса:
```js
const promise = new Promise((resolve, reject) => {
    console.log("Pending")
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Promise fulfilled")
        } else {
            reject("Promise rejected")
        }
    }, 3000)
})

promise
    .then((value) => {
        console.log(`${value}`);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Pending done");
    })

console.log("There is promise")
```

Вывод в консоли будет выглядеть примерно так:
```
Pending
There is promise
Promise rejected / Promise fulfilled
Pending done
```

Возвращаясь к предыдущему примеру, ад вложенных коллбеков превращается в вызов чепочек .then() промисов, 
плюс появляется функционал обработать ошибку через .catch() и закрыть соединение через .finally().

### Async & Await
Для функций, которые работают с промисами, есть отдельные ключевые слова `async` и `await`.

`async` добавляется перед функцией и показывает, что она вернет промис:

```js
async function getSmth(){
    return "Hello world!"
}

getSmth()
    .then((smth) => {
        console.log(smth)
    })
```

`await` заставляет джс дождаться выполнения промиса и только потом продолжить работу:

```js
async function getSmth(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Hello world!")
        }, 3000)
    })
}

console.log("Before promise")

let smth = await getSmth()
console.log(smth)

console.log("After promise")
```

Вывод в консоли будет примерно таким:
```
Before promise
Hello world!
After promise
```

В данном случае асинхронный код принудительно дождался завершения, в отличие от предыдущего примера с async. 

Надо отметить, что await будет работать только если его вызов внутри скоупа функции либо когда этот скрипт является модулем.

***
[Next](modules.md)