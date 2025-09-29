[Back](../README.md)
***
# Модули в JS 
Объявление файла js как модуля выполняется в html:
```html
<script src="script.js" type="module"></script>
```
Модули имеют собственную область видимости переменных.

Для того, чтобы сделать видимыми снаружи переменные, можно использовать экспорт и импорт:

foo.js
```js
let foo = "Hello world"
let bar = "Private bar"
let tee = "Teee"

export default function init(){
    // do smth
}

export {
    foo,
    tee
}
```

bar.js
```js
import { foo } from "./bar.js"
import init from ".bar.js"

let bar = "Bar"
```



***
[Next]()