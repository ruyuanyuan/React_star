import React from 'react'
//组件必须有return 值  vue和react组件中的 props 只读
export default function Hello(props){
  console.log(props)
return <h3>{props.name} {props.age}</h3>
}