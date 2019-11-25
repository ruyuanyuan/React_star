import React from 'react'
import ReactDom from 'react-dom'

// const mydiv = React.createElement('h1',{id:'myh1'},'这是一个h1标签')
const h1 = <h1>我是h1</h1>
const aa = 10
const arrs = ['大连','东北','小孩','冻屁股']

arrs[1]='测试'

const newArr=[]
arrs.forEach(item=>{
   const temp=<h5>{item}</h5>
   newArr.push(temp)
})

//bable转化标签
const mydiv = 
<div id='mydiv' className='qqgit' title='我的div'>
  {aa*8}
  <hr/>
  {h1}
  <hr/>
  {arrs}
  <hr/>
  {newArr}
{arrs.map(item=><h1>{item}</h1>)}
</div>

ReactDom.render(mydiv,document.getElementById('app'))