function Person(name,age){
  // 实例属性
  this.name=name
  this.age= age
}

// 实例方法
Person.prototype.say = function (){
  console.log('沙海沙河啥啥啥')
}
// 静态属性
Person.info = 'aaa'
// 静态方法
Person.show = function (){
  console.log('人静态方法')
}


const p1 = new Person('王多多',18)
console.log(p1)
p1.say()

console.log('============================================================')
class Animal{
  //构造器的作用，实例化类是 先执行 构造器中的代码
  constructor(name,age){
    // 实例属性
    this.name = name
    this.age = age
  }
  jiao(params) {
    console.log('动物实例方法')
  }
  // 静态属性
  static info = 'eee'
  //静态方法
  static show(){
    console.log('动物静态show方法')
  }
}

const a1 = new Animal('狗狗',3)
console.log(a1)
a1.jiao()
