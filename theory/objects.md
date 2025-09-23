[Back](../README.md)
***

# Objects

Объекты создаются неявно и явно:
```js
let object = {}
let object2 = new Object()
```

Память выделяется в обоих случаях.

```js
let object = {
    name: "Name",
    age: 18,    // висячая запятая
    
    sayHello: () => console.log("Hello")
}

console.log(object['name'])
object.sayHello()
```

### Проверка существования свойства у объекта:
```js
'name' in object
```

### Перебор свойств из объекта:
```js
for (const propertyName in user){
    console.log(`${propertyName} ${user[propertyName]}\n`)
}
```

Также:
```js
Object.keys(object)
```

### Клонирование объекта:
Все свойства и значения свойств объекта obj1 (и последующих) будут присвоены целевому объекту obj2.
```js
const ob1 = {name: 'Name'}
const obj2 = Object.assign({}, obj1)

// spread-operator
const obj3 = { ...obj1 }
```

Подробная работа с параметрами: https://youtu.be/t_B7hl1W65E?list=PL0MUAHwery4qn4Y27iUxmzC-JiauX7vSL

### THIS
Существует глобальный this, который ссылается на всю **страницу**.

Однако если вызвать this в объекте, то внезапно оно укажет на объект.

Также если вызвать this в стрелочной функции оно также укажет на глобальный контекст. Поэтому вместо этого можно использовать function() либо сокращенную запись объявления метода foo() {}

# Класс
### Члены классов:
```js
class Person {
    // дефолтные условно-приватные поля класса
    planet = "Earth"
    country     // так тоже можно, будет undefined 
    // также условно-приватные поля могут обозначаться через нижнее подчеркивание, если оно не упоминается в корне класса:
    // this._country
    
    // приватные свойства с нижним подчеркиваением будут доступны снаружи класса
    // поэтому можно использовать по-настоящему приватные поля и методы через решетку:
    #city = null
    
    // статическая переменная
    static documents = "Passport"
    
    // статический метод
    static changeDocument(){
        // do smth
    }

    // конструктор класса
    // также конструктором класса будет считаться любой метод, который назван с большой буквы
    constructor(name, age) {
        this.name = name    // создание атрибутов класса как в питоне
        this.age = age
    }

    logAge() {
        console.log(this.age)
    }

    // сеттер
    set country(value) {
        this.country = value
    }

    // геттер
    get country() {
        return this.country
    }
    
    // условно-приватный метод
    // к нему по-прежнему можно обращаться извне класса, но нижнее подчеркивание "показывает", что это приватный метод
    // внутри класса вызывать его надо так: this._conditionallyPrivateMethod
    _conditionallyPrivateMethod(){
        // do smth
    }
    
    // сигнатура по-настоящему приватного метода будет доступна снаружи, но код будет кидать ошибку
    #realPrivateMethod(){
        this.#city // do smth
    }
}

const user1 = new Person("Person", 20)
user1.logAge()
console.log(Person.documents)
Person.changeDocument()
```

### Наследование классов:
```js
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sleep() {
        console.log("Sleeping")
    }
}

// наследуемый класс
class Developer extends Person {
    // переопределение конструктора
    constructor(name, age, lang) {
        super.constructor(name, age)
        this.lang = lang
    }

    // новый метод
    writeCode() {
        console.log(`Coding in ${this.lang}`)
    }

    // переопределение старого метода
    sleep() {
        super.sleep() // вызов метод родителя
        console.log("Dreaming about code")
    }
}

let person = new Person("Person", 20)
let coder = new Coder("Coder", 30)
```

***
[Next](types_extended.md)