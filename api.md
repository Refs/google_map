


## 地图本地化

### 语言本地化

默认情况下，Google Maps JavaScript API 按照浏览器中的指定使用用户首选语言设置来显示文本信息，例如：控件的名称、版权声明、行车路线和地图上的标签。在大多数情况下，最好遵守浏览器的设置。不过，如果想让 Maps JavaScript API 忽略浏览器的语言设置，可通过在加载 Maps JavaScript API 代码时向 <script> 添加一个 language 参数，强制浏览器使用特d定语言显示信息。

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&language=ja&region=JP">
</script>
```

### 在中国境内使用google地图
Google Maps JavaScript API 在中国境内的服务域名是 http://maps.google.cn。向中国用户提供内容时，请将 https://maps.googleapis.com 替换为 http://maps.google.cn。例如：

```html
<script src="http://maps.google.cn/maps/api/js?key=YOUR_API_KEY">
</script>

```
如果您的应用是特别针对中国用户而开发的，则应同时添加 region 和 language 参数。API 支持将 language 参数的值指定为 zh-CN 和 zh-TW。

```html
<script src="http://maps.google.cn/maps/api/js?region=cn&language=zh-CN&key=YOUR_API_KEY">
</script>
```

## 在地图上绘制

### 标记 

标记和图标都是 Marker 类型的对象。您可以在标记的构造函数中设置一个自定义图标，也可以通过对该标记调用 setIcon() 来进行设置。

标记设计为具有交互能力。例如，默认情况下，标记可以接收“点击”事件，这样您就可以通过添加一个事件侦听器来弹出用于显示自定义信息的信息窗口。


### 增加与移除标记的实例

https://developers.google.cn/maps/documentation/javascript/examples/marker-remove


### 可视化工具的扩展 

Google Maps + D3  http://bl.ocks.org/donmccurdy/bd239cc355de227b1104503fc9d435d2 这或许才是真正的方向；

按ctrl + shift + b编译, 如果没有配置过，task, 就会在上面提示(如图)。




