#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f https://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@github.com/skySoft-cloud/skySoft-cloud.github.io.git master
cd -
