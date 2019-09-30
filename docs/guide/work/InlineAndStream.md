# 内联元素与流

**块级元素负责结构，内联元素负责内容。**



## 你知道字母x在css中的作用吗

字母 `x` css世界中的隐藏地位，`vertical-align: baseline;` 默认基线，就是 `x` 的底线。

字母 `x` 衍生出了 `x-height` 概念， 进一步衍生了 `ex` css相对单位，指小写字母 `x` 的高度。

因此，`ex` 主要受字体影响比较大，不稳定，不适合做元素尺寸。

那问题来了，`ex` 连自己的本职工作都做不好，难道还有指望副业开挂？

**ex的 价值就在其副业上——不受字体和字号影响的内联元素的垂直居中对齐效果**

* ie6都支持，没有理由不用
* 基于ex单位的天然垂直居中对齐效果实例页面 https://demo.cssworld.cn/5/1-1.php





## line-height css世界高度体系的基石

div的高度是有行高 `line-height`决定的，而非文字。  https://demo.cssworld.cn/5/2-1.php

对于非替换元素的纯内联元素，其高度完全有 `line-height 决定` ，所有浏览器都支持，`1px`不差。

`line-height` 不是可以使用单行文字垂直居中，也可以实现多行文字居中。 

* https://demo.cssworld.cn/5/2-4.php



## line-height 单位

* `normal` , 默认值，实际是一个变量
  * 不同浏览器，不同字体的默认值不同，
  * 微软雅黑 `≈1.32`
  * 宋体 `≈1.14`
* 数值 ` line-height:15;`
* 百分比值 `line-height:150%;`
* 长度值： `line-height: 1em; line-height: 1rem; line-height: 20px;`
* 推荐使用 -数值和 `px`

他们之间的不同之处在哪里 https://demo.cssworld.cn/5/2-5.php



## line-height的好朋友vertical-align

### vertical-align都有哪些值

* 兼容性好，ie6都兼容

*  基于线对齐， `baseline`  `top`  `middle` `bttom`

* 基于文本对齐， `text-top`  `text-bottom`

* 基于上标下标对齐， `sub` `supper`

* 数值百分比，`20px` `20em` `20%`

  体会下https://demo.cssworld.cn/5/3-2.php