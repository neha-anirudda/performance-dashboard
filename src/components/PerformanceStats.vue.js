import { ref, onMounted } from 'vue';
const fps = ref(0);
const memory = ref(null);
onMounted(() => {
    let last = performance.now();
    let frames = 0;
    setInterval(() => {
        const now = performance.now();
        frames++;
        if (now - last >= 1000) {
            fps.value = frames;
            frames = 0;
            last = now;
            if (performance.memory) {
                const mem = performance.memory.usedJSHeapSize / 1048576;
                memory.value = mem;
            }
        }
    }, 16);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stats" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.fps);
// @ts-ignore
[fps,];
if (__VLS_ctx.memory) {
    // @ts-ignore
    [memory,];
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.memory.toFixed(2));
    // @ts-ignore
    [memory,];
}
/** @type {__VLS_StyleScopedClasses['stats']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
