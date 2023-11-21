---
layout: two-cols
---

# Enhancer <MarkerCore />

```js {all|4-11|13-17|19|all}
const UserEntity from '/entities/user'

const Enhancer = (props, options = {}) => {
  // overwrite onLoad
  const { onLoad } = props
  onLoad && delete props.onLoad
  props.onLoad = function() {
    // do something what you want...
    // exec original onLoad
    onLoad && onLoad.apply(this, arguments);
  };

  // check login
  const { checkLogin } = options
  if (checkLogin && !UserEntity.isLogin) {
    wx.redirectTo({ url: '/pages/login' })
  }

  return props
}
```

::right::

<div class="ml-2">
<h1>&nbsp;</h1>

<div class="pt-2" />

```js {all|4-17|19-20|all}
import Enhancer from "/enhancer";

// enhancer page props
const props = Enhancer(
  {
    data: {},

    onLoad(options) {},

    onUnload() {},

    // etc...
  },
  {
    checkLogin: true,
  }
);

// create page
Page(props);
```

</div>
