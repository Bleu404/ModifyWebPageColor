// ==UserScript==
// @name           去除页面中刺眼的白色
// @namespace      https://greasyfork.org/zh-CN/users/798733-bleu
// @description    支持自定义颜色,修改代码中的 #F6F4EC 为你喜欢的颜色
// @version        1.0.1
// @author         bleu
// @compatible     edge Tampermonkey
// @compatible     chrome Tampermonkey
// @compatible     firefox Tampermonkey
// @license        MIT
// @include        *://*
// @icon           https://img.icons8.com/ios-glyphs/60/000000/paint-palette--v1.png
// @grant          none
// ==/UserScript==
(function () {
    'use strict';
    var color = "#F6F4EC";
    var crgb = getRGB(color);
    var customMode = {
        "greasyfork.org": ["#additional-info",".user-content"],
        "segmentfault.com": ["#root"],
        "www.baidu.com": [".s_form"],
        "baike.baidu.com": [".content-wrapper", ".basic-info.J-basic-info.cmn-clearfix", ".para-title.level-2.J-chapter"],
        "cn.bing.com":["#id_hbfo"],
        "jingyan.baidu.com":["#search-box"],
        "tieba.baidu.com":["#pb_content",".l_post.l_post_bright.j_l_post.clearfix"],
    }
    var customModeDel = {
        "www.acfun.cn": "#ACPlayer",
        "www.bilibili.com": "#bilibiliPlayer",
        "v.qq.com": ".container_inner", 
        "www.iqiyi.com": "#flashOutter",
        "www.imdb.com":".ipc-page-background.ipc-page-background--baseAlt.Hero__StyledPageBackground-sc-kvkd64-0.kQLMSa",
        "www.youtube.com":"#player"
    }
    changeAllElementsColor(document);
    fixAutoPage();
    siteChangeColor();
    if(isChangeColor(rgb2hex(document.body.style.backgroundColor))){
        document.body.style.backgroundColor = color;
    }
    function rgb2hex(rgb) {
        if (rgb=="") return [0];
        rgb = rgb.match(/^rgb.?\((\d+),\s*(\d+),\s*(\d+).*\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return [hex(rgb[1]),hex(rgb[2]),hex(rgb[3])];
    }
    function isChangeColor(hexcolor){
        return hexcolor.every((item)=>parseInt(item, 16)>0xf0);
    }
    function getRGB(hex){
        return 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
          + ',' + parseInt('0x' + hex.slice(5, 7)) + ')';
    }
    function changeElementColor(node){
        if (node.style.backgroundColor === crgb||node.getAttribute("type")==="checkbox")return
        if (customModeDel[location.host]) {
            var temp = document.querySelector(customModeDel[location.host]);
            if (temp && temp.contains(node)) {
                return;
            }
        }
        var temo = document.defaultView.getComputedStyle(node, "").getPropertyValue("background-Color");
        if (isChangeColor(rgb2hex(temo))) {
            node.style.setProperty('background', color,'important');
            node.style.setProperty('color','black');
        }
    }
    function changeAllElementsColor(node) {
        var alltags = node.all ? node.all : node.getElementsByTagName("*");
        var len = alltags.length;
        for (var i = 0; i < len; i++) {
            changeElementColor(alltags[i]);
        }
    }
    function fixAutoPage() {
        try {
            var observer = new window.MutationObserver(function (mutations) {
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        changeAllElementsColor(mutation.target);
                    }
                }
            });
            observer.observe(document, {
                childList: true,
                subtree: true
            });
        } catch (e) {
            console.log("sha diao baidu ！！！！！！！！");
            document.addEventListener('DOMNodeInserted', function (mutation) {
                if (!mutation.target.style) {
                    return;
                }
                changeElementColor(mutation.target);
            }, true);
        }
    }
    function siteChangeColor() {
        if (customMode[location.host]) {
            customMode[location.host].forEach((item) => {
                document.querySelectorAll(item).forEach((node) => {
                    node.style.background = color;
                })
            });
        }
    }
})();
