!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);function n(){$(".js__slider").slick({variableWidth:!0})}$(document).ready(()=>{$(".js-lazy").each((e,r)=>{const t=$(r),n=t.attr("data-src");t.attr("src",n)}),$(".js__nav-menu").scroll((function(){let e=$(".js__nav-menu"),r=$(".js__nav-menu").scrollLeft();r>1&&r<220?e.addClass("scroll-start scroll-end"):r>223?e.removeClass("scroll-end"):0==r&&(e.addClass("scroll-end"),e.removeClass("scroll-start"))})),$(".js__popap").magnificPopup({type:"inline",closeOnBgClick:!0}),n(),$(".js__slider").on("afterChange",(function(e,r,t,n){let a=$(".slick-active img"),o=$(".header__content");a.hasClass("_gradient")?(o.removeClass("_dark"),o.addClass("_gradient")):a.hasClass("_dark")?(o.removeClass("_gradient"),o.addClass("_dark")):o.removeClass("_dark _gradient")}))})}]);