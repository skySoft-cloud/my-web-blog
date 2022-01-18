<template><h2 id="webpack系列——js语法检查与兼容性处理" tabindex="-1"><a class="header-anchor" href="#webpack系列——js语法检查与兼容性处理" aria-hidden="true">#</a> webpack系列——JS语法检查与兼容性处理</h2>
<h4 id="👉javascript-语法检查" tabindex="-1"><a class="header-anchor" href="#👉javascript-语法检查" aria-hidden="true">#</a> 👉JavaScript 语法检查</h4>
<blockquote>
<p>在实际项目开发中，一般都是由多人协作来完成开发，那不可避免的我们会有一些编码风格上的问题，编码风格不一致会带来以下问题：</p>
</blockquote>
<ul>
<li>合并代码时，由于代码风格不同，可能冲突会更多，合并代码需要更多时间；</li>
<li>开发者以外的人进行代码 review 时，可能需要更多的时间看代码；</li>
<li>一些不规范的代码写法，导致隐藏的 BUG；</li>
</ul>
<blockquote>
<p>那么为了提高效率，我们有哪些方案来统一团队的编码风格呢？</p>
</blockquote>
<ul>
<li>制定项目的编码规范让大家遵守；</li>
<li>⭐ 利用工具强制性让大家编码风格一致；</li>
</ul>
<blockquote>
<p>那这次的 webpack 系列中，我们来一起学习使用 JavaScript 语法检查工具，在 webpack 中配置 eslint 语法检查，根据下面步骤：</p>
</blockquote>
<ol>
<li>
<p>使用 eslint 需要安装的包：<code>npm i eslint eslint-loader -D</code></p>
</li>
<li>
<ul>
<li>使用当前比较流行的 eslint 规则开源库，<code>eslint-config-airbnb-base</code>,库详细介绍请看 [Airbnb](<a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/" target="_blank" rel="noopener noreferrer">javascript/packages/eslint-config-airbnb-base at master · airbnb/javascript · GitHub<ExternalLinkIcon/></a>)；</li>
<li>使用 airbnb base 需要安装的包：<code>npm i eslint-config-airbnb-base eslint-plugin-import -D</code></li>
</ul>
</li>
<li>
<p>设置检查规则， ⭐ package.json 中 eslintConfig 中设置;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"eslintConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Eslint 规则继承 eslint 规则开源库 airbnb-base</span>
        <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token string">"airbnb-base"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>webpack 中配置 eslint loader</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">/*
            * 语法检查：eslint eslint loader
            * 注意：只检查自己的源代码，第三方库不用检查
            */</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 排除第三方库</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>   
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"eslint-loader"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// webpack 编译时自动修复 eslint 的错误</span>
                    <span class="token comment">// fix: false 时，如果有语法错误，编译会通不过，直接报错</span>
                    <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><hr>
<h4 id="👉javascript-兼容性处理" tabindex="-1"><a class="header-anchor" href="#👉javascript-兼容性处理" aria-hidden="true">#</a> 👉JavaScript 兼容性处理</h4>
<blockquote>
<p>JavaScript 代码现在已经有 ES5、ES6 - ES10 规范了，那其实有些高级语法，在低版本的浏览器中是不兼容的，所以做好 JavaScript 代码的兼容处理尤为重要，那 webpack 配置中我们应该做呢？</p>
</blockquote>
</li>
</ol>
<p>其实 webpack 中本质是使用babel-loader实现对 JavaScript 代码的编译，将高级语法转为兼容更低版本浏览器的语法，那么处理 JavaScript 兼容有 3 种方式：</p>
<ul>
<li>
<p>前提条件，安装相关库：<code>npm install babel-loader @babel/core @babel/preset-env core-js</code></p>
</li>
<li>
<p>兼容方案一, 使用 ⭐ babel-loader + @babel/preset-env：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">/*
            * js兼容性处理：babel-loader @babel/core @babel/preset-env
            * 只能做基本的兼容性处理 --> @babel/preset-env，如 let const 这种基本语法的兼容，但 Promise 等高级语法做不到兼容
            */</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 排除第三方库</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>   
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 预设 babel 做怎样的 JavaScript 兼容处理</span>
                    <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></li>
<li>
<p>方案一无法对高级语法做兼容，所有有了我们的兼容方案二，使用 ⭐ babel-loader + @babel/polyfill：</p>
<ul>
<li>该方案仅需要在方案一的基础上，在自己的入口 JS 文件顶部引入即可，如下面是我们的项目入口 ⭐ main.js 文件：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"@babel/polyfill"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里的 Promise 代码在 webpack 编译后将会被转化为兼容低版本浏览器的代码</span>
<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'定时器执行了~'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    add<span class="token punctuation">,</span>
    promise
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>方案二会把所有的 JavaScript 兼容性代码引入文件中，导致编译后的文件体积太大~；</p>
</li>
<li>
<p>兼容方案三，使用 ⭐ babel-loader + core-js：</p>
<ul>
<li>结合上述方案一和方案二的问题，我们方案三将做到需要做兼容的才做: ⭐ <strong>按需加载</strong></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">/*
            * 需要做兼容的才做 --> @babel/preset-env + core-js
            */</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 排除第三方库</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>   
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 预设 babel 做怎样的 JavaScript 兼容处理</span>
                    <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                <span class="token comment">// 按需加载</span>
                                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">"usage"</span><span class="token punctuation">,</span>
                                <span class="token comment">// 指示 core-js 版本</span>
                                <span class="token literal-property property">corejs</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                 <span class="token comment">// 指定兼容性做到浏览器哪个版本</span>
                                <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                       <span class="token string-property property">"chrome"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span>
                                       <span class="token string-property property">"firefox"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span>
                                       <span class="token string-property property">"ie"</span><span class="token operator">:</span> <span class="token string">"9"</span><span class="token punctuation">,</span>
                                       <span class="token string-property property">"safari"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>
                                       <span class="token string-property property">"edge"</span><span class="token operator">:</span> <span class="token string">"17"</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>👍 方案三即做到了按需加载，减小了编译后的文件体积，从而也做到了对高级语法的兼容；</p>
<hr>
<p><strong>以上就是我们的 JavaScript 的语法检查和兼容处理的所有内容啦~，下面是完整代码：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
    
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        
      <span class="token comment">/*
      * 语法检查：eslint eslint-loader
      *   注意：只检查自己源代码，第三方库不用检查
      *   设置检查规则，package.json 中 eslintConfig 中设置
      *     "eslintConfig": {
      *       "extends": "airbnb-base"
      *    }
      *     airbnb -> eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import
      * */</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"eslint-loader"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token comment">// 自动修复 eslint 的错误</span>
          <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
      <span class="token comment">/*
      * js兼容性处理: babel-loader @babel/core @babel/preset-env
      *   1. 基本兼容性处理 --> @babel/preset-env
      *     问题：只能转换基本语法，如 promise 等高级语法不能转换
      *   2. 全部兼容性处理 --> @babel/polyfill
      *     问题：我只要解决部分兼容性问题，但是全部兼容性代码引入了，体积太大
      *   3. 需要做兼容的才做: 按需加载 --> core-js
      * */</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 预设：指示 babel 做怎么样的 JS 兼容处理</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
              <span class="token comment">// 按需加载</span>
              <span class="token string-property property">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span><span class="token punctuation">,</span>
              <span class="token comment">// 指示 core-js 版本</span>
              <span class="token string-property property">"corejs"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token number">3</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token comment">// 指定兼容性做到浏览器哪个版本</span>
              <span class="token string-property property">"targets"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">"chrome"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"firefox"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"ie"</span><span class="token operator">:</span> <span class="token string">"9"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"safari"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"edge"</span><span class="token operator">:</span> <span class="token string">"17"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div></template>
