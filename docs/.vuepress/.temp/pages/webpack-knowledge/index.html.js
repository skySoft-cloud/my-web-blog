export const data = {
  "key": "v-412c7eec",
  "path": "/webpack-knowledge/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "webpack基础系列",
      "slug": "webpack基础系列",
      "children": []
    },
    {
      "level": 2,
      "title": "webpack进阶系列",
      "slug": "webpack进阶系列",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "webpack-knowledge/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
