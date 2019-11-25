// import React，{Component} from 'react'
import React from 'react'
//class 创建的组件有自己的私有数据和生命周期函数， function创建的组件只有props
class List extends React.Component{
  constructor(){
    //继承了React.Component 必须运行super()
    super()
    //调用super之后才可使用this
    this.state= {
      msg:'大家好，我是class创建的组件'
    }
  }
  //render 渲染 虚拟DOM 实例方法
  //在class 创建的组件中，如果想使用外界传过来的props参数，不需要接收，直接通过this.props[name]即可使用
  render(){
    return  <div className='listItem'>
              {this.props.name}
              <h5>{this.state.msg}</h5>
            </div>
  }
}

export default List