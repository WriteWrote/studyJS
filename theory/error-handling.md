[Back](../README.md)
***
# Error handling
Синтаксис классический:

```js
try {
    // do smth
} catch (error) {
    // catch exception
    // error содержит: name, message, stack
} finally {
    // do smth
}
```

Однако этот блок не может поймать асинхронную ошибку. 

Выкидывание исключений:
```js
throw 'Error message!'

// or 

class Exception {
    constructor(msg){
        this.msg = msg
    }
}

// ...

throw new Exception('Error message')

// or

throw new Error("Error message")
```

Распространенные типы ошибок:
- Error()
- TypeError()
- SyntaxError()
- RangeError()

***
[Next](event-loop.md)