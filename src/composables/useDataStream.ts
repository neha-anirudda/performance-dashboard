import { ref, onUnmounted } from "vue";

export interface DataPoint {
  timestamp: number;
  value: number;
}

/**
 * Simulates a data stream at a safe, throttled rate.
 * Keeps only the latest 1000 data points for performance.
 */
export function useDataStream() {
  const data = ref<DataPoint[]>([]);
  let timer: NodeJS.Timeout | null = null;

  const pushRandom = () => {
    const now = Date.now();
    const newValue = 50 + Math.random() * 50; // 50–100 range
    data.value.push({ timestamp: now, value: newValue });

    // Keep only the last 1000 points
    if (data.value.length > 1000) {
      data.value.splice(0, data.value.length - 1000);
    }
  };

  // Update every 500 ms (0.5 sec)
  timer = setInterval(pushRandom, 500);

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  return { data };
}
