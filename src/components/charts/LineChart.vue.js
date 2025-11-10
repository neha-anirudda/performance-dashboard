import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { renderLineChart } from '../../utils/canvasUtils';
const props = defineProps();
const canvas = ref(null);
let ctx = null;
function resizeCanvas() {
    const el = canvas.value;
    if (!el)
        return; // ✅ prevent undefined access
    const dpr = window.devicePixelRatio || 1;
    const rect = el.getBoundingClientRect();
    el.width = rect.width * dpr;
    el.height = rect.height * dpr;
    const context = el.getContext('2d');
    if (context) {
        context.scale(dpr, dpr);
        ctx = context;
    }
}
onMounted(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas);
});
watch(() => props.data, (newData) => {
    if (ctx && newData && newData.length > 0) {
        renderLineChart(ctx, newData);
    }
}, { deep: true });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
