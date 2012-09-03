---
layout: post
title: "使用pygments为代码块添加语法高亮"
description: "add code highlight with pygments"
category: jekyll
tags: ['jekyll', 'pygments', 'code-highlight']
---
{% include JB/setup %}

比较如下代码块：

一、

    class Test {
      public static void main(String[] args) {
        return null;
      }
    }

二、

{% highlight java linenos %}
  class Test {
    public static void main(String[] args) {
      return null;
    }
  }
{% endhighlight %}

很明显的，第二种方式更加美观，也更加直观，更容易让人一目了然。实现方法其实也比较简单，下面一步一步讲到。

博客模板为[jekyll](http://jekyllbootstrap.com/)，托管平台为[Github](http://www.github.com)。

首先安装[pygments](http://pygments.org/)。

个人使用Ubuntu 12.04 LTS X86。安装方法：

{% highlight bash %}
sudo apt-get install python-pygments
{% endhighlight %}

安装完成，输入：

{% highlight bash %}
pygmentize -S default -f html > pygments.css
{% endhighlight %}

此时会在当前目录下生成一个名为`pygments.css`的样式文件。

将此样式文件拷贝到博客项目的`样式目录`下，同时在修改`模板`，添加样式引用（&lt;link&gt;）。

`markdown`文件中，将需要高亮显示的代码段修改为：

<pre><code>&#123;% highlight java linenos %&#125;
class Test {
  public static void main(String[] args) {
    return null;
  }
}
&#123;% endhighlight %&#125;</code></pre>

其中，java为语言各类，linenos为显示行数。

这样子就OK了。

具体文档请参考：[http://pygments.org/docs/quickstart/](http://pygments.org/docs/quickstart/)


转载请注明出处：[www.王文波.cn](http://www.王文波.cn/jekyll/2012/09/03/add-code-highlight-with-pygments/)
