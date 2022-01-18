<template><h2 id="webpack系列——code-split-代码分割" tabindex="-1"><a class="header-anchor" href="#webpack系列——code-split-代码分割" aria-hidden="true">#</a> webpack系列——Code Split(代码分割)</h2>
<blockquote>
<p>在实际的 SPA 开发过程中，打包后我们会遇到单个文件体积过大的现象，这样的文件加载时间较长，可能导致首屏加载缓慢，用户体验不佳的问题😭</p>
</blockquote>
<ul>
<li>那针对上面的问题，我们可以从减小文件体积、抽离公用的第三方包等方面着手，那这里我们的 Code Split 就派上用场了😎</li>
</ul>
<blockquote>
<p>⭐常见的 Code Split 方式</p>
</blockquote>
<ol>
<li>
<p>entry 配置多文件入口，手动分离代码；</p>
</li>
<li>
<font style='color:#18bc9c'>使用 `SplitChunksPlugin` 对代码块进行去重和分离；</font>
</li>
<li>
<font style='color:#18bc9c'>通过模块中的内联函数动态导入；</font>
</li>
</ol>
<blockquote>
<p>entry 配置多文件入口</p>
</blockquote>
<ul>
<li>
<p>webpack.config.js 中，配置 entry 属性：</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 配置多入口文件，一个入口文件就会打包为一个 chunk</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./index.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tool</span><span class="token operator">:</span> <span class="token string">"./tool.js"</span>
  <span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="C:\Users\Skysoft.SKYSOFT-47333GO\AppData\Roaming\Typora\typora-user-images\image-20210630160144856.png" alt="image-20210630160144856"></p>
</li>
<li>
<p>可以看到下面打包过程中，一个入口文件打包成了一个单独的 chunk</p>
</li>
<li>
<p>这种方式带来两个问题：</p>
<ol>
<li>由于打包的两个文件中，都引入了一个第三方库，所以打包的时候出现了重复打包；</li>
<li>不能动态地将核心应用程序逻辑中的代码拆分出来；</li>
</ol>
</li>
</ul>
<hr>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<blockquote>
<p>⭐<font style='color:#18bc9c'>使用 <code>SplitChunksPlugin</code> 对代码块进行去重和分离；</font></p>
</blockquote>
<ul>
<li>
<p>使用 webpack 的 SplitChunksPlugin 插件，能够解决重复打包模块代码的问题；</p>
</li>
<li>
<p>在 webpack.config.js 中，配置 optimization 属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 配置多入口文件，一个入口文件就会打包为一个 chunk</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./index.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tool</span><span class="token operator">:</span> <span class="token string">"./tool.js"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].bundle.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"./build"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用 SplitChunksPlugin 插件</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将重复使用的包，单独打包为一个 chunk</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">"all"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><img src="C:\Users\Skysoft.SKYSOFT-47333GO\AppData\Roaming\Typora\typora-user-images\image-20210630164102888.png" alt="image-20210630164102888"></p>
<ul>
<li>可以看到第三方库有被单独打包；</li>
</ul>
</li>
</ul>
<hr>
<blockquote>
<font style='color:#18bc9c'>⭐通过模块中的内联函数动态导入；</font>
</blockquote>
<ul>
<li>对需要动态导入的模块，使用 <code>import()</code> 语法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Another'</span><span class="token punctuation">,</span> <span class="token string">'module'</span><span class="token punctuation">,</span> <span class="token string">'loaded!'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 import 语法，动态导入模块，该模块将会被单独打包</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./dynamic'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="C:\Users\Skysoft.SKYSOFT-47333GO\AppData\Roaming\Typora\typora-user-images\image-20210630165729177.png" alt="image-20210630165729177"></p>
<ul>
<li>
<p>可以看到在 <code>index.js</code> 文件中，动态引入的 <code>dynamic.js</code> 文件，有单独打包成一个文件；</p>
</li>
<li>
<p>该处最常见的使用如：Vue Router 配置的时候，使用 import 语法引入模块：</p>
<ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const PreviewSamplePage = () => import(/* webpackChunkName: "PreviewSamplePage" */ "@/views/PreviewSamplePage/PreviewSamplePage");
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
<hr>
<p>😏到此，webpack 的 Code Split 就分享到这里，下一篇我们将一起来学习 webpack系列 —— DLL 技术 与 CDN引入</p>
</template>
