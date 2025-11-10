import { ref, watch, defineEmits } from 'vue';
const emit = defineEmits();
const value = ref('1000');
watch(value, (v) => emit('change', Number(v)));
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
    ...{ class: "controls" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.value),
});
// @ts-ignore
[value,];
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "1000",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "60000",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "300000",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "3600000",
});
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
});
export default {};
