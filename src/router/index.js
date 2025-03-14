"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("@src/views/Home.vue");
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1.default
    },
    {
        path: '/posts',
        name: 'Posts',
        component: function () { return Promise.resolve().then(function () { return require('@src/views/Posts.vue'); }); }
    },
    {
        path: '/new-post',
        name: 'NewPost',
        component: function () { return Promise.resolve().then(function () { return require('@src/views/CreatePost.vue'); }); }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: function () { return Promise.resolve().then(function () { return require('@src/views/Profile.vue'); }); }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: function () { return Promise.resolve().then(function () { return require('@src/views/Settings.vue'); }); }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        component: function () { return Promise.resolve().then(function () { return require('@src/views/Marketplace.vue'); }); }
    }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes
});
exports.default = router;
