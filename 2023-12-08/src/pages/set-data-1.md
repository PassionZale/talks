---
layout: "default"
class: "text-sm"
---

# `setData` <MarkerTips />

<div class="grid grid-cols-3 gap-x-4">

<div>

<v-click>

👉 更新流程

</v-click>

<v-click>

```js
async loadData() {
  const { data } = await request()

  this.setData({ list: data })
}
```

</v-click>

<v-clicks>

- 逻辑层虚拟 DOM 树的遍历和更新，触发组件生命周期等；
- 将 data 从逻辑层传输到视图层；
- 视图层虚拟 DOM 树的更新、真实 DOM 元素的更新并触发页面渲染更新。

</v-clicks>

</div>

<div class="-mt-10">

<v-click>

👉 数据通信

</v-click>

<v-click>

```js {all|6-8|all}
async loadData() {
  const { list } = this.data

  const { data } = await request()

  this.setData({
    list: [...list, ...data]
  })
}
```

</v-click>

<arrow v-click x1="400" y1="420" x2="230" y2="330" color="#ef4444" width="3" arrowSize="1" />

<v-after>

对于第 2 步，数据传输的耗时与**数据量的大小**正相关。

每一次调用 `loadData` 后，`list` 会逐渐变大，

在上拉加载下一页等常规场景中，加载的页数越多，导致渲染的越卡越慢。

</v-after>

</div>

<div>

<div class="-mt-20">

<v-click>

👉 优化

</v-click>

<v-click>

```js {all|6-8|all}
async loadData() {
  const { list } = this.data

  const { data } = await request()

  this.setData({
    [`list[${list.length}]`]: data
  })
}
```

</v-click>

<v-click>

每次调用 `setData` ，数据通信大小都相同，无论分页多少次，都能保证每次高效的渲染。

</v-click>

</div>

</div>

</div>
