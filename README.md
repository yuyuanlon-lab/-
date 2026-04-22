# 建筑师个人网站基础版

这个目录现在已经是一个可以直接继续改的静态网站骨架，适合先根据你的草图和作品内容逐步迭代。

## 现在的结构

- [index.html](/D:/个人网站/coding/index.html)：页面入口
- [styles.css](/D:/个人网站/coding/styles.css)：视觉样式和布局
- [app.js](/D:/个人网站/coding/app.js)：模块渲染逻辑
- [content/site.js](/D:/个人网站/coding/content/site.js)：所有文字和项目内容
- [assets/images/](/D:/个人网站/coding/assets/images)：所有图片

## 你之后怎么和我配合

1. 你发我手绘草图，我按你的版式改布局。
2. 你把图片和文案发我，我替换进对应模块。
3. 你如果想调整模块顺序、图片大小、留白、字体气质，我继续改。

## 你自己能直接改的地方

- 改文字：编辑 `content/site.js`
- 换图片：替换 `assets/images/` 里的文件，或者告诉我要新增哪些图片位
- 改结构：告诉我你想把哪一块挪到哪里，我来改 `app.js` 和 `styles.css`

## 浏览网站

- 直接双击 [index.html](/D:/个人网站/coding/index.html)
- 或者双击 [open-site.bat](/D:/个人网站/coding/open-site.bat)

## 自由替换图片

- 首页主图固定使用 [assets/images/homepage.png](/D:/个人网站/coding/assets/images/homepage.png)
- `Architecture` 九宫格固定使用下面这些文件名：
- [architecture-01.png](/D:/个人网站/coding/assets/images/architecture-01.png)
- [architecture-02.png](/D:/个人网站/coding/assets/images/architecture-02.png)
- [architecture-03.png](/D:/个人网站/coding/assets/images/architecture-03.png)
- [architecture-04.png](/D:/个人网站/coding/assets/images/architecture-04.png)
- [architecture-05.png](/D:/个人网站/coding/assets/images/architecture-05.png)
- [architecture-06.png](/D:/个人网站/coding/assets/images/architecture-06.png)
- [architecture-07.png](/D:/个人网站/coding/assets/images/architecture-07.png)
- [architecture-08.png](/D:/个人网站/coding/assets/images/architecture-08.png)
- [architecture-09.png](/D:/个人网站/coding/assets/images/architecture-09.png)

使用方法很简单：

1. 把你的图片改成上面对应的文件名。
2. 放进 [assets/images](/D:/个人网站/coding/assets/images)。
3. 刷新页面。

这样你不用改代码，只替换图片文件就可以。

补充说明：

- 现在页面会按“文件名”自动识别资源，不再要求固定后缀。
- 例如你可以放 `architecture-01.png`，也可以放 `architecture-01.jpg`、`architecture-01.jpeg`、`architecture-01.webp`、`architecture-01.pdf`
- 页面会自动按同名文件优先匹配并显示

## 下一步最适合做的事

把你的第一页手绘草图发给我。我会按草图把首页先精确搭出来，然后再接你的真实内容。
