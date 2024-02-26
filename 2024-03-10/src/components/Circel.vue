<template>
  <div class="ciclegraph" ref="graph">
    <logos-nodejs-icon class="circel" />
    <logos-npm-icon class="circel" />
    <logos-webpack class="circel" />
    <logos-vue class="circel" />
    <logos-docker-icon class="circel" />
    <logos-typescript-icon-round class="circel" />
    <logos-react class="circel" />
    <logos-nextjs-icon class="circel" />
    <logos-vercel-icon class="circel" />
    <Slidev class="circel" />
    <logos-astro-icon class="circel" />
    <logos-vitejs class="circel" />
    <logos-tailwindcss-icon class="circel" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const graph = ref<HTMLElement | null>();

onMounted(() => {
  const circleElements = graph.value.childNodes;

  let angle = 360 - 90;
  let dangle = 360 / circleElements.length;

  for (let i = 0; i < circleElements.length; i++) {
    let circle = circleElements[i] as HTMLElement;
    angle += dangle;

    circle.style.transform = `rotate(${angle}deg) translate(${
      graph.value.clientWidth / 2
    }px) rotate(-${angle}deg)`;
  }
});
</script>

<style scoped>
.ciclegraph {
  position: relative;
  width: 500px;
  height: 500px;
  margin: calc(100px / 2 + 0px);
}

.ciclegraph:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid teal;
  width: calc(100% - 2px * 2);
  height: calc(100% - 2px * 2);
  border-radius: 50%;
}

.ciclegraph .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: calc(-100px / 2);
  background: teal;
  border-radius: 50%;
}

</style>