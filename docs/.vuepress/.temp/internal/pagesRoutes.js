import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html",{"title":"contributing.md"},["/contributing","/contributing.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-03615676","/frontend-base/base-css.html",{"title":"CSS"},["/frontend-base/base-css","/frontend-base/base-css.md"]],
  ["v-419d9364","/frontend-base/base-html.html",{"title":"HTML"},["/frontend-base/base-html","/frontend-base/base-html.md"]],
  ["v-58870468","/frontend-base/base-javascript.html",{"title":"Javascript"},["/frontend-base/base-javascript","/frontend-base/base-javascript.md"]],
  ["v-898db104","/frontend-frame/frame-react.html",{"title":"React"},["/frontend-frame/frame-react","/frontend-frame/frame-react.md"]],
  ["v-25f084d7","/frontend-frame/frame-vue.html",{"title":"Vue"},["/frontend-frame/frame-vue","/frontend-frame/frame-vue.md"]],
  ["v-4013bf31","/project-record/",{"title":"项目记录"},["/project-record/index.html","/project-record/README.md"]],
  ["v-412c7eec","/webpack-knowledge/",{"title":""},["/webpack-knowledge/index.html","/webpack-knowledge/README.md"]],
  ["v-419a22b9","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94Code%20Split(%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2).html",{"title":""},["/webpack-knowledge/basic-webpack/webpack基础系列——Code Split(代码分割).html","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94Code%20Split(%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2)","/webpack-knowledge/basic-webpack/webpack基础系列——Code Split(代码分割).md","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94Code%20Split(%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2).md"]],
  ["v-fea9ff7a","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94JS%E8%AF%AD%E6%B3%95%E6%A3%80%E6%9F%A5%E4%B8%8E%E5%85%BC%E5%AE%B9%E6%80%A7%E5%A4%84%E7%90%86.html",{"title":""},["/webpack-knowledge/basic-webpack/webpack基础系列——JS语法检查与兼容性处理.html","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94JS%E8%AF%AD%E6%B3%95%E6%A3%80%E6%9F%A5%E4%B8%8E%E5%85%BC%E5%AE%B9%E6%80%A7%E5%A4%84%E7%90%86","/webpack-knowledge/basic-webpack/webpack基础系列——JS语法检查与兼容性处理.md","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94JS%E8%AF%AD%E6%B3%95%E6%A3%80%E6%9F%A5%E4%B8%8E%E5%85%BC%E5%AE%B9%E6%80%A7%E5%A4%84%E7%90%86.md"]],
  ["v-196f89f6","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94%E5%85%A5%E9%97%A8%E6%A6%82%E8%BF%B0.html",{"title":""},["/webpack-knowledge/basic-webpack/webpack基础系列——入门概述.html","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94%E5%85%A5%E9%97%A8%E6%A6%82%E8%BF%B0","/webpack-knowledge/basic-webpack/webpack基础系列——入门概述.md","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94%E5%85%A5%E9%97%A8%E6%A6%82%E8%BF%B0.md"]],
  ["v-985567fc","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84CSS%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96.html",{"title":""},["/webpack-knowledge/basic-webpack/webpack基础系列——生产环境下的CSS代码优化.html","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84CSS%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96","/webpack-knowledge/basic-webpack/webpack基础系列——生产环境下的CSS代码优化.md","/webpack-knowledge/basic-webpack/webpack%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%E2%80%94%E2%80%94%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84CSS%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
