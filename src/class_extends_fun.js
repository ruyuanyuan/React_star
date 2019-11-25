// 父类  相当于原型对象
class Person{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  sayHello(){
    console.log('大家好')
  }
}

//子类-美国人
class American extends Person{
  constructor(name,age){
    //1.为啥要调用super  2.super是什么 3.为什么调用super后name,age变为undefind
    //1.子类 extends 继承了父类，必须优先调用 super 必须在第一行，语法规范
    //2.super是父类的构造器，子类的super就是父类中constructor的引用
    //3 super 没有传值
    super(name,age)
  }
}

//子类-中国人
class Chinese extends Person{
  constructor(name,age,IDNumber){
    super(name,age)
    //独有不可挂载到父类
    this.IDNumber= IDNumber
  }
}
const a1 = new American("Jack",20)
console.log(a1)
a1.sayHello()
const c1 = new Chinese('张三',24,'140512121223152X')
console.log(c1)
c1.sayHello()