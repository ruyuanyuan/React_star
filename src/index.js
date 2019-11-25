import React from 'react'
import ReactDom from 'react-dom'
// import './es6_class_static_props'
// import './es6_class_static_fun'
// import './class_extends'
// import './class_extends_fun'
import List from './components/List'

const user1={
  name:'张三',
  age:18
}
const user2={
  name:'王五',
  age:28
}
ReactDom.render(<div>
  {/* 实例化组件 */}
  <List {...user1}></List>
  <hr/>
  <List {...user2}></List>
</div>,document.getElementById('app'))