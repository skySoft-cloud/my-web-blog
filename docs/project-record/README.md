# 项目记录
## iDVR User Site
### 项目简介
- iDVR User Site 是云端车联网项目管理后台，为DVR行车记录仪提供远程控制、车队管理、客服中心等丰富功能；

### 技术简介
- iDVR User Site 前端采用 VUE + Element ui 配套的技术栈，CSS代码使用SASS组织，项目打包使用 webpack；

### 访问地址
- [iDVR User Site QAT 线上地址](https://web-qat.s3-ap-northeast-1.amazonaws.com/askey-idvr-user-site/index.html#/login)

### 常用账号
- QAT环境账密
    - appTest/acvfssw
    - askeycloud2/cc12345
    - webTeam/xx2458
    - webMaster/vvsws222
- PROD环境账密  


---
## AVUS
### 项目简介
- AVUS 是提供远端设备进行 FOTA升级的后台管理系统；

### 技术简介
- iDVR User Site 前端采用 VUE + Element ui 配套的技术栈，CSS代码使用SASS组织，项目打包使用 webpack；

### 访问地址
- [AVUS QAT 环境线上地址](https://web-qat.s3-ap-northeast-1.amazonaws.com/avus/index.html#/login)

## 需求分析与问题确认
- 根据规格书，理解需求，需要注意以下要点：
  - 需要了解整个项目的 time schedule,如果前端以外的进度影响了进程，则前端时程也应该对应调整 
  - 是否有用字错误
  - 页面风格是否与项目整体风格不统一
  - 规格是否有业务错误或者冲突的情况
  - 思考业务场景，判断规格是否场景适用
  
- 分析出的问题如何进行确认：
  - 可使用在线表格列出问题，统一请PM确认
  - 列出的问题最好给出解决方案
  - 涉及多端的问题，请多方参与讨论
  - 复杂需求可拉会议进行讨论
  
## 开发工时评估
- 按模块划分
  - API DOC或者 API未及时上版，则会影响前端的联调时间，从而影响 project timeline
  - 开发前需要确认 API DOC和 WF是否定版
  - 根据模块划分，评估开发及自查自测需要的工时
  - 如果是新项目，需要评估搭建框架的时间
  - 提取共通组件，也需要单独评估工时
  - 如果有技术点需要调研，则需要先做技术预研
  - 如果开发过程中，临时增加新需求，需要重新评估工时



## 开发任务与BUG管理
- 关于工作分配：
  - 根据技术能力，模块划分尽量对应
  - 共通封装尽量是架构来完成
  - 通过在线文档具体管理每个任务的进度
  - 不仅是开发完，自查自测也是非常重要的过程，能够避免低级 BUG的出现
  
- 关于BUG管理：
  - 首先应分辨出是不是前端的BUG
  - BUG是否一定要改
  - 如果需要处理的BUG很多，应该根据优先度进行修改，并及时发版回归
  - BUG数目多，一定要定期分析BUG产生原因，做好 BUG Review
  - BUG修改好之后，有条件的可以做交叉 code review，提高质量保证
