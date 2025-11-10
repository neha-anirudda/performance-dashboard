<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { renderLineChart } from '../../utils/canvasUtils';
import type { DataPoint } from '../../types/dashboard.types';

const props = defineProps<{ data: DataPoint[] }>();

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

function resizeCanvas() {
  const el = canvas.value;
  if (!el) return; // ✅ prevent undefined access

  const dpr = window.devicePixelRatio || 1;
  const rect = el.getBoundingClientRect();
  el.width = rect.width * dpr;
  el.height = rect.height * dpr;

  const context = el.getContext('2d');
  if (context) {
    context.scale(dpr, dpr);
    ctx = context;
  }
}

onMounted(() => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas);
});

watch(
  () => props.data,
  (newData) => {
    if (ctx && newData && newData.length > 0) {
      renderLineChart(ctx, newData);
    }
  },
  { deep: true }
);
</script>
