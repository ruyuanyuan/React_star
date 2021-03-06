import React from 'react'
import ListItem from './ListItem'
import BtnEvent from '@/components/BtnEvent'
// import BindInput from '@/components/BindInput'
import cssObj from '@/css/cmtlist.scss'
console.log(cssObj)
class CmtList extends React.Component{
  constructor(){
    super()
    this.state = {
      CommentList:[
        {id:1,user:'张三',content:'猜猜我是谁'},
        {id:2,user:'张上',content:'啥脚手架按江苏省'},
        {id:3,user:'王辉',content:'莎婚纱是上'},
        {id:4,user:'李太好',content:'数据萨哈还是'},
        {id:5,user:'白云湖',content:'砂夹石静安寺'},
        {id:6,user:'唐山',content:'洒水哈哈上海市'}
      ]
    }
  }
  // render(){
  //   return <div>
  //           <h2 style={{color:'red',fontSize:'35px',fontWeight:200,textAlign:'center'}}>这是评论列表组件</h2>
  //           {this.state.CommentList.map(item=><ListItem {...item} key={item.id}></ListItem>)}
  //       </div>
  // }
  render(){
    return <div>
            <h2 className={cssObj.title +' '+ 'text'}>这是评论列表组件</h2>
            <BtnEvent></BtnEvent>
            {/* <BindInput></BindInput> */}
            {this.state.CommentList.map(item=><ListItem {...item} key={item.id}></ListItem>)}
        </div>
  }
}

export default CmtList