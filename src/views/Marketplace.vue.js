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
var PluginCard_vue_1 = require("@src/components/PluginCard.vue");
// Define available categories for filtering
var categories = [
    { id: 'all', name: 'All' },
    { id: 'theme', name: 'Themes' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'ai', name: 'AI Tools' },
    { id: 'dev', name: 'Development' },
    { id: 'misc', name: 'Miscellaneous' }
];
// Define sample plugins data
var allPlugins = [
    {
        id: 1,
        name: 'Code Formatter',
        description: 'Automatically format your code according to style guides',
        icon: 'https://cdn-icons-png.flaticon.com/512/1157/1157001.png',
        author: 'Code Team',
        category: 'productivity',
        downloads: 245678,
        rating: 4.7
    },
    {
        id: 2,
        name: 'AI Assistant',
        description: 'Smart code completions and suggestions powered by AI',
        icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103652.png',
        author: 'AI Labs',
        category: 'ai',
        downloads: 890432,
        rating: 4.9
    },
    {
        id: 3,
        name: 'Dark Theme Pro',
        description: 'Professional dark theme for comfortable coding at night',
        icon: 'https://cdn-icons-png.flaticon.com/512/5204/5204758.png',
        author: 'Theme Works',
        category: 'theme',
        downloads: 124567,
        rating: 4.5
    },
    {
        id: 4,
        name: 'Git Explorer',
        description: 'Advanced git integration with visual branch management',
        icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111612.png',
        author: 'DevTools Inc',
        category: 'dev',
        downloads: 367890,
        rating: 4.6
    },
    {
        id: 5,
        name: 'Todo Manager',
        description: 'Organize your tasks and todos right in your code editor',
        icon: 'https://cdn-icons-png.flaticon.com/512/2666/2666501.png',
        author: 'ProductivityPlus',
        category: 'productivity',
        downloads: 89567,
        rating: 4.3
    },
    {
        id: 6,
        name: 'Database Explorer',
        description: 'Connect and manage databases directly from your workspace',
        icon: 'https://cdn-icons-png.flaticon.com/512/2906/2906274.png',
        author: 'DataTeam',
        category: 'dev',
        downloads: 56789,
        rating: 4.4
    },
    {
        id: 7,
        name: 'Light Theme Plus',
        description: 'Enhanced light theme with customizable accent colors',
        icon: 'https://cdn-icons-png.flaticon.com/512/4507/4507073.png',
        author: 'Theme Works',
        category: 'theme',
        downloads: 43210,
        rating: 4.2
    },
    {
        id: 8,
        name: 'Code Metrics',
        description: 'Analyze code quality and track metrics over time',
        icon: 'https://cdn-icons-png.flaticon.com/512/2784/2784459.png',
        author: 'Code Analytics',
        category: 'dev',
        downloads: 32456,
        rating: 4.5
    },
    {
        id: 9,
        name: 'Pomodoro Timer',
        description: 'Stay focused with integrated pomodoro technique timer',
        icon: 'https://cdn-icons-png.flaticon.com/512/1167/1167369.png',
        author: 'FocusTeam',
        category: 'productivity',
        downloads: 78905,
        rating: 4.1
    },
    {
        id: 10,
        name: 'AI Code Reviewer',
        description: 'Get automated code reviews and suggestions from AI',
        icon: 'https://cdn-icons-png.flaticon.com/512/7693/7693271.png',
        author: 'AI Labs',
        category: 'ai',
        downloads: 156789,
        rating: 4.8
    },
    {
        id: 11,
        name: 'Language Translator',
        description: 'Translate code comments and strings between languages',
        icon: 'https://cdn-icons-png.flaticon.com/512/484/484582.png',
        author: 'LangTools',
        category: 'misc',
        downloads: 45678,
        rating: 4.4
    },
    {
        id: 12,
        name: 'Solarized Theme',
        description: 'Classic solarized color scheme for your code editor',
        icon: 'https://cdn-icons-png.flaticon.com/512/1280/1280891.png',
        author: 'ColorSchemes',
        category: 'theme',
        downloads: 234567,
        rating: 4.7
    },
    {
        id: 13,
        name: 'Terminal Plus',
        description: 'Enhanced terminal with split views and better command history',
        icon: 'https://cdn-icons-png.flaticon.com/512/8081/8081328.png',
        author: 'DevTools Inc',
        category: 'dev',
        downloads: 89012,
        rating: 4.5
    },
    {
        id: 14,
        name: 'AI Test Generator',
        description: 'Automatically generate unit tests using AI',
        icon: 'https://cdn-icons-png.flaticon.com/512/6295/6295417.png',
        author: 'TestWorks',
        category: 'ai',
        downloads: 67890,
        rating: 4.3
    },
    {
        id: 15,
        name: 'Remote Collaborator',
        description: 'Code together in real-time with your team members',
        icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
        author: 'TeamSync',
        category: 'productivity',
        downloads: 123456,
        rating: 4.9
    }
];
var searchQuery = (0, vue_1.ref)('');
var selectedCategory = (0, vue_1.ref)('all');
// Filter plugins based on search query and selected category
var filteredPlugins = (0, vue_1.computed)(function () {
    var result = __spreadArray([], allPlugins, true);
    // Filter by search query
    if (searchQuery.value) {
        var query_1 = searchQuery.value.toLowerCase();
        result = result.filter(function (plugin) {
            return plugin.name.toLowerCase().includes(query_1) ||
                plugin.description.toLowerCase().includes(query_1);
        });
    }
    // Filter by category
    if (selectedCategory.value !== 'all') {
        result = result.filter(function (plugin) { return plugin.category === selectedCategory.value; });
    }
    return result;
});
var selectCategory = function (categoryId) {
    selectedCategory.value = categoryId;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['marketplace-header']} */ ;
/** @type {__VLS_StyleScopedClasses['marketplace-header']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['category-button']} */ ;
/** @type {__VLS_StyleScopedClasses['category-button']} */ ;
/** @type {__VLS_StyleScopedClasses['plugins-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['plugins-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['plugins-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['plugins-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['category-filter']} */ ;
/** @type {__VLS_StyleScopedClasses['category-button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "marketplace-container" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "marketplace-header" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "search-bar" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign({ type: "text", value: (__VLS_ctx.searchQuery), placeholder: "Search for plugins..." }, { class: "search-input" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "category-filter" }));
var _loop_1 = function (category) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.selectCategory(category.id);
        } }, { key: (category.id) }), { class: (['category-button', { active: __VLS_ctx.selectedCategory === category.id }]) }));
    (category.name);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.categories)); _i < _a.length; _i++) {
    var category = _a[_i][0];
    _loop_1(category);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "results-info" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.filteredPlugins.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "plugins-grid" }));
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.filteredPlugins)); _b < _c.length; _b++) {
    var plugin = _c[_b][0];
    /** @type {[typeof PluginCard, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(PluginCard_vue_1.default, new PluginCard_vue_1.default({
        key: (plugin.id),
        name: (plugin.name),
        description: (plugin.description),
        icon: (plugin.icon),
        author: (plugin.author),
        category: (plugin.category),
        downloads: (plugin.downloads),
        rating: (plugin.rating),
    }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
            key: (plugin.id),
            name: (plugin.name),
            description: (plugin.description),
            icon: (plugin.icon),
            author: (plugin.author),
            category: (plugin.category),
            downloads: (plugin.downloads),
            rating: (plugin.rating),
        }], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
/** @type {__VLS_StyleScopedClasses['marketplace-container']} */ ;
/** @type {__VLS_StyleScopedClasses['marketplace-header']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['category-filter']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['category-button']} */ ;
/** @type {__VLS_StyleScopedClasses['results-info']} */ ;
/** @type {__VLS_StyleScopedClasses['plugins-grid']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            PluginCard: PluginCard_vue_1.default,
            categories: categories,
            searchQuery: searchQuery,
            selectedCategory: selectedCategory,
            filteredPlugins: filteredPlugins,
            selectCategory: selectCategory,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
