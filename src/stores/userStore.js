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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfile = void 0;
exports.updateUserProfile = updateUserProfile;
var vue_1 = require("vue");
// Initialize with default values or from localStorage
var defaultProfile = {
    username: 'GitHub User',
    email: 'user@example.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1732802?v=4'
};
// Load user data from localStorage or use defaults
var storedUserData = localStorage.getItem('moly-link-hub-user');
var initialUserData = storedUserData ? JSON.parse(storedUserData) : defaultProfile;
// Create reactive state
exports.userProfile = (0, vue_1.ref)(initialUserData);
// Watch for changes and update localStorage
(0, vue_1.watch)(exports.userProfile, function (newProfile) {
    localStorage.setItem('moly-link-hub-user', JSON.stringify(newProfile));
}, { deep: true });
// Function to update user profile
function updateUserProfile(updatedProfile) {
    exports.userProfile.value = __assign(__assign({}, exports.userProfile.value), updatedProfile);
}
