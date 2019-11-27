import React from 'react'

export default class BindInput extends React.Component{
  constructor(){
    super()
    this.state={
      msg:'哈哈哈'
    }
  }
  render(){
    return <div>
      {/* input 绑定参数后必须提供onChang事件或者readOnly  */}
      <input type="text" ref='txt' style={{width:'100%'}} value={this.state.msg} onChange={(e)=>this.textChange(e)} />
      <h1>{this.state.msg}</h1>
    </div>
  }
  textChange =(e)=>{
    // console.log('变化了')
    // console.log(e.target.value)
    // console.log(this.refs.txt.value)
    const eVal=this.refs.txt.value
    this.setState({
      msg:eVal
    })
  }
}