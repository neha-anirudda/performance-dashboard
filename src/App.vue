<template>
  <div id="app" style="padding:18px; background:#041027; min-height:100vh; color:#dff3ff;">
    <h1 style="margin-bottom:12px;">Performance Dashboard (Vue)</h1>

    <div style="display:flex; gap:12px; align-items:flex-start;">
      <div style="flex:1;">
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
          <TimeRangeSelector @change="onBucketChange" />
          <FilterPanel :categories="categories" @change="onFilterChange" />
        </div>

        <div style="display:grid; grid-template-columns: 1fr; gap:12px;">
          <LineChart :data="displayData" :height="300" />
          <BarChart :data="displayData" :height="180" />
          <ScatterPlot :data="displayData" :height="180" />
          <Heatmap :data="displayData" :height="180" />
        </div>
      </div>

      <div style="width:360px;">
        <PerformanceMonitor />
        <div style="margin-top:12px;">
          <button @click="toggleStress" style="padding:8px 10px; border-radius:6px; background:#0ea5a6; color:#012">Toggle Stress</button>
          <div style="margin-top:8px; color:#bfe">Points: {{ data.length }}</div>
        </div>
      </div>
    </div>

    <div style="margin-top:18px;">
      <h3>Data Table (virtualized)</h3>
      <DataTable :data="displayData" :viewportRows="20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDataStream } from './composables/useDataStream';
import LineChart from './components/charts/LineChart.vue';
import BarChart from './components/charts/BarChart.vue';
import ScatterPlot from './components/charts/ScatterPlot.vue';
import Heatmap from './components/charts/Heatmap.vue';
import TimeRangeSelector from './components/controls/TimeRangeSelector.vue';
import FilterPanel from './components/controls/FilterPanel.vue';
import DataTable from './components/DataTable.vue';
import PerformanceMonitor from './components/PerformanceMonitor.vue';
import { aggregateAverage } from './utils/aggregate';

const { data } = useDataStream({ intervalMs: 100, windowSize: 20000 });

// simple categories example (your data has no categories by default)
const categories = ['A', 'B', 'C'];
const activeCategories = ref<string[]>([...categories]);

// aggregation bucket in ms
const bucketMs = ref<number>(1000);

function onBucketChange(ms: number) {
  bucketMs.value = ms;
}

function onFilterChange(sel: string[]) {
  activeCategories.value = sel;
}

// filter & aggregate pipeline (for demo we don't actually filter by category because our stream lacks categories)
// but keep pipeline extensible
const filtered = computed(() => {
  // if your data has categories, filter here
  return data.value;
});

// aggregated / downsampled view
const displayData = computed(() => {
  // when bucketMs is 1000 we may want raw or aggregated depending on zoom - here we aggregate only if bucketMs > 1000
  if (bucketMs.value <= 1000) return filtered.value;
  return aggregateAverage(filtered.value, bucketMs.value);
});

function toggleStress() {
  // quick stress: append a burst of points
  for (let i = 0; i < 5000; i++) {
    const last = data.value[data.value.length - 1] ?? { timestamp: Date.now(), value: 1000 };
    const next = { timestamp: Date.now() + i, value: last.value + (Math.random() - 0.5) * 6, id: `b${i}` };
    data.value = data.value.concat(next);
    if (data.value.length > 50000) data.value = data.value.slice(data.value.length - 50000);
  }
}
</script>

<style>
/* light styles kept inline above for clarity */
</style>
