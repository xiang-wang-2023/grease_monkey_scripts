// ==UserScript==
// @name     Au-to updating testing
// @version  3
// @updateURL  https://github.com/xiang-wang-2023/grease_monkey_scripts/blob/main/auto_update_testing.user.js
// @include      /^https?:\/\/baidu\.net\/.*$/
// @match        *://*/*
// ==/UserScript==

// console.log("hello world");

(function() {
    'use strict';

    // 创建一个新窗口
    let newWindow = window.open('', '_blank', 'width=300,height=200');

    // 设置新窗口的内容
    newWindow.document.write('<html><head><title>Hello World</title></head><body><h1>Hello, World!</h1></body></html>');
    newWindow.document.close();
})();
