!function e(t,r,n){function a(i,u){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return a(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(){var e=document.querySelector(".mainView"),t=document.createElement("div");t.classList.add("custom-brand");var r=nModule.data.textContent,n=nModule.data.parameters.style;for(var a in nModule.data.parameters){var o=new RegExp("{{"+a+"}}","gm");r=r.replace(o,nModule.data.parameters[a])}if(t.style.position="absolute",t.style.zIndex="450",n)for(var a in n)t.style[a]=n[a];if(t.innerHTML=r,e){var i=t.style.opacity;e.appendChild(t);var u=new MutationObserver(function(e){e.forEach(function(e){var r=e.target,n=r.classList.contains("epub-view_state-zoom-in");n===!0?t.style.opacity="0":t.style.opacity=i})});u.observe(e,{attributes:!0})}}()},{}]},{},[1]);