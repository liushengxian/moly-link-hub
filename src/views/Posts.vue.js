"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var PostList_vue_1 = require("../components/PostList.vue");
var posts = (0, vue_1.ref)([
    {
        id: 1,
        title: 'First Post',
        content: 'This is the first post content',
        author: 'user1',
        date: '2023-10-01',
        comments: []
    }
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
/** @type {[typeof PostList, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(PostList_vue_1.default, new PostList_vue_1.default({
    posts: (__VLS_ctx.posts),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        posts: (__VLS_ctx.posts),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            PostList: PostList_vue_1.default,
            posts: posts,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
