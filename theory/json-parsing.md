[Back](../README.md)
***
# JSON-parsing
Для работы с JSON-форматом есть отдельный глобальный объект: `JSON`.

```js
let jsonStr = JSON.stringify(object)
let parsedObject = JSON.parse(jsonStr)
```

JSON.stringify() не учитывает методы и свойства, у которых значение == undefined. Он их просто игнорирует.

***
[Next](error-handling.md)