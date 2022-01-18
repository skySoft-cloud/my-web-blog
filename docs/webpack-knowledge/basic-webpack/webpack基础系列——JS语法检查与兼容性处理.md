## webpack系列——JS语法检查与兼容性处理

####  &#x1F449;JavaScript 语法检查

> 在实际项目开发中，一般都是由多人协作来完成开发，那不可避免的我们会有一些编码风格上的问题，编码风格不一致会带来以下问题：

- 合并代码时，由于代码风格不同，可能冲突会更多，合并代码需要更多时间；
- 开发者以外的人进行代码 review 时，可能需要更多的时间看代码；
- 一些不规范的代码写法，导致隐藏的 BUG；



> 那么为了提高效率，我们有哪些方案来统一团队的编码风格呢？

- 制定项目的编码规范让大家遵守；
- ⭐ 利用工具强制性让大家编码风格一致；



> 那这次的 webpack 系列中，我们来一起学习使用 JavaScript 语法检查工具，在 webpack 中配置 eslint 语法检查，根据下面步骤：

1. 使用 eslint 需要安装的包：`npm i eslint eslint-loader -D`

2. - 使用当前比较流行的 eslint 规则开源库，`eslint-config-airbnb-base`,库详细介绍请看 [Airbnb]([javascript/packages/eslint-config-airbnb-base at master · airbnb/javascript · GitHub](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/))；
   - 使用 airbnb base 需要安装的包：`npm i eslint-config-airbnb-base eslint-plugin-import -D`

3. 设置检查规则， ⭐ package.json 中 eslintConfig 中设置;

   ```javascript
   {
       "eslintConfig": {
           // Eslint 规则继承 eslint 规则开源库 airbnb-base
           "extends": "airbnb-base"
       }
   }
   ```

4. webpack 中配置 eslint loader

   ```javascript
   module.exports = {
       ...
       
       module: {
           rules: [
               /*
               * 语法检查：eslint eslint loader
               * 注意：只检查自己的源代码，第三方库不用检查
               */
               {
                   test: /\.js$/,
                   // 排除第三方库
                   exclude: /node_modules/,   
                   loader: "eslint-loader",
                   options: {
                       // webpack 编译时自动修复 eslint 的错误
                       // fix: false 时，如果有语法错误，编译会通不过，直接报错
                       fix: true
                   }
               }
           ]
       }
       
       ...
   }
   ```

   ***

   #### &#x1F449;JavaScript 兼容性处理

   > JavaScript 代码现在已经有 ES5、ES6 - ES10 规范了，那其实有些高级语法，在低版本的浏览器中是不兼容的，所以做好 JavaScript 代码的兼容处理尤为重要，那 webpack 配置中我们应该做呢？

其实 webpack 中本质是使用babel-loader实现对 JavaScript 代码的编译，将高级语法转为兼容更低版本浏览器的语法，那么处理 JavaScript 兼容有 3 种方式：

- 前提条件，安装相关库：`npm install babel-loader @babel/core @babel/preset-env core-js`

- 兼容方案一, 使用 ⭐ babel-loader + @babel/preset-env：

  ```javascript
  module.exports = {
      ...
      
      module: {
          rules: [
              /*
              * js兼容性处理：babel-loader @babel/core @babel/preset-env
              * 只能做基本的兼容性处理 --> @babel/preset-env，如 let const 这种基本语法的兼容，但 Promise 等高级语法做不到兼容
              */
              {
                  test: /\.js$/,
                  // 排除第三方库
                  exclude: /node_modules/,   
                  loader: "babel-loader",
                  options: {
                      // 预设 babel 做怎样的 JavaScript 兼容处理
                      presets:[
                          ["@babel/preset-env"]
                      ]
                  }
              }
          ]
      }
      
      ...
  }
  ```

  

- 方案一无法对高级语法做兼容，所有有了我们的兼容方案二，使用 ⭐ babel-loader + @babel/polyfill：

  - 该方案仅需要在方案一的基础上，在自己的入口 JS 文件顶部引入即可，如下面是我们的项目入口 ⭐ main.js 文件：

  ```javascript
  import "@babel/polyfill";
  
  const add = function (x,y){
  	return x * y;
  }
  // 这里的 Promise 代码在 webpack 编译后将会被转化为兼容低版本浏览器的代码
  const promise = new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('定时器执行了~')
    },2000)
  })
  
  export default {
      add,
      promise
  };
  ```

  方案二会把所有的 JavaScript 兼容性代码引入文件中，导致编译后的文件体积太大~；

  

- 兼容方案三，使用 ⭐ babel-loader + core-js：

  - 结合上述方案一和方案二的问题，我们方案三将做到需要做兼容的才做: ⭐ **按需加载**

```javascript{143-184}
module.exports = {
    ...
    
    module: {
        rules: [
            /*
            * 需要做兼容的才做 --> @babel/preset-env + core-js
            */
            {
                test: /\.js$/,
                // 排除第三方库
                exclude: /node_modules/,   
                loader: "babel-loader",
                options: {
                    // 预设 babel 做怎样的 JavaScript 兼容处理
                    presets:[
                        ["@babel/preset-env",{
                            options:{
                                // 按需加载
                                useBuiltIns: "usage",
                                // 指示 core-js 版本
                                corejs:{
                                    version: 3
                                },
                                 // 指定兼容性做到浏览器哪个版本
                                targets:{
                                       "chrome": "60",
                                       "firefox": "60",
                                       "ie": "9",
                                       "safari": "10",
                                       "edge": "17"
                                }
                            }
                        }]
                    ]
                }
            }
        ]
    }
    
    ...
}
```

&#x1F44D; 方案三即做到了按需加载，减小了编译后的文件体积，从而也做到了对高级语法的兼容；

---

**以上就是我们的 JavaScript 的语法检查和兼容处理的所有内容啦~，下面是完整代码：**

```javascript
module.exports = {
 ...
    
  module: {
    rules: [
        
      /*
      * 语法检查：eslint eslint-loader
      *   注意：只检查自己源代码，第三方库不用检查
      *   设置检查规则，package.json 中 eslintConfig 中设置
      *     "eslintConfig": {
      *       "extends": "airbnb-base"
      *    }
      *     airbnb -> eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import
      * */
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options:{
          // 自动修复 eslint 的错误
          fix: true
        }
      },
        
      /*
      * js兼容性处理: babel-loader @babel/core @babel/preset-env
      *   1. 基本兼容性处理 --> @babel/preset-env
      *     问题：只能转换基本语法，如 promise 等高级语法不能转换
      *   2. 全部兼容性处理 --> @babel/polyfill
      *     问题：我只要解决部分兼容性问题，但是全部兼容性代码引入了，体积太大
      *   3. 需要做兼容的才做: 按需加载 --> core-js
      * */
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options: {
          // 预设：指示 babel 做怎么样的 JS 兼容处理
          presets: [
            [
              "@babel/preset-env",{
              // 按需加载
              "useBuiltIns": "usage",
              // 指示 core-js 版本
              "corejs":{
                "version": 3
              },
              // 指定兼容性做到浏览器哪个版本
              "targets":{
                "chrome": "60",
                "firefox": "60",
                "ie": "9",
                "safari": "10",
                "edge": "17"
              }
            }
            ]
          ]
        }
      }
    ]
  }
    
    ...
}

```

