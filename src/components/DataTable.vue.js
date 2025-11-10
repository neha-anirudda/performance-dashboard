const props = defineProps();
function formatTime(ts) {
    const date = new Date(ts);
    return date.toLocaleTimeString();
}
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
    ...{ class: "data-table p-4 bg-gray-900 text-gray-100 rounded-xl shadow" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-lg font-semibold mb-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "w-full border-collapse border border-gray-700 text-sm" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
    ...{ class: "bg-gray-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "border border-gray-700 p-2 text-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "border border-gray-700 p-2 text-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [point, i] of __VLS_getVForSourceType((__VLS_ctx.data))) {
    // @ts-ignore
    [data,];
    __VLS_asFunctionalElement(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (i),
        ...{ class: "hover:bg-gray-800" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "border border-gray-700 p-2" },
    });
    (__VLS_ctx.formatTime(point.timestamp));
    // @ts-ignore
    [formatTime,];
    __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "border border-gray-700 p-2" },
    });
    (point.value.toFixed(2));
}
/** @type {__VLS_StyleScopedClasses['data-table']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
