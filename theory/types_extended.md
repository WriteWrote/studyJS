[Back](../README.md)
***
# Полезные методы типов данных в JS
## Числовые типы

Округление числа:
```js
let price = 9.9812
let roundedPrice = price.toFixed(2) // 9.99
let intPrice = price.toFixed() // округление до 10

Math.round(price) // 9 округляет до ближайшего целого
Math.floor(price) // 9 округляет вниз до ближайшего целого
Math.ceil(price) // 10 округляет вверх до ближайшего целого
```

Безобразие:
```js
2..toFixed() // 2
(2.02).toFixed() // 2
2..toFixed(2) // конвертирование в строку !!!!!!!!!!!!!!!!!!!! "2.00"
```

Разница между toFixed() и toPrecision():
```js
let num = 100.111
num.toFixed(4) // 100.1110
num.toPrecision(4) // 100.1
```

Перевод числа в строку:
```js
let num = 100

num.toString() // "100"
num.toString(2) // "1100100" - в двоичной системе счисления (от 2 до 36)
```

Перевод строки в число:
```js
Number("100")
Number("100px") // ошибка
parseInt("100px") // 100
parseInt("100.5px") // 100
parseFloat("100.5px") // 100.5

// если перед первым числом в строке стоит символ кроме пробела, то parseInt() и parseFloat() вернут NaN 
```

Генерация случайного числа:
```js
Math.random() // дробное случайное число от 0 до 1
```

Генерация случайного целого числа в диапазоне: https://gist.github.com/kerimdzhanov/7529623

Модуль числа:
```js
Math.abs(-2) // 2 как число
```

Возведение в степень:
```js
Math.pow(2, 10) // 1024
2 ** 10 // 1024
```

Квадратный корень:
```js
Math.sqrt(16)
Math.cbrt(27)
```

Минимальное и максимальное число в переданном потоке значений:
```js
Math.min(1, -1, 2)
Math.max(2, 1, -1)
```

## Строковые типы
Методы для строк не мутируют исходную строку, они возвращают новую строку с примененным методом.

Базовый функционал:
```js
let str = "String"
let emptyStr = ""

str.length
str[1] // 't'
str.at(-1) // последний символ строки

str.split("t") // ["S", "ring"]
```

Поиск подстроки работает по дефолту и с передачей вторым аргументом индекса (`str.includes("ing", 2)`):
```js
str.indexOf("ing") // 3, возвращает -1 при отсутствии подстроки
str.includes("ing") // true

str.startsWith("Str") // true
str.endsWith("Str") // false
```

Выбор подстроки:
```js
str.substring(0, 4) // небезопасно
str.slice(0, 4)
str.slice(-6, -3)
```

Замена подстроки может работать как со строками, так и с регулярными выражениями:
```js
str.replace("Str", "Num") // заменяет первое вхождение
str.replaceAll("Str", "Num") // заменяет все вхождения
str.replace(/Str/gi, "Num") // регулярное выражение
```

Изменение регистра:
```js
str.toLowerCase()
str.toUpperCase()
```

Обрезка пробелов:
```js
str.trim()
str.trimStart()
str.trimEnd()
```

Копирование строки:
```js
str.repeat(3)
```



***
[Next]()