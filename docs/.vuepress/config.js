/**
 * VuePress 配置文件
 */

module.exports = {
  lang: 'zh-CN',
  title: '进击的小码农',
  description: 'cloud.chen 的博客网站',
  head: [
    ['link', { rel: 'icon', href: "/images/github3.png" }]
  ],
  // themeConfig 外部属于站点配置，内部属于主题配置
  themeConfig: {
    logo: '/images/logo.jpg',
    navbar:[
      {
        text: "前端基础",
        children:[
          {
            text:"HTML",
            link:"/frontend-base/base-html.md",
          },
          {
            text:"CSS",
            link:"/frontend-base/base-css.md",
          },
          {
            text:"Javascript",
            link:"/frontend-base/base-javascript.md"
          }

        ]
      },
      {
        text:"前端框架",
        children:[
          {
            text: "Vue",
            link: "/frontend-frame/frame-vue.md",
          },
          {
            text: "React",
            link: "/frontend-frame/frame-react.md",
          }
        ]
      },
      {
        text:"webpack",
        link:"/webpack-knowledge/"
      },
      {
        text:"项目记录",
        link:"/project-record/"
      }
    ],
    sidebar: {
      "/frontend-base/": [
        {
          text: "前端基础",
          collapsible: true,
          children: [
            "/frontend-base/base-html.md",
            "/frontend-base/base-css.md",
            "/frontend-base/base-javascript.md"
          ]
        }
      ],
      "/frontend-frame/": [
        {
          text: "前端框架",
          collapsible: true,
          children: [
            "/frontend-frame/frame-vue.md",
            "/frontend-frame/frame-react.md"
          ]
        }
      ]
    },
    backToHome: "返回首页"
  },
}
