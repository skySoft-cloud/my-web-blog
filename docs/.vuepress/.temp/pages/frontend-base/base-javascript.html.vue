<template><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升" aria-hidden="true">#</a> 变量提升</h3>
<blockquote>
<p>js 代码执行过程分为两个阶段</p>
</blockquote>
<ol>
<li>
<p>词法分析：词法分析主要包括：分析变量声明、分析函数声明、分析形参三个部分。</p>
</li>
<li>
<p>执行阶段</p>
</li>
</ol>
<h3 id="上下文和作用域" tabindex="-1"><a class="header-anchor" href="#上下文和作用域" aria-hidden="true">#</a> 上下文和作用域</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'HTML'</span><span class="token punctuation">,</span><span class="token string">'Css'</span><span class="token punctuation">,</span><span class="token string">'Javascript'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token keyword">return</span> item <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="闭包与回调函数" tabindex="-1"><a class="header-anchor" href="#闭包与回调函数" aria-hidden="true">#</a> 闭包与回调函数</h3>
<h3 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> This关键字</h3>
<h3 id="event-loop机制" tabindex="-1"><a class="header-anchor" href="#event-loop机制" aria-hidden="true">#</a> Event Loop机制</h3>
<h3 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a> 垃圾回收机制</h3>
<h3 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h3>
<h3 id="内存泄露和溢出" tabindex="-1"><a class="header-anchor" href="#内存泄露和溢出" aria-hidden="true">#</a> 内存泄露和溢出</h3>
<h3 id="浏览器架构" tabindex="-1"><a class="header-anchor" href="#浏览器架构" aria-hidden="true">#</a> 浏览器架构</h3>
<h3 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟DOM</h3>
</template>
