<template><h3 id="webpack系列——生产环境下的css代码优化" tabindex="-1"><a class="header-anchor" href="#webpack系列——生产环境下的css代码优化" aria-hidden="true">#</a> webpack系列——生产环境下的CSS代码优化</h3>
<blockquote>
<p><strong>这次我们来学习一下项目开发中，生产环境下的CSS代码优化，那么我们应该从哪些方面去考虑呢？</strong></p>
</blockquote>
<ol>
<li>单文件入口的情况下，我们的 CSS 资源会打包到 JS 文件中，此时，如果我们的 CSS资源太大，那就会大大增加 bundle.js 文件的体积，从而在页面加载时，增加首屏加载的时间，<strong>所以我们如何在打包的时候分离出 CSS 代码呢?</strong></li>
<li>在开发中，我们会使用一些比前卫的 CSS 属性，比如 <code>display:flex</code>这样的属性，那当我们的代码运行在低版本浏览器运行时，可能会出现浏览器无法识别的CSS属性，<strong>所以我们如何在打包的时候对 CSS 代码做兼容呢？</strong></li>
</ol>
<hr>
<p>针对上述的问题一，我们可以做2个事情：</p>
<ul>
<li>打包时提取 CSS 代码到单独的文件中，并自动引入到入口的HTML文件中;</li>
<li>打包时压缩 CSS 代码;</li>
</ul>
<p>提取 CSS 代码需要使用到插件：mini-css-extract-plugin,压缩CSS代码需要使用插件：OptimizeCssAssetsWebpackPlugin，使用方式如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 先安装插件</span>
npm i mini<span class="token operator">-</span>css<span class="token operator">-</span>extract<span class="token operator">-</span>plugin optimize<span class="token operator">-</span>css<span class="token operator">-</span>assets<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>

<span class="token comment">// 提取 CSS 代码到单独的文件中，并且自动引入打包后的 HTML 文件</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 压缩 CSS 代码</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"optimize-css-assets-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// 使用提取 CSS 代码到单独文件的 loader</span>
          	MiniCssExtractPlugin<span class="token punctuation">.</span>loader
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">// 实例化提取CSS代码的插件</span>
    	<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].css"</span>
   			 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 压缩 CSS 代码的插件</span>
    	<span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>配置好后，即可对CSS代码进行提取和压缩啦。</p>
<hr>
<p>针对上述问题二，我们同样可以做2个事情：</p>
<ul>
<li>对CSS代码做兼容处理，比如自动为需要处理的CSS属性添加前缀</li>
<li>指定需要做兼容的浏览器</li>
</ul>
<p>需要使用到的插件有：postcss-loader 和 postcss-loader-env，webpack.config.js 如下配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 先安装插件</span>
npm i postcss<span class="token operator">-</span>loader postcss<span class="token operator">-</span>loader<span class="token operator">-</span>env <span class="token operator">-</span><span class="token constant">D</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token comment">// 使用提取 CSS 代码到单独文件的 loader</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">"css-loader"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 使用 postcss-loader</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>需要注意的是：</p>
<ul>
<li>
<p>postcss-loader 需要放到 css-loader 和 MiniCssExtractPlugin.loader 之后使用</p>
</li>
<li>
<p>需要在根目录创建一个名字为 postcss.config.js 文件，在其中引入postcss-preset-env，postcss.config.js 如下配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// 引入 postcss-preset-env 插件</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"postcss-preset-env"</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>需要在 package.json 中指定 browserlist 属性，并对开发环境和生产环境做不同的配置，package.json 如下配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li>
</ul>
<p>到此我们的 CSS 代码就能够做到兼容处理啦，打包后的代码会自动为需要做兼容的CSS属性添加特定浏览器的前缀。</p>
<hr>
<p>webpack.config.js 详细代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span>
<span class="token comment">// 提取 CSS 代码到单独的文件中，并且自动引入打包后的 HTML 文件</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 压缩 CSS 代码</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"optimize-css-assets-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./main.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./build"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 使用提取 CSS 代码到单独文件的 loader</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">"css-loader"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">/*
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
            */</span>
            <span class="token comment">// 使用 postcss-loader</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">"home.html"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 实例化提取CSS代码的插件</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 压缩 CSS 代码的插件</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div></template>
