"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var WebsiteCard_vue_1 = require("@src/components/WebsiteCard.vue");
var AddWebsiteDialog_vue_1 = require("@src/components/AddWebsiteDialog.vue");
var showDialog = (0, vue_1.ref)(false);
// Define default websites to use if none are stored in localStorage
var defaultWebsites = [
    {
        title: 'Google',
        description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
        favicon: 'https://www.google.com/favicon.ico',
        url: 'https://www.google.com'
    },
    {
        title: 'DeepSeek',
        description: 'DeepSeek is an AI research company focused on large-scale models and reasoning capabilities.',
        favicon: 'https://www.deepseek.com/favicon.ico',
        url: 'https://www.deepseek.com'
    },
    {
        title: 'GitHub',
        description: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories.',
        favicon: 'https://github.com/favicon.ico',
        url: 'https://github.com'
    },
    {
        title: 'Microsoft Azure',
        description: 'Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges.',
        favicon: 'https://azure.microsoft.com/favicon.ico',
        url: 'https://azure.microsoft.com'
    }
];
// Initialize websites from localStorage or use defaults
var websites = (0, vue_1.ref)(JSON.parse(localStorage.getItem('moly-link-hub-websites') || 'null') || defaultWebsites);
// Watch for changes to websites array and update localStorage
(0, vue_1.watch)(websites, function (newWebsites) {
    localStorage.setItem('moly-link-hub-websites', JSON.stringify(newWebsites));
}, { deep: true });
var openAddDialog = function () {
    showDialog.value = true;
};
var addNewWebsite = function (newWebsite) {
    websites.value.push(newWebsite);
    // localStorage is automatically updated due to the watch effect
    showDialog.value = false;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['add-card']} */ ;
/** @type {__VLS_StyleScopedClasses['website-cards']} */ ;
/** @type {__VLS_StyleScopedClasses['website-cards']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "home" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "website-cards" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.websites)); _i < _a.length; _i++) {
    var website = _a[_i][0];
    /** @type {[typeof WebsiteCard, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(WebsiteCard_vue_1.default, new WebsiteCard_vue_1.default({
        key: (website.url),
        title: (website.title),
        description: (website.description),
        favicon: (website.favicon),
        url: (website.url),
    }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
            key: (website.url),
            title: (website.title),
            description: (website.description),
            favicon: (website.favicon),
            url: (website.url),
        }], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.openAddDialog) }, { class: "add-card" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "add-card-content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "plus-icon" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
if (__VLS_ctx.showDialog) {
    /** @type {[typeof AddWebsiteDialog, ]} */ ;
    // @ts-ignore
    var __VLS_3 = __VLS_asFunctionalComponent(AddWebsiteDialog_vue_1.default, new AddWebsiteDialog_vue_1.default(__assign({ 'onClose': {} }, { 'onAdd': {} })));
    var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([__assign({ 'onClose': {} }, { 'onAdd': {} })], __VLS_functionalComponentArgsRest(__VLS_3), false));
    var __VLS_6 = void 0;
    var __VLS_7 = void 0;
    var __VLS_8 = void 0;
    var __VLS_9 = {
        onClose: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.showDialog))
                return;
            __VLS_ctx.showDialog = false;
        }
    };
    var __VLS_10 = {
        onAdd: (__VLS_ctx.addNewWebsite)
    };
    var __VLS_5;
}
/** @type {__VLS_StyleScopedClasses['home']} */ ;
/** @type {__VLS_StyleScopedClasses['website-cards']} */ ;
/** @type {__VLS_StyleScopedClasses['add-card']} */ ;
/** @type {__VLS_StyleScopedClasses['add-card-content']} */ ;
/** @type {__VLS_StyleScopedClasses['plus-icon']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            WebsiteCard: WebsiteCard_vue_1.default,
            AddWebsiteDialog: AddWebsiteDialog_vue_1.default,
            showDialog: showDialog,
            websites: websites,
            openAddDialog: openAddDialog,
            addNewWebsite: addNewWebsite,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
