import { ref, onMounted, onUnmounted } from 'vue';
export function useDataStream(options = {}) {
    const { intervalMs = 100, windowSize = 10000 } = options;
    const data = ref([]);
    let timer;
    onMounted(() => {
        timer = window.setInterval(() => {
            const now = Date.now();
            const next = {
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
        if (timer !== undefined)
            clearInterval(timer);
    });
    return { data };
}
