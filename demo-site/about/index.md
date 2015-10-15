---
layout: page
date:   2014-09-22 14:48:58
categories: jekyll update
---

### Sparrow Theme

又一个博客主题 :) [Demo](http://runfastlynda.com)


#### 在Jekyll使用本主题
1. 克隆本项目 `git clone https://github.com/runfastlynda/sparrow.git`
2. `cd sparrow/demo-site` 进入项目目录下的demo-site文件夹，该目录是使用了此模板的现成jeykll项目
3. 在`demo-site`目录下执行`jekyll serve`可本地预览博客主题效果
3. 你可以直接修改demo-site下的文件，作为你自己的博客，也可以按照目录结构重新构造你的博客
4. 博客title之类的元信息都存放在`_config.yml`文件中

#### 应用到其它博客系统上

```
git clone https://github.com/runfastlynda/sparrow.git
cd sparrow
npm init
```
除了直接使用jekyll外，你也可以通过修改html静态模板，自定义到任何一款博客系统上，例如Hexo、Ghost、Octopress。静态模板存放在`sparrow/app`目录下，项目采用gulp构建，进入`app`目录后执行`gulp`可本地预览静态页面效果。Have Fun!

#### 说明
博客的书单页是通过豆瓣图书地址，通过ajax动态抓取的，豆瓣在api访问上有限制，在不带apikey的情况下访问限制150次/h，带apikey后访问限制变为500次/h。建议可以去申请一个apikey，然后添加到book页对应的js中。

#### Todo
+ 采用Fluidbox效果浏览博客配图