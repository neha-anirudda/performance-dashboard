import { ref, watch, defineProps, defineEmits } from 'vue';
const props = defineProps();
const emit = defineEmits();
const sel = ref([...props.categories]);
watch(sel, (v) => emit('change', v));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "filter-panel" },
});
for (const [c] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
    // @ts-ignore
    [categories,];
    __VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        key: (c),
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_intrinsics.input)({
        type: "checkbox",
        value: (c),
    });
    (__VLS_ctx.sel);
    // @ts-ignore
    [sel,];
    (c);
}
/** @type {__VLS_StyleScopedClasses['filter-panel']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
