### webpack系列——生产环境下的CSS代码优化

> **这次我们来学习一下项目开发中，生产环境下的CSS代码优化，那么我们应该从哪些方面去考虑呢？**

1. 单文件入口的情况下，我们的 CSS 资源会打包到 JS 文件中，此时，如果我们的 CSS资源太大，那就会大大增加 bundle.js 文件的体积，从而在页面加载时，增加首屏加载的时间，**所以我们如何在打包的时候分离出 CSS 代码呢?**
2. 在开发中，我们会使用一些比前卫的 CSS 属性，比如 `display:flex`这样的属性，那当我们的代码运行在低版本浏览器运行时，可能会出现浏览器无法识别的CSS属性，**所以我们如何在打包的时候对 CSS 代码做兼容呢？**

---

针对上述的问题一，我们可以做2个事情：

- 打包时提取 CSS 代码到单独的文件中，并自动引入到入口的HTML文件中;
- 打包时压缩 CSS 代码;

提取 CSS 代码需要使用到插件：mini-css-extract-plugin,压缩CSS代码需要使用插件：OptimizeCssAssetsWebpackPlugin，使用方式如下：

```javascript
// 先安装插件
npm i mini-css-extract-plugin optimize-css-assets-webpack-plugin -D

// 提取 CSS 代码到单独的文件中，并且自动引入打包后的 HTML 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩 CSS 代码
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
 module:{
    rules:[
        {
            test: /\.css$/,
            // 使用提取 CSS 代码到单独文件的 loader
          	MiniCssExtractPlugin.loader
        }
      ]
   },
    plugins:[
        // 实例化提取CSS代码的插件
    	new MiniCssExtractPlugin({
      		filename: "[name].css"
   			 }),
        // 压缩 CSS 代码的插件
    	new OptimizeCssAssetsWebpackPlugin()
    ]
}
```
配置好后，即可对CSS代码进行提取和压缩啦。

---

针对上述问题二，我们同样可以做2个事情：

- 对CSS代码做兼容处理，比如自动为需要处理的CSS属性添加前缀
- 指定需要做兼容的浏览器

需要使用到的插件有：postcss-loader 和 postcss-loader-env，webpack.config.js 如下配置：

```javascript
// 先安装插件
npm i postcss-loader postcss-loader-env -D

module.exports = {
 module:{
    rules:[
          // 使用提取 CSS 代码到单独文件的 loader
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            // 使用 postcss-loader
            loader: "postcss-loader"
          }
      ]
   }
}

```

需要注意的是：

- postcss-loader 需要放到 css-loader 和 MiniCssExtractPlugin.loader 之后使用

- 需要在根目录创建一个名字为 postcss.config.js 文件，在其中引入postcss-preset-env，postcss.config.js 如下配置：

  ```javascript
  module.exports  = {
    plugins:[
      // 引入 postcss-preset-env 插件
      require("postcss-preset-env")
    ]
  }
  ```

- 需要在 package.json 中指定 browserlist 属性，并对开发环境和生产环境做不同的配置，package.json 如下配置：

  ```
  {
      /* 
       * 需要对 CSS 代码做兼容处理，需要做2件事情：
       * 1. 需要在根目录新建 postcss.config.js 文件，配置plugins 并 使用 require("postcss-preset-env")
       * 2. 需要在 package.json 中配置 browserslist 属性
       *   "browserslist": {
       *     // 开发环境
       *     "development": [
       *                       "last 1 chrome version",  // 兼容谷歌浏览器最近一个版本
       *                       "last 1 firefox version", // 兼容火狐浏览器最近一个版本
       *                       "last 1 safari version"   // 兼容苹果浏览器最近一个版本
       *                    ],
       *     // 生产环境
       *     "production": [
       *                         ">0.2%",                // 兼容全球市场使用率超过 0.2% 的浏览器
       *                         "not dead",             // 不是未被使用的浏览器
       *                         "not op_mini all"       // 不是 Opera mini 浏览器
       *                   ]
       */
    "browserslist": {
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ],
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ]
    }
  }
  ```
到此我们的 CSS 代码就能够做到兼容处理啦，打包后的代码会自动为需要做兼容的CSS属性添加特定浏览器的前缀。

---

  webpack.config.js 详细代码如下：

  ```javascript
  const HtmlWebpackPlugin = require("html-webpack-plugin")
  // 提取 CSS 代码到单独的文件中，并且自动引入打包后的 HTML 文件
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  // 压缩 CSS 代码
  const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
  
  const { resolve } = require("path")
  
  module.exports = {
    entry: "./main.js",
    output: {
      filename: "[name].js",
      path: resolve(__dirname, "./build")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // 使用提取 CSS 代码到单独文件的 loader
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              /*
              * 需要对 CSS 代码做兼容处理，需要做2件事情：
              * 1. 需要在根目录新建 postcss.config.js 文件，配置plugins 并 使用 require("postcss-preset-env")
              * 2. 需要在 package.json 中配置 browserslist 属性
              *   "browserslist": {
              *     // 开发环境
              *     "development": [
              *                       "last 1 chrome version",  // 兼容谷歌浏览器最近一个版本
              *                       "last 1 firefox version", // 兼容火狐浏览器最近一个版本
              *                       "last 1 safari version"   // 兼容苹果浏览器最近一个版本
              *                    ],
              *     // 生产环境
              *     "production": [
              *                         ">0.2%",                // 兼容全球市场使用率超过 0.2% 的浏览器
              *                         "not dead",             // 不是未被使用的浏览器
              *                         "not op_mini all"       // 不是 Opera mini 浏览器
              *                   ]
              */
              // 使用 postcss-loader
              loader: "postcss-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "home.html"
      }),
      // 实例化提取CSS代码的插件
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      // 压缩 CSS 代码的插件
      new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: "production"
  }
  
  ```

