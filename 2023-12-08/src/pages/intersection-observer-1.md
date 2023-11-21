---
layout: "default"
class: "text-sm"
---

# IntersectionObserver <MarkerCore />

IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

```js
async loadData() {
  const { list } = this.data

  const { data } = await request()

  this.setData({
    [`list[${list.length}]`]: data
  })
}
```
</div>

<div>

```html
<view 
  wx:for="{{list}}" 
  wx:key="index" 
  wx:for-item="sourceData"
>
  <item wx:for="{{sourceData}}" wx:key="*this">
    {{ item }}
  </item>
</view>
```

</div>
</div>

我们通过以**数据路径**形式将每次分页的数据存储，确保了 `setData` 高效的更新，

但是**视图层**的 `WXML` 节点树仍然会不断的增加，

一个太大的 `WXML` 节点树会增加内存的使用，样式重排时间也会更长，影响体验。
