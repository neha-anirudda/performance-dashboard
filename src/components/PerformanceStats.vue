<template>
  <div class="stats">
    <p>FPS: {{ fps }}</p>
    <p v-if="memory">Memory: {{ memory.toFixed(2) }} MB</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const fps = ref(0);
const memory = ref<number | null>(null);

onMounted(() => {
  let last = performance.now();
  let frames = 0;
  setInterval(() => {
    const now = performance.now();
    frames++;
    if (now - last >= 1000) {
      fps.value = frames;
      frames = 0;
      last = now;
      if ((performance as any).memory) {
        const mem = (performance as any).memory.usedJSHeapSize / 1048576;
        memory.value = mem;
      }
    }
  }, 16);
});
</script>

<style scoped>
.stats {
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  padding: 8px 12px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 14px;
  color: #0f0;
}
</style>
