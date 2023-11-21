---
layout: default
---

# Enhancer <MarkerTips />

<div>

某些场景，我们可能需要去增强 `Page`，例如：

- 在所有 `Page` 重写生命周期钩子；
- 在所有 `Page` 中填充 `data` 属性；
- 在某些 `Page` 中增加登录校验；
- ...

还记得 `React` 中的 `HOC` 吗？

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

参考 `HOC`，我们可以编写一个 `Enhancer` 来增强小程序的 `Page`：

</div>
