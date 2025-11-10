import { ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps();
const height = props.height ?? 240;
const canvas = ref(null);
let ctx = null;
let raf = 0;
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
function renderHeatmap() {
    if (!ctx || !canvas.value)
        return;
    const w = canvas.value.clientWidth;
    const h = canvas.value.clientHeight;
    ctx.clearRect(0, 0, w, h);
    const data = props.data;
    if (!data.length)
        return;
    const cols = Math.min(200, Math.max(50, Math.floor(w / 4)));
    const rows = Math.min(100, Math.max(20, Math.floor(h / 4)));
    const grid = new Array(cols * rows).fill(0);
    const t0 = data[0].timestamp;
    const t1 = data[data.length - 1].timestamp;
    const span = Math.max(1, t1 - t0);
    for (let i = 0; i < data.length; i++) {
        const p = data[i];
        const xNorm = (p.timestamp - t0) / span;
        const yNorm = Math.min(1, Math.max(0, (p.value - -1000) / 3000)); // rough normalization; adjust if needed
        const cx = Math.floor(xNorm * (cols - 1));
        const cy = Math.floor((1 - yNorm) * (rows - 1));
        const idx = cy * cols + cx;
        if (idx >= 0 && idx < grid.length)
            grid[idx]++;
    }
    const max = Math.max(...grid, 1);
    // draw cells
    const cellW = w / cols;
    const cellH = h / rows;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const v = grid[r * cols + c];
            const intensity = v / max; // 0..1
            if (intensity <= 0)
                continue;
            // color ramp: blue -> red
            const rC = Math.round(255 * intensity);
            const gC = Math.round(80 * (1 - intensity));
            const bC = Math.round(255 * (1 - intensity));
            ctx.fillStyle = `rgba(${rC},${gC},${bC},${Math.min(0.9, intensity)})`;
            ctx.fillRect(c * cellW, r * cellH, Math.ceil(cellW), Math.ceil(cellH));
        }
    }
}
function loop() {
    renderHeatmap();
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
