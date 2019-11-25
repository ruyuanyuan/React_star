// 父类  相当于原型对象
class Person{
  constructor(name,age){
    this.name = name
    this.age = age
  }
}

//子类-美国人
class American extends Person{
  // constructor(){

  // }
}

const a1 = new American("Jack",20)

console.log(a1)

//子类-中国人
class Chinese extends Person{
  // constructor(){

  // }
}

const c1 = new Chinese('张三',24)
console.log(c1)