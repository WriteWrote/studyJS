[Back](../README.md)
***
# Методы для работы с коллекциями
## Списки ака массивы
Перебор массива:

```js
let arr = [1, 2, 3]

for (let i = 0; i< arr.length; i++){
    // do smth
}

arr.forEach((value, index, array) => {
    // do smth
})

arr.forEach(function (value, index, array) {
    // do smth
})
```

Поиск индекса элемента с простой фильтрацией:
```js
arr.findIndex(function (value) { 
    if (value.property === "PropertyVal"){
        return true
    }
})

// или короче
arr.findIndex((value) => value.property === "PropertyVal")
```

Проверка на соответствие условию:
```js
arr.some((value) => value.property === "PropertyVal")   // хотя бы один элемент соответствует условию
arr.every((value) => value.property === "PropertyVal")   // все элементы соответствуют условию
arr.find((value) => value.property === "PropertyVal")   // найти первый элемент по условию
```

Фильтрация массива:
```js
arr.filter((value) => value.property === "PropertyVal") 
```

Маппинг массива:
```js
let newArr = arr.map((value) => {
    // do smth
    return `${value.property.name} = ${value.property}`
})
```

Полная нотация Reduce-функции:
```js
arr.reduce((accumulator, value, index, array) => {
    return accumulator + value // etc
}, 0)
```

Пример:
```js
let arr = [1, 2, 3]
let sum = arr.reduce((sum, value) => {
    sum + value
}, 0)
```

Метод reduceRight() делает то же самое, только справа-налево.

Обращение массива мутирует исходную сущность:
```js
arr.reverse()
```

Сортировка массива также мутирует исходный массив И воспринимает все объекты, как строки:
```js
arr.sort() // дефолтная сортировка по возрастанию
arr.sort((a, b) => {a - b}) // костыль для сортировки чисел
```

## Map
```js
let mapa = new Map([
    [1, 'Num'],
    ["1", "Str"],
])

mapa.set(2, "Num")

mapa.get(1) // 'Num'
mapa.has('1') // "Str"
mapa.delete(1)
mapa.clear()

console.log(mapa.size) // 0
```

Для мап в джс есть функции keys(), values(), entries(), но для их перебора надо использовать другой вариант сокращенного форыча:
```js
for (const key of mapa.keys()){
    // do smth
}
```

Структура callback для мапы:
```js
mapa.forEach((value, key, map) => {
    // do smth
})
```

Преобразование объекта в коллекцию и обратно:
```js
const obj = {
    name: "Name",
    age: 30
}

let mapa = new Map(Object.entries(obj))
let newOnj = Object.fromEntries(mapa)
```






***
[Next]()