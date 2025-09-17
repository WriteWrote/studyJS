console.log("Hello World!");

class Person {
  constructor(
    name,
    age
  ){
    this.name = name;
    this.age = age;
  }

  function info(){
    console.log(this.name + " " + this.age);
  }
}