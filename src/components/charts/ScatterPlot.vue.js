import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
const props = defineProps();
const height = props.height ?? 300;
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
function renderScatter() {
    if (!ctx || !canvas.value)
        return;
    const w = canvas.value.clientWidth;
    const h = canvas.value.clientHeight;
    ctx.clearRect(0, 0, w, h);
    const data = props.data;
    if (!data.length)
        return;
    // bounds sample
    let min = Infinity, max = -Infinity;
    const sampleStep = Math.max(1, Math.floor(data.length / Math.min(w, 2000)));
    for (let i = 0; i < data.length; i += sampleStep) {
        const v = data[i].value;
        if (v < min)
            min = v;
        if (v > max)
            max = v;
    }
    if (!isFinite(min) || !isFinite(max)) {
        min = 0;
        max = 1;
    }
    if (min === max) {
        min -= 1;
        max += 1;
    }
    const t0 = data[0].timestamp;
    const t1 = data[data.length - 1].timestamp;
    const span = Math.max(1, t1 - t0);
    const maxPoints = Math.min(w * 2, 5000);
    const stride = Math.max(1, Math.floor(data.length / maxPoints));
    ctx.fillStyle = 'rgba(255, 193, 7, 0.9)';
    for (let i = 0; i < data.length; i += stride) {
        const p = data[i];
        const x = ((p.timestamp - t0) / span) * w;
        const y = h - ((p.value - min) / (max - min)) * h;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
}
function loop() {
    renderScatter();
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
watch(() => props.data, () => { }, { deep: false });
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
