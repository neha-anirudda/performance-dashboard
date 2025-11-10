<template>
  <div class="filter-panel">
    <label v-for="c in categories" :key="c" style="display:block; margin-bottom:6px;">
      <input type="checkbox" :value="c" v-model="sel" /> {{ c }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
const props = defineProps<{ categories: string[] }>();
const emit = defineEmits<{
  (e: 'change', selected: string[]): void
}>();
const sel = ref<string[]>([...props.categories]);
watch(sel, (v) => emit('change', v));
</script>

<style scoped>
.filter-panel { padding:8px; background:#071026; border-radius:8px; color:#cfe8ff; }
</style>
