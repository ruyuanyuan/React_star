const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template:path.resolve(__dirname,'./src/index.html'),
  filename:'index.html'
})

module.exports = {
  mode:'development', //development puduction
  devServer:{
    port:3000,
    open:true,
  },
  plugins:[
    htmlPlugin
  ]
}