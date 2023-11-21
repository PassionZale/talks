---
layout: "default"
---

# `setData` <MarkerPattern />

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>
  <div>✅ Best Practices</div>

<div class="text-sm mt-4">

- `setData` 应只传入发生变化的字段；
- 以**数据路径**形式改变数组中的某一项或对象的某个属性；
- 仅在需要进行页面内容更新时调用 `setData`；
- 对连续的 setData 调用尽可能的进行**合并**；

</div>
</div>

<div>
  <div>❌ Incorrect Practices</div>

<div class="text-sm mt-4">

- 不要在 `setData` 中一次性传所有 `data`；
- 避免全量覆盖数组或对象；
- 避免不必要的 `setData`；
- 避免以过高的频率持续调用 `setData`；

</div>

</div>

</div>