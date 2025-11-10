<!-- src/components/DataTable.vue -->
<template>
  <div class="data-table p-4 bg-gray-900 text-gray-100 rounded-xl shadow">
    <h2 class="text-lg font-semibold mb-2">📊 Data Table</h2>
    <table class="w-full border-collapse border border-gray-700 text-sm">
      <thead>
        <tr class="bg-gray-800">
          <th class="border border-gray-700 p-2 text-left">Timestamp</th>
          <th class="border border-gray-700 p-2 text-left">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(point, i) in data" :key="i" class="hover:bg-gray-800">
          <td class="border border-gray-700 p-2">{{ formatTime(point.timestamp) }}</td>
          <td class="border border-gray-700 p-2">{{ point.value.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { DataPoint } from '../types/dashboard.types';

const props = defineProps<{ data: DataPoint[] }>();

function formatTime(ts: number): string {
  const date = new Date(ts);
  return date.toLocaleTimeString();
}
</script>

<style scoped>
.data-table {
  max-height: 300px;
  overflow-y: auto;
}
</style>
