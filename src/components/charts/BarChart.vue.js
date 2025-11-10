import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
const props = defineProps();
const height = props.height ?? 300;
const canvas = ref(null);
let ctx = null;
let raf = 0;
const lastLen = ref(0);
function resize() {
    if (!canvas.value)
        return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.value.getBoundingClientRect();
    canvas.value.width = Math.round(rect.width * dpr);
    canvas.value.height = Math.round(rect.height * dpr);
    const c = canvas.value.getContext('2d');
    if (c)
        c.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx = c;
}
function renderBars() {
    if (!ctx || !canvas.value)
        return;
    const w = canvas.value.clientWidth;
    const h = canvas.value.clientHeight;
    const data = props.data;
    ctx.clearRect(0, 0, w, h);
    if (!data.length)
        return;
    // bucketize: simple fixed number of buckets equal to pixel width/5
    const buckets = Math.min(200, Math.max(20, Math.floor(w / 6)));
    const bucketValues = new Array(buckets).fill(0);
    const t0 = data[0].timestamp;
    const t1 = data[data.length - 1].timestamp;
    const span = Math.max(1, t1 - t0);
    for (let i = 0; i < data.length; i++) {
        const idx = Math.floor(((data[i].timestamp - t0) / span) * buckets);
        if (idx >= 0 && idx < buckets)
            bucketValues[idx] += data[i].value;
    }
    const maxVal = Math.max(...bucketValues, 1);
    const barW = w / buckets;
    ctx.fillStyle = '#60a5fa';
    for (let i = 0; i < buckets; i++) {
        const v = bucketValues[i];
        const bh = (v / maxVal) * h;
        ctx.fillRect(i * barW, h - bh, Math.max(1, Math.floor(barW - 1)), bh);
    }
}
function loop() {
    if (props.data.length !== lastLen.value) {
        lastLen.value = props.data.length;
        renderBars();
    }
    raf = requestAnimationFrame(loop);
}
onMounted(() => {
    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(loop);
});
onBeforeUnmount(() => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
});
watch(() => props.data, () => { lastLen.value = 0; }, { deep: false });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chart-root" },
    ...{ style: ({ height: __VLS_ctx.height + 'px' }) },
});
// @ts-ignore
[height,];
__VLS_asFunctionalElement(__VLS_intrinsics.canvas, __VLS_intrinsics.canvas)({
    ref: "canvas",
    ...{ class: "chart-canvas" },
});
/** @type {typeof __VLS_ctx.canvas} */ ;
// @ts-ignore
[canvas,];
/** @type {__VLS_StyleScopedClasses['chart-root']} */ ;
/** @type {__VLS_StyleScopedClasses['chart-canvas']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
