<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <canvas ref="canvas" class="rounded-lg border border-gray-300 bg-black"></canvas>
    <div class="text-sm text-gray-400 mt-2">FPS: {{ fps }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDataStream } from "../composables/useDataStream";

const { data } = useDataStream();
const canvas = ref<HTMLCanvasElement | null>(null);
const fps = ref(0);

onMounted(() => {
  const ctx = canvas.value!.getContext("2d")!;
  const width = window.innerWidth / 1.5;
  const height = window.innerHeight / 1.5;
  canvas.value!.width = width;
  canvas.value!.height = height;

  let lastTime = performance.now();
  let frameCount = 0;
  let lastFpsUpdate = performance.now();

  const draw = () => {
    const now = performance.now();
    const delta = now - lastTime;
    lastTime = now;
    frameCount++;

    // Update FPS every second
    if (now - lastFpsUpdate > 1000) {
      fps.value = frameCount;
      frameCount = 0;
      lastFpsUpdate = now;
    }

    // Throttle drawing to ~30 FPS max
    if (delta < 33) {
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "lime";
    ctx.beginPath();

    const len = data.value.length;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const x = (i / len) * width;
        const y = height - (data.value[i].value / 100) * height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
    requestAnimationFrame(draw);
  };

  draw();
});
</script>

<style scoped>
canvas {
  max-width: 90%;
  max-height: 80vh;
}
</style>
