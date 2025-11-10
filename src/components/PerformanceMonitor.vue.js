import { onMounted, ref } from "vue";
import { useDataStream } from "../composables/useDataStream";
const { data } = useDataStream();
const canvas = ref(null);
const fps = ref(0);
onMounted(() => {
    const ctx = canvas.value.getContext("2d");
    const width = window.innerWidth / 1.5;
    const height = window.innerHeight / 1.5;
    canvas.value.width = width;
    canvas.value.height = height;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    const draw = () => {
        const now = performance.now();
        const delta = now - lastTime;
        lastTime = now;
        frameCount++;
        // Update FPS every second
        if (now - lastFpsUpdate > 1000) {
            fps.value = frameCount;
            frameCount = 0;
            lastFpsUpdate = now;
        }
        // Throttle drawing to ~30 FPS max
        if (delta < 33) {
            requestAnimationFrame(draw);
            return;
        }
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "lime";
        ctx.beginPath();
        const len = data.value.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                const x = (i / len) * width;
                const y = height - (data.value[i].value / 100) * height;
                if (i === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        requestAnimationFrame(draw);
    };
    draw();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "w-full h-full flex flex-col items-center justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.canvas, __VLS_intrinsics.canvas)({
    ref: "canvas",
    ...{ class: "rounded-lg border border-gray-300 bg-black" },
});
/** @type {typeof __VLS_ctx.canvas} */ ;
// @ts-ignore
[canvas,];
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-sm text-gray-400 mt-2" },
});
(__VLS_ctx.fps);
// @ts-ignore
[fps,];
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
