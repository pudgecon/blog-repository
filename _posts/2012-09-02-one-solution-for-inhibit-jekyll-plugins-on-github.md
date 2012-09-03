---
layout: post
title: "关于github禁止使用jekyll插件的一个解决方案"
description: "one solution for inhibit jekyll plugins on github.
关于github禁止使用jekyll插件的一个解决方案"
category: 'jekyll'
tags: ['jekyll', 'jekyll-plugins']
---
{% include JB/setup %}

[jekyll](http://jekyllbootstrap.com/)博客模板虽然不错，但是总是会缺少一些我们想要的东西，比如说，标签云（tag_cloud）。解决方法，当然是自己写plugin，又或者到网上搜一些开源的plugin。

但是，本地运行的好好的插件，上传到Github上之后，会发现出现了plugin不起作用，或者直接就报错了。原因是因为***Github默认不允许使用外部插件（GitHub doesn't allow Jekyll plugins）***。

本文提到的解决方案主要是参考charliepark的[这篇博文](http://charliepark.org/jekyll-with-plugins/)改的。因为有些地方不一样，因此我再贴出来。

方案的主要思想就是维护两个文件夹，一个放博客的项目文件，包括包括的jekyll模板文件，plugins文件，markdown文件，以及`_site`文件夹。_site文件夹下是存放jekyll为我们生成的整个网站的静态页面，同时在.gitignore中将_site整个文件夹ignore掉了。因此，这个文件夹是不会上传到我们的github上的repository的。

方案提出，使用另外一个文件夹存放我们的_site里面的内容，然后在里面维护一个git版本，直接上传整个静态网站到你的username.github.com上，同时添加`.nojekyll`文件（_site文件夹下已包含CNAME）。这样，github就会默认不使用jekyll的解析方式，直接采用静态网页解析方式。

这个方案是可以成功的。

但是后来文章提到的编写脚本来完成整个静态网站的commit与push，但是文章中提到的方法与当前的Ubuntu版本似乎不是相符，因此需要稍微更改一下。

我的Ubuntu版本为X64 12.04
LTS。并没有`.bash_profile`文件。因此我们需要的是在`.bashrc`文件中设置编写相应的脚本。（若像我使用ZSH的话，则需要在`.zshrc`文件中编写。）

原文采用

{% highlight bash %}
    alias build_blog="cd ~/applications/charliepark.github.com.raw;jekyll;cp -r ~/applications/charliepark.github.com.raw/_site/* ~/applications/charliepark.github.com;cd ~/applications/charliepark.github.com;git add .;git commit -am 'Latest build.';git push"

    alias bb="build_blog"
{% endhighlight %}

但是当执行到jekyll命令的时候，终端是不会往下执行，因为貌似jekyll
sleep了，具体原因我没有深究（我的jekyll版本为0.11.2）。因此我们需要将脚本稍作修改。

{% highlight bash %}
    alias build_blog="cp -r ~/workspace/pudgecon.github.com/_site/* ~/workspace/www.wangwenbo.cn;cd ~/workspace/www.wangwenbo.cn;git add .;git commit -m 'Latest build';git push origin master"

    alias bb="build_blog"
{% endhighlight %}

去掉进去项目文件夹执行jekyll命令的步骤，因为当我们编写博文的时候，jekyll已经会为我们重新生成文件了，因此个人觉得这步可以省略了。当然不放心的时候可以重新生成一次。

之前采用`git`的`submodule`方法试过，但是jekyll生成_site之前，将_site里面的全部内容删除了，因此每次都没成功，也可以我之前的方法出错了，因为我对submodule也没完全清楚。呵呵。

日后成功了再分享。


转载请注明出处：[www.王文波.cn](http://www.王文波.cn/jekyll/2012/09/02/one-solution-for-inhibit-jekyll-plugins-on-github)
