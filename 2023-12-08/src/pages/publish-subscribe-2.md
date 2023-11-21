---
layout: "default"
class: "text-sm"
---

# Publish-subscribe <MarkerCore />

一级页面订阅 `on`，二三级页面发布 `emit`，订阅者取消订阅 `off`。

<v-click>

```js
const events = {};
```

</v-click>

<div class="flex">

<v-click>

```js {all|2|4|6-8|8-10|all}
function on(name, self, callback) {
  const tuple = [self, callback];

  const tuples = events[name];

  if (Array.isArray(tuples)) {
    tuples.push(tuple);
  } else {
    events[name] = [tuple];
  }
}
```

</v-click>

<div class="mx-2">

<v-click>

```js {all|2|5-9|all}
function emit(name, payload) {
  const tuples = events[name];

  if (Array.isArray(tuples)) {
    tuples.map((tuple) => {
      const [self, callback] = tuple;

      tuples.call(self, payload);
    });
  }
}
```

</v-click>

</div>

<div class="flex-grow">

<v-click>

```js {all|2|5-7|all}
function off(name, self) {
  const tuples = events[name];

  if (Array.isArray(tuples)) {
    events[name] = tuples.filter((tuple) => {
      return tuple[0] !== self;
    });
  }
}
```

</v-click>

</div>

</div>
