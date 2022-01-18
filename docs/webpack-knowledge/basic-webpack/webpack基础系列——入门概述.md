## webpack是什么？
![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180125%2F1f5e8e881e364ef5b2f37e14cdbae7ba.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618390077&t=5f583fd7b2ead56f2fed29bc520159f6)

**webpack** 是一款**前端构建工具**，主要功能是对模块打包，所以也叫**模块打包器**；它基于模块间的依赖关系，按照一定的规则将模块打包合并为一个** JavaScript **文件;

---

## webpack 五大核心概念

1. Entry
   - 指定项目的的入口文件，告诉 webpack 基于哪个文件来分析依赖关系进行打包
2. Output
   - 告诉 webpack 打包后的文件输出存放在哪个目录
3. Loader
   - 由于 webpack 只能处理 JavaScript 文件和 JSON 文件，而其它的文件如：CSS 文件和 HTML文件则无法处理，所以 webpack 需要对应的 Loader进行处理
4. Plugin
   - Plugin 可以做更多的事情，如 代码压缩 ，清理文件夹，复制资源等，可以理解为 Plugin 是增强，这些都是 Loader 不能做到的
5. Mode
   - webpack 分为 2 个模式，development 模式和 production 模式

## 一份基础的 webpack 配置代码

```javascript
// 从node内部导入用来拼接绝对路径的resolve的方法(使用commonjs语法)
const { resolve } = require('path')

// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // webpack的5大核心配置属性
  // 1.入口文件
  entry: './src/index.js',
  // 2.输出文件
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 如果要想进行分类，就要在文件名前面加上一个js文件夹
    // filename: 'js/bundle.js',
    // 输出路径:一般是绝对路径
    // __dirname: nodejs的变量，代表当前文件目录的绝对路径
    path: resolve(__dirname, 'bundle')
  },
  // 3.loader的配置
  module: {
    rules: [
      // 详细的loader配置
      // 不同的文件需要配置不同的loader
      {
        // test 匹配的文件（正则表达式，匹配以.css结尾）
        test: /\.css$/,
        // use 使用哪些loader进行处理
        use: [
          // use数组中的执行顺序：从右到左，从下到上
          // 创建style标签，将js中的样式资源添加到head标签中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要安装less和less-loader包
          'less-loader'
        ]
      },
      {
        // 配置图片loader
        test: /\.(png|jpg|gif|jpeg)$/,
        // 配置一个loader时，用loader属性。配置多个loader时，使用use
        // 下载url-loader和file-loader
        loader: 'url-loader',
        // options 对图片进行一些选择性配置
        options:{
          // limit 限制图片大小,
          // 如果图片小于8Kb,就会被base64处理
          //    优点:减少请求数量(减轻服务器压力)  缺点:图片体积会更大(文件请求速度会更慢)
          // 大于限制值时，就会提示安装一个file-loader
          //    安装完之后再打包，会对大于limit的图片进行打包，之后会以哈希值(防止名字重复)命名
          limit: 8 * 1024,
          // 问题:因为url-loader默认使用ES6模块化解析,而html-loader引入图片是commonjs模块
          // 解析时会出问题: [object Module]
          // 解决:关闭url-loader的ES6模块化,使用commonjs解析
          esModule:false,
          // 给图片进行重命名
          // [hash:10] 取图片hash值的前10位
          // [ext] 取文件的原来的扩展名
          name: '[hash:10].[ext]',
          // 如果想让图片放在同一个文件夹中，使用outputPath
          outputPath: 'imgs'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
        loader: 'html-loader'
      },
      // 打包其它资源（除了js、html、css资源以外的资源）
      {
        // exclude 排除css、js、html资源
        exclude: /\.(js|html|css|less)$/,
        loader: 'file-loader'
      }
    ]
  },

  // 4.plugins的配置
  plugins: [
    // 详细的plugin配置
    // html-webpack-plugin
    // 功能：默认创建一个空的html文件，自动引入打包输出的所有资源（js、json）
    // 需求：需要有结构的html文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（js、json）
      template: './src/index.html'
    })
  ],

  // 5.mode配置(模式配置)
  mode: 'development' // 开发模式
  // mode: 'production' // 生产模式
}
```




