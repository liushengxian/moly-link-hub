"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
require("./style.css");
var App_vue_1 = require("@src/App.vue");
var router_1 = require("@src/router");
// Check for redirect from 404.html
var redirect = sessionStorage.getItem('redirect');
if (redirect) {
    sessionStorage.removeItem('redirect');
    var _a = redirect.split(/[?#]/), pathname = _a[0], search = _a[1], hash = _a[2];
    router_1.default.push({
        path: pathname,
        query: search ? Object.fromEntries(new URLSearchParams(search)) : {},
        hash: hash ? "#".concat(hash) : ''
    });
}
(0, vue_1.createApp)(App_vue_1.default)
    .use(router_1.default)
    .mount('#app');
