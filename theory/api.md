[Back](../README.md)
***
# API calling in JS
Можно работать с запросами через обработку асинка либо через промисы.
```js
fetch("https://url", {
        method: 'post',
        body: JSON.stringify("{}"),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        credentials: 'include'
    })
    .then(response => response.json())
    .then(json => console.log(json))
```

При выполнении запроса возвращается объект response, содержащий в себе все привычные поля.

credentials: 'include' включает отправку куков на бек.




***
[Next]()