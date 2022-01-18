<template><h2 id="webpack是什么" tabindex="-1"><a class="header-anchor" href="#webpack是什么" aria-hidden="true">#</a> webpack是什么？</h2>
<p><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180125%2F1f5e8e881e364ef5b2f37e14cdbae7ba.jpeg&amp;refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg?sec=1618390077&amp;t=5f583fd7b2ead56f2fed29bc520159f6" alt=""></p>
<p><strong>webpack</strong> 是一款<strong>前端构建工具</strong>，主要功能是对模块打包，所以也叫<strong>模块打包器</strong>；它基于模块间的依赖关系，按照一定的规则将模块打包合并为一个** JavaScript **文件;</p>
<hr>
<h2 id="webpack-五大核心概念" tabindex="-1"><a class="header-anchor" href="#webpack-五大核心概念" aria-hidden="true">#</a> webpack 五大核心概念</h2>
<ol>
<li>Entry
<ul>
<li>指定项目的的入口文件，告诉 webpack 基于哪个文件来分析依赖关系进行打包</li>
</ul>
</li>
<li>Output
<ul>
<li>告诉 webpack 打包后的文件输出存放在哪个目录</li>
</ul>
</li>
<li>Loader
<ul>
<li>由于 webpack 只能处理 JavaScript 文件和 JSON 文件，而其它的文件如：CSS 文件和 HTML文件则无法处理，所以 webpack 需要对应的 Loader进行处理</li>
</ul>
</li>
<li>Plugin
<ul>
<li>Plugin 可以做更多的事情，如 代码压缩 ，清理文件夹，复制资源等，可以理解为 Plugin 是增强，这些都是 Loader 不能做到的</li>
</ul>
</li>
<li>Mode
<ul>
<li>webpack 分为 2 个模式，development 模式和 production 模式</li>
</ul>
</li>
</ol>
<h2 id="一份基础的-webpack-配置代码" tabindex="-1"><a class="header-anchor" href="#一份基础的-webpack-配置代码" aria-hidden="true">#</a> 一份基础的 webpack 配置代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 从node内部导入用来拼接绝对路径的resolve的方法(使用commonjs语法)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

<span class="token comment">// 引入html-webpack-plugin插件</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpack的5大核心配置属性</span>
  <span class="token comment">// 1.入口文件</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
  <span class="token comment">// 2.输出文件</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果要想进行分类，就要在文件名前面加上一个js文件夹</span>
    <span class="token comment">// filename: 'js/bundle.js',</span>
    <span class="token comment">// 输出路径:一般是绝对路径</span>
    <span class="token comment">// __dirname: nodejs的变量，代表当前文件目录的绝对路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'bundle'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 3.loader的配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 详细的loader配置</span>
      <span class="token comment">// 不同的文件需要配置不同的loader</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// test 匹配的文件（正则表达式，匹配以.css结尾）</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// use 使用哪些loader进行处理</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// use数组中的执行顺序：从右到左，从下到上</span>
          <span class="token comment">// 创建style标签，将js中的样式资源添加到head标签中生效</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token comment">// 将css文件变成commonjs模块加载js中，里面内容是样式字符串</span>
          <span class="token string">'css-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
          <span class="token comment">// 将less文件编译成css文件</span>
          <span class="token comment">// 需要安装less和less-loader包</span>
          <span class="token string">'less-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 配置图片loader</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif|jpeg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 配置一个loader时，用loader属性。配置多个loader时，使用use</span>
        <span class="token comment">// 下载url-loader和file-loader</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'url-loader'</span><span class="token punctuation">,</span>
        <span class="token comment">// options 对图片进行一些选择性配置</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token comment">// limit 限制图片大小,</span>
          <span class="token comment">// 如果图片小于8Kb,就会被base64处理</span>
          <span class="token comment">//    优点:减少请求数量(减轻服务器压力)  缺点:图片体积会更大(文件请求速度会更慢)</span>
          <span class="token comment">// 大于限制值时，就会提示安装一个file-loader</span>
          <span class="token comment">//    安装完之后再打包，会对大于limit的图片进行打包，之后会以哈希值(防止名字重复)命名</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token comment">// 问题:因为url-loader默认使用ES6模块化解析,而html-loader引入图片是commonjs模块</span>
          <span class="token comment">// 解析时会出问题: [object Module]</span>
          <span class="token comment">// 解决:关闭url-loader的ES6模块化,使用commonjs解析</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// 给图片进行重命名</span>
          <span class="token comment">// [hash:10] 取图片hash值的前10位</span>
          <span class="token comment">// [ext] 取文件的原来的扩展名</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'[hash:10].[ext]'</span><span class="token punctuation">,</span>
          <span class="token comment">// 如果想让图片放在同一个文件夹中，使用outputPath</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">'imgs'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 处理html文件的img图片(负责引入img,从而能被url-loader进行处理)</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'html-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 打包其它资源（除了js、html、css资源以外的资源）</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// exclude 排除css、js、html资源</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|html|css|less)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 4.plugins的配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 详细的plugin配置</span>
    <span class="token comment">// html-webpack-plugin</span>
    <span class="token comment">// 功能：默认创建一个空的html文件，自动引入打包输出的所有资源（js、json）</span>
    <span class="token comment">// 需求：需要有结构的html文件</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（js、json）</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 5.mode配置(模式配置)</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span> <span class="token comment">// 开发模式</span>
  <span class="token comment">// mode: 'production' // 生产模式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div></template>
