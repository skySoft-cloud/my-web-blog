<template><h1 id="项目记录" tabindex="-1"><a class="header-anchor" href="#项目记录" aria-hidden="true">#</a> 项目记录</h1>
<h2 id="idvr-user-site" tabindex="-1"><a class="header-anchor" href="#idvr-user-site" aria-hidden="true">#</a> iDVR User Site</h2>
<h3 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介" aria-hidden="true">#</a> 项目简介</h3>
<ul>
<li>iDVR User Site 是云端车联网项目管理后台，为DVR行车记录仪提供远程控制、车队管理、客服中心等丰富功能；</li>
</ul>
<h3 id="技术简介" tabindex="-1"><a class="header-anchor" href="#技术简介" aria-hidden="true">#</a> 技术简介</h3>
<ul>
<li>iDVR User Site 前端采用 VUE + Element ui 配套的技术栈，CSS代码使用SASS组织，项目打包使用 webpack；</li>
</ul>
<h3 id="访问地址" tabindex="-1"><a class="header-anchor" href="#访问地址" aria-hidden="true">#</a> 访问地址</h3>
<ul>
<li><a href="https://web-qat.s3-ap-northeast-1.amazonaws.com/askey-idvr-user-site/index.html#/login" target="_blank" rel="noopener noreferrer">iDVR User Site QAT 线上地址<ExternalLinkIcon/></a></li>
</ul>
<h3 id="常用账号" tabindex="-1"><a class="header-anchor" href="#常用账号" aria-hidden="true">#</a> 常用账号</h3>
<ul>
<li>QAT环境账密
<ul>
<li>appTest/acvfssw</li>
<li>askeycloud2/cc12345</li>
<li>webTeam/xx2458</li>
<li>webMaster/vvsws222</li>
</ul>
</li>
<li>PROD环境账密</li>
</ul>
<hr>
<h2 id="avus" tabindex="-1"><a class="header-anchor" href="#avus" aria-hidden="true">#</a> AVUS</h2>
<h3 id="项目简介-1" tabindex="-1"><a class="header-anchor" href="#项目简介-1" aria-hidden="true">#</a> 项目简介</h3>
<ul>
<li>AVUS 是提供远端设备进行 FOTA升级的后台管理系统；</li>
</ul>
<h3 id="技术简介-1" tabindex="-1"><a class="header-anchor" href="#技术简介-1" aria-hidden="true">#</a> 技术简介</h3>
<ul>
<li>iDVR User Site 前端采用 VUE + Element ui 配套的技术栈，CSS代码使用SASS组织，项目打包使用 webpack；</li>
</ul>
<h3 id="访问地址-1" tabindex="-1"><a class="header-anchor" href="#访问地址-1" aria-hidden="true">#</a> 访问地址</h3>
<ul>
<li><a href="https://web-qat.s3-ap-northeast-1.amazonaws.com/avus/index.html#/login" target="_blank" rel="noopener noreferrer">AVUS QAT 环境线上地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="需求分析与问题确认" tabindex="-1"><a class="header-anchor" href="#需求分析与问题确认" aria-hidden="true">#</a> 需求分析与问题确认</h2>
<ul>
<li>
<p>根据规格书，理解需求，需要注意以下要点：</p>
<ul>
<li>需要了解整个项目的 time schedule,如果前端以外的进度影响了进程，则前端时程也应该对应调整</li>
<li>是否有用字错误</li>
<li>页面风格是否与项目整体风格不统一</li>
<li>规格是否有业务错误或者冲突的情况</li>
<li>思考业务场景，判断规格是否场景适用</li>
</ul>
</li>
<li>
<p>分析出的问题如何进行确认：</p>
<ul>
<li>可使用在线表格列出问题，统一请PM确认</li>
<li>列出的问题最好给出解决方案</li>
<li>涉及多端的问题，请多方参与讨论</li>
<li>复杂需求可拉会议进行讨论</li>
</ul>
</li>
</ul>
<h2 id="开发工时评估" tabindex="-1"><a class="header-anchor" href="#开发工时评估" aria-hidden="true">#</a> 开发工时评估</h2>
<ul>
<li>按模块划分
<ul>
<li>API DOC或者 API未及时上版，则会影响前端的联调时间，从而影响 project timeline</li>
<li>开发前需要确认 API DOC和 WF是否定版</li>
<li>根据模块划分，评估开发及自查自测需要的工时</li>
<li>如果是新项目，需要评估搭建框架的时间</li>
<li>提取共通组件，也需要单独评估工时</li>
<li>如果有技术点需要调研，则需要先做技术预研</li>
<li>如果开发过程中，临时增加新需求，需要重新评估工时</li>
</ul>
</li>
</ul>
<h2 id="开发任务与bug管理" tabindex="-1"><a class="header-anchor" href="#开发任务与bug管理" aria-hidden="true">#</a> 开发任务与BUG管理</h2>
<ul>
<li>
<p>关于工作分配：</p>
<ul>
<li>根据技术能力，模块划分尽量对应</li>
<li>共通封装尽量是架构来完成</li>
<li>通过在线文档具体管理每个任务的进度</li>
<li>不仅是开发完，自查自测也是非常重要的过程，能够避免低级 BUG的出现</li>
</ul>
</li>
<li>
<p>关于BUG管理：</p>
<ul>
<li>首先应分辨出是不是前端的BUG</li>
<li>BUG是否一定要改</li>
<li>如果需要处理的BUG很多，应该根据优先度进行修改，并及时发版回归</li>
<li>BUG数目多，一定要定期分析BUG产生原因，做好 BUG Review</li>
<li>BUG修改好之后，有条件的可以做交叉 code review，提高质量保证</li>
</ul>
</li>
</ul>
</template>
