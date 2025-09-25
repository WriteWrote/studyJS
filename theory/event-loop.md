[Back](../README.md)
***
# Event Loop
Джс работает в одном потоке -> он выполняет одну операцию за раз.

За то, как выполняются в нем строки скрипта, отвечает Event Loop. 
Событийный цикл (Event Loop) создает очередь, куда добавляются задачи на выполнение.

### Callback hell

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
```











***
[Next](event-loop.md)