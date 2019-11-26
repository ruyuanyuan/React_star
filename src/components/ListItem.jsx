import React from 'react'
import cssObj from '@/css/cmtitem.scss'
console.log(cssObj)
class ListItem extends React.Component{
  constructor(){
    super()
  }
  // render(){
  //   return <div style={{border:'1px dashed #ccc',margin:'10px',padding:'10px',boxShadow:'1px 2px 10px #999'}}>
  //     <h3 >评论人： {this.props.user}</h3>
  //     <p>评论内容：{this.props.content}</p>
  //   </div>
  // }
  render(){
    return <div className={cssObj.content}>
      <h3 className={cssObj.title +' '+ 'text'}>评论人： {this.props.user}</h3>
      <p className={cssObj.doc}>评论内容：{this.props.content}</p>
    </div>
  }
}
export default ListItem