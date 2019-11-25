function Person(name,age){
  // 实例属性
  this.name=name
  this.age= age
}

const p1 = new Person('王多多',18)
console.log(p1)
// 通过实例访问到的属性实例属性
//通过构造函数访问到的属性 静态属性
console.log(p1.name)

console.log('============================================================')
class Animal{
  //构造器的作用，实例化类是 先执行 构造器中的代码
  constructor(name,age){
    // 实例属性
    this.name = name
    this.age = age
  }
  // 静态属性
  static info = 'eee'
}

const a1 = new Animal('狗狗',3)
console.log(a1.info)