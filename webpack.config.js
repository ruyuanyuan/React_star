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
  ],

  module:{
    rules:[
      {test:  /\.jsx|.js$/, use:'babel-loader',exclude:/node_modules/},
      {
        test:/\.css/,
        use:[
          'style-loader',
          {
            loader:'css-loader', //css loader启用模块化 加？modules
          }
        ]
      },
      {
        test:/\.scss/,
        use:[
          'style-loader',
          {
            loader:'css-loader', //css loader启用模块化 加？modules
            options:{
              modules:{
                localIdentName: '[path][name]-[local]-[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {test:  /\.jpg|.png|.svg|.gif|.ttf|.woff2|.eot$/, use:'url-loader'},
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json'],
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  
}