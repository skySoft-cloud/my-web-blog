export const themeData = {
  "logo": "/images/logo.jpg",
  "navbar": [
    {
      "text": "前端基础",
      "children": [
        {
          "text": "HTML",
          "link": "/frontend-base/base-html.md"
        },
        {
          "text": "CSS",
          "link": "/frontend-base/base-css.md"
        },
        {
          "text": "Javascript",
          "link": "/frontend-base/base-javascript.md"
        }
      ]
    },
    {
      "text": "前端框架",
      "children": [
        {
          "text": "Vue",
          "link": "/frontend-frame/frame-vue.md"
        },
        {
          "text": "React",
          "link": "/frontend-frame/frame-react.md"
        }
      ]
    },
    {
      "text": "webpack",
      "link": "/webpack-knowledge/"
    },
    {
      "text": "项目记录",
      "link": "/project-record/"
    }
  ],
  "sidebar": {
    "/frontend-base/": [
      {
        "text": "前端基础",
        "collapsible": true,
        "children": [
          "/frontend-base/base-html.md",
          "/frontend-base/base-css.md",
          "/frontend-base/base-javascript.md"
        ]
      }
    ],
    "/frontend-frame/": [
      {
        "text": "前端框架",
        "collapsible": true,
        "children": [
          "/frontend-frame/frame-vue.md",
          "/frontend-frame/frame-react.md"
        ]
      }
    ]
  },
  "backToHome": "返回首页",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
