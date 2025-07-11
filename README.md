# 项目说明/README

## 项目框架/Architecture

项目使用Astro框架，采用内容与页面结构分离设计，将根据内容进行动态渲染。

目录结构如下：

`public`文件夹存放图像/论文等可供链接/下载的静态资源。文件夹按照年份进行划分，主页图片通常存放在`images/indexPic`文件夹下。

`src`文件夹存放网页相关内容，其中`content`文件夹存放网页内容，`components`、`layout`、`pages`存放页面结构，其他文件夹为其他相关函数。

`content`文件夹中，`BlogPosts`为课题组新闻信息，`data`为其他页面的信息。

## 更新说明/Update

### 课题组新闻

课题组新闻部分采用markdown/html渲染方式，按年份信息展示`BlogPosts`文件夹中对应语言的所有内容。若需要更新，可以按照如下格式新建一个md文件，并放入对应年份的文件夹中。

```markdown
---
title: "New Blog Post"
date: "2023-10"
---

# New Blog Post

This is the content of the new blog post. Write your article here using Markdown syntax.
```

**文件名说明**：以`2025-06-01.md`为例，其中2025-06指的是2025年6月，01代表这篇资讯在2025年6月中的排序。

在同一月中，数字越大，排序越前。例如`2025-06-02.md`在列表中排在`2025-06-01.md`之前。

### 其他页面信息

其他页面信息采用json渲染方式，按页面展示`data`文件夹中的json文件，需要修改可以找到对应板块的文件，并进行修改。

所有的json文件均需支持i18n。本项目中字段`zh`代表中文，`en`代表英文，`ja`代表日文。

板块名称与json文件对应关系如下：

| 板块名称 | 文件名称 |
|----------|---------|
| 自我介绍 | `aboutContent.json` & `teamMembers.json`|
| 研究介绍 | `researchAreas.json` & `researchContent.json`|
| 参与项目 | `projectsContent.json` |
| 教学介绍 | `teachingContent.json` |
| 其他内容 | `otherContent.json` |
| 联系地图 | `contactContent.json` |

## 测试/Test

项目依赖于Node环境进行运行，测试时需要首先下载Node.js，可使用以下命令进行本地页面测试：

1. 使用终端，定位到页面目录下，输入`npm install`安装依赖；
2. 输入`npm run dev`启动测试服务器；
3. 打开浏览器，输入`http://localhost:4321/`，即可进行测试。

部署前，可以使用命令`npm run build`本地测试打包流程。

## 页面部署/Deployment

页面可以自动化部署至github pages。
在修改后使用以下命令推送更改即可，部署将自动进行。

```bash
git add .
git commit -m "你的修改内容"
git push
```
