<template>
  <div class="controls">
    <label>Aggregation:
      <select v-model="value">
        <option value="1000">1000ms</option>
        <option value="60000">1min</option>
        <option value="300000">5min</option>
        <option value="3600000">1hour</option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue';
const emit = defineEmits<{
  (e: 'change', bucketMs: number): void
}>();
const value = ref<string>('1000');
watch(value, (v) => emit('change', Number(v)));
</script>

<style scoped>
.controls { display:flex; gap:8px; align-items:center; color:#e6eef6; }
select { background:#081229; color:#e6eef6; padding:6px; border-radius:6px; }
</style>
