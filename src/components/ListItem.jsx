import React from 'react'

class ListItem extends React.Component{
  constructor(){
    super()
  }
  render(){
    return <div>
      <h1>评论人： {this.props.user}</h1>
      <h3>评论内容：{this.props.content}</h3>
    </div>
  }
}
export default ListItem