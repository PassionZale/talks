---
layout: "default"
class: "text-sm"
---

# IntersectionObserver <MarkerTips />

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

- `<item />` 的节点树巨大；
- `<item />` 中存在定时器；
- `<item />` 挂载时需要发送请求；
- `<item />` 会在 `onShow` 处理异步实务；

如果它是一个秒杀类型的营促销组件，20 多个秒杀倒计时便会让页面崩溃，

客户端（手机），大部分最多 5 条数据便会撑满整个**视口**，我们可以通过 IntersectionObserver 来判断如果组件在 **视口** 就挂载，反之则卸载，

确保每次挂载的组件只有 5 个，而不是全量显示。

</div>

<div class="-mt-10">

```js {all|1|5|9-10|12|14|all}
const showNum = 0.5; // 上下半屏

const { windowHeight } = wx.getSystemInfoSync();

this.observer = this.createIntersectionObserver();

this.observer
  .relativeToViewport({
    top: showNum * windowHeight,
    bottom: showNum * windowHeight,
  })
  .observe(`#${id}`, (res) => {
    let { intersectionRatio } = res;
    if (intersectionRatio === 0) {
      // 超过预定范围，从页面卸载
      this.setData({ showSlot: false });
    } else {
      // 达到预定范围，挂载进页面
      this.setData({ showSlot: true });
    }
  });
```

</div>

</div>
