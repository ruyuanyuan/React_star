import React from 'react'

export default class BtnEvent extends React.Component{
  constructor(){
    super()
    this.state={
      msg:'哈哈哈'
    }
  }
  render(){
    // return <button onClick={()=>console.log(111)}>按钮</button>
    return <div>
      <button onClick={()=>this.btnClick('测试爱三十三年')}>按钮</button>
      <h1>{this.state.msg}</h1>
    </div>

  }
  btnClick = (aa)=>{
    //setState只会更新数据，不会覆盖
    this.setState({
      msg:aa
    },()=>{
      console.log(this.state.msg)
    })
    console.log(this.state.msg)
    // this.setState 是异步的 直接this.state.msg 取不到

  }
}