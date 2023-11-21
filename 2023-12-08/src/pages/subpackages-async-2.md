---
layout: default
class: text-sm
---

# Subpackages-async <MarkerCore />

通过异步分包，异步加载组件、模块。

<div class="grid grid-cols-3 gap-x-4">

<div>

```json
// app.json

{
	root: 'asyncPkgs',
	pages: []
},
```

</div>

<div>

```json
// page.json or component.json

{
  "usingComponents": {
    "foo": "/asyncPkgs/foo/foo"
  },
  "componentPlaceholder": {
    "foo": "view"
  }
}
```

```html
<!-- page.wxml or component.wxml -->

<foo />
```

</div>

<div>

```js
// page.js or component.js

// 使用回调函数风格的调用
require(
  "/asyncPkgs/utils.js", 
  (utils) => {
    // Wechat MiniProgram
    console.log(utils.whoami);
  });

// 或者使用 Promise 风格的调用
require.async("/asyncPkgs/index.js")
  .then((pkg) => {
    // 'common'
    pkg.getPackageName(); 
  });
```

</div>

</div>
