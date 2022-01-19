// ==UserScript==
// @name           修改网页背景颜色
// @namespace      https://greasyfork.org/zh-CN/users/798733-bleu
// @description    将网页背景颜色修改为土黄色，配合chrome主题Mira! Let's Go食用更佳。
// @version        1.0.1
// @author         bleu
// @compatible     edge Tampermonkey
// @compatible     chrome Tampermonkey
// @compatible     firefox Tampermonkey
// @license        MIT
// @include        *://*
// @icon           data:image/png;base64,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
// @grant          none
// ==/UserScript==
(function () {
    'use strict';
    var color = "#F6F4EC"
    var Lcolor = "";
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
    function changeElementColor(node){
        if (node.style.backgroundColor == color||node.getAttribute("type")=="checkbox") {
            return;
        }
        if (customModeDel[location.host]) {
            var temp = document.querySelector(customModeDel[location.host]);
            if (temp && temp.contains(node)) {
                return;
            }
        }
 
        Lcolor = document.defaultView.getComputedStyle(node, "").getPropertyValue("background-Color");
        if (isChangeColor(rgb2hex(Lcolor))) {
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
