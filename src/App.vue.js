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
const activeCategories = ref([...categories]);
// aggregation bucket in ms
const bucketMs = ref(1000);
function onBucketChange(ms) {
    bucketMs.value = ms;
}
function onFilterChange(sel) {
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
    if (bucketMs.value <= 1000)
        return filtered.value;
    return aggregateAverage(filtered.value, bucketMs.value);
});
function toggleStress() {
    // quick stress: append a burst of points
    for (let i = 0; i < 5000; i++) {
        const last = data.value[data.value.length - 1] ?? { timestamp: Date.now(), value: 1000 };
        const next = { timestamp: Date.now() + i, value: last.value + (Math.random() - 0.5) * 6, id: `b${i}` };
        data.value = data.value.concat(next);
        if (data.value.length > 50000)
            data.value = data.value.slice(data.value.length - 50000);
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "app",
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
/** @type {[typeof TimeRangeSelector, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TimeRangeSelector, new TimeRangeSelector({
    ...{ 'onChange': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onChange': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ change: {} },
    { onChange: (__VLS_ctx.onBucketChange) });
// @ts-ignore
[onBucketChange,];
var __VLS_2;
/** @type {[typeof FilterPanel, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(FilterPanel, new FilterPanel({
    ...{ 'onChange': {} },
    categories: (__VLS_ctx.categories),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onChange': {} },
    categories: (__VLS_ctx.categories),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
const __VLS_12 = ({ change: {} },
    { onChange: (__VLS_ctx.onFilterChange) });
// @ts-ignore
[categories, onFilterChange,];
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
/** @type {[typeof LineChart, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(LineChart, new LineChart({
    data: (__VLS_ctx.displayData),
    height: (300),
}));
const __VLS_15 = __VLS_14({
    data: (__VLS_ctx.displayData),
    height: (300),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[displayData,];
/** @type {[typeof BarChart, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(BarChart, new BarChart({
    data: (__VLS_ctx.displayData),
    height: (180),
}));
const __VLS_19 = __VLS_18({
    data: (__VLS_ctx.displayData),
    height: (180),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
// @ts-ignore
[displayData,];
/** @type {[typeof ScatterPlot, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(ScatterPlot, new ScatterPlot({
    data: (__VLS_ctx.displayData),
    height: (180),
}));
const __VLS_23 = __VLS_22({
    data: (__VLS_ctx.displayData),
    height: (180),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
// @ts-ignore
[displayData,];
/** @type {[typeof Heatmap, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(Heatmap, new Heatmap({
    data: (__VLS_ctx.displayData),
    height: (180),
}));
const __VLS_27 = __VLS_26({
    data: (__VLS_ctx.displayData),
    height: (180),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[displayData,];
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
/** @type {[typeof PerformanceMonitor, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(PerformanceMonitor, new PerformanceMonitor({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.toggleStress) },
    ...{ style: {} },
});
// @ts-ignore
[toggleStress,];
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
(__VLS_ctx.data.length);
// @ts-ignore
[data,];
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
/** @type {[typeof DataTable, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(DataTable, new DataTable({
    data: (__VLS_ctx.displayData),
    viewportRows: (20),
}));
const __VLS_35 = __VLS_34({
    data: (__VLS_ctx.displayData),
    viewportRows: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
// @ts-ignore
[displayData,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
