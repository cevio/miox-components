# Component List

native components introdution.

## component: appview

布局组件，用来创建webview上中下布局，使用flex实现。

``` html
<appview>...</appview>
```

**属性**

`blank` {Boolean} 用于适配头部点亮条高度

``` html
<appview blank>...</appview>
```

`horizontal` {Boolean} 横向布局左中右

``` html
<appview horizontal>...</appview>
```

**子标签**

 - `appview-head` 头部区域
 - `appview-body` 中间区域
 - `appview-foot` 脚部区域

**代码**

``` html
<appview>
    <appview-head>Header</appview-head>
    <appview-body>Body</appview-body>
    <appview-foot>Footer</appview-foot>
</appview>
```

## component: navgation

顶部导航条组件，用来头部左中右布局，或者更佳灵活的多布局

``` html
<navgation>...</navgation>
```
**子标签**

 - `navgation-item` 子项，用来碎片化头部布局

**子项属性**

 - `width` 宽度。
 - `left` 居左。
 - `center` 居中。
 - `right` 居右。

**代码**

``` html
<navgation>
    <navgation-item left>Left</navgation-item>
    <navgation-item center>Center</navgation-item>
    <navgation-item right>Right</navgation-item>
</navgation>
```

## component: cell

列表布局组件。

### cells

布局组,属性如下：

 - `border-color` 边框颜色

### cell

每组布局的最外层包裹,属性如下:

 - `linked` {Boolean} 出现右箭头,表示可跳转到链接
 - `border-color` 边框颜色
 - `left` 子项`padding-left`的值

**子项**

 - `cell-head` cell左边布局
 - `cell-body` cell中间布局
 - `cell-foot` cell右边布局


**代码**

``` html
<cells>
    <cell>
        <cell-head><img src="..." /></cell-head>
        <cell-body>我的日记本</cell-body>
        <cell-foot>16</cell-foot>
    </cell>
    <cell linked>
        <cell-head><img src="..." /></cell-head>
        <cell-body>每天日程</cell-body>
        <cell-foot>365</cell-foot>
    </cell>
    ...
</cells>
```

## component: panel

面板布局

**属性**

 - `border-color` 边框颜色

**子项**

 - `panel-head` 头部布局
 - `panel-body` 中部布局
 - `panel-foot` 底部布局

### panel-head

**属性**

 - `linked` 表示可跳转链接

### panel-foot

**属性**

 - `linked` 表示可跳转链接

**代码**

``` html
<panel>
    <panel-head linked>Title</panel-head>
    <panel-body>
        <img src="..." />
        <p>...</p>
    </panel-head>
    <panel-foot>
        <cell linked>
            <cell-head><img src="..." /></cell-head>
            <cell-body>我的日记本</cell-body>
            <cell-foot>16</cell-foot>
        </cell>
    <panel-foot>
</panel>
```

## component: aspect

一个自动按宽高比例布局的组件

**属性**

 - `ratio` 百分比
 - `width` 宽度
 - `align` 文字模式

**代码**

``` html
<aspect ratio="200%" align="center" width="50%">...</aspect>
```

## component: checkbox


## component: flex

用于快速编写flex容器的组件，通过flex容器组件，你可以快速设置flex的各种属性，无需关心它的兼容写法

**属性**

   - `flex` flex属性 flex-grow flex-shrink flex-basis 组成的速记属性
   - `direction` 容器内项目的方向
   - `justify`  容器内的各项没有占用主轴上所有可用的空间时对齐容器内的各项（水平）。
   - `alignItems` 容器内的各项的对齐方式
   - `alignContent` 在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。
   - `wrap` 灵活项目是否拆行或拆列。

**范围**

   - `flex` 同CSS写法 如'0 0 auto'
   - `direction` row | column | row-reverse | column-reverse
   - `justify`  start | end | between | center | around
   - `alignItems` start | end | between | center | around
   - `alignContent` start | end | between | center | around
   - `wrap` wrap | nowrap | wrap-reverse

```html
<flex class="test-dice" justify="between" direction="column">
    <flex justify="start" align-items="start">
        <flex-item class="test-dice-pot "></flex-item>
    </flex>
    <flex justify="center" align-items="center">
        <flex-item class="test-dice-pot "></flex-item>
    </flex>
    <flex justify="end" align-items="end">
        <flex-item class="test-dice-pot "></flex-item>
    </flex>
</flex>
```
