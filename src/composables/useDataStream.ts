import { ref, onMounted, onUnmounted } from 'vue';
import type { DataPoint } from '../types/dashboard.types';

interface StreamOptions {
  intervalMs?: number;
  windowSize?: number;
}

export function useDataStream(options: StreamOptions = {}) {
  const { intervalMs = 100, windowSize = 10000 } = options;
  const data = ref<DataPoint[]>([]);
  let timer: number | undefined;

  onMounted(() => {
    timer = window.setInterval(() => {
      const now = Date.now();
      const next: DataPoint = {
        timestamp: now,
        value: 1000 + Math.sin(now / 500) * 50 + Math.random() * 20,
      };
      data.value.push(next);
      if (data.value.length > windowSize) {
        data.value.shift();
      }
    }, intervalMs);
  });

  onUnmounted(() => {
    if (timer !== undefined) clearInterval(timer);
  });

  return { data };
}
