---
layout: default
class: "text-sm"
---

# Publish-subscribe <MarkerPattern />

Publish-subscribe 模式，用于在小程序种跨页面、组件的通信。

<!-- <div v-click-hide>

在处理业务需求的时候，常常会遇到一些情况，在二级或者三级页面进行某些操作或者变更后，需要将结果通知到上级页面去。比如：

- 选择了某些配置项，点击保存后，外部页面能够立即变更；
- 在上传头像页面，上传完毕后，外部页面的头像能够立即显示为新头像；
- 等等...

</div> -->

<!-- <div class="grid grid-cols-3 gap-x-4 -mt-30"> -->
<div class="grid grid-cols-3 gap-x-4">

<v-click>

```js {all|2-4|6-10|all}
App({
  addListener(callback) {
    this.callback = callback;
  },

  setChangedData(payload) {
    if (this.callback) {
      this.callback(payload);
    }
  },
});
```

</v-click>

<v-click>

```js {5-9|all}
const app = getApp();

Page({
  onLoad() {
    app.addListner((payload) => {
      this.setData({
        data: payload,
      });
    });
  },
});
```

</v-click>

<v-click>

```js {5|all}
const app = getApp();

Page({
  onClick() {
    app.setChangedData("payload");
  },
});
```

</v-click>

</div>

<v-click>

以上是一个跨页通信的 `demo`，只能支持一种 `Event` 的通知，而且也不能针对这个 `Event` 添加多个监听者，一个基本的 Publish-subscribe 需要具备：

- 支持多种 `Event` 的通知；
- 支持对某一 `Event` 可以添加多个监听者；
- 支持对某一 `Event` 可以移除某一监听者；

</v-click>
