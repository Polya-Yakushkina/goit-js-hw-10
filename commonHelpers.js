import{f as m,i as h}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const a=document.getElementById("datatime-picker"),i=document.querySelector("[data-start]");document.querySelector("[data-days]");document.querySelector("[data-hours]");document.querySelector("[data-minutes]");document.querySelector("[data-seconds]");const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0],console.log(e[0])}};m(a,y);i.addEventListener("click",function(){const e=a._flatpickr.selectedDates[0],r=new Date,s=e.getTime()-r.getTime();if(e<=r){h.error({title:"Error",message:"Please choose a date in the future"}),i.disabled=!0;return}i.disabled=!0,a.disabled=!0,b(s)});function p(e){return e.toString().padStart(2,"0")}function u(e){const o=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:n,minutes:l,seconds:f}}console.log(u(2e3));console.log(u(14e4));console.log(u(2414e4));function d(e){const{days:r,hours:s,minutes:c,seconds:t}=u(e);[r,s,c,t].forEach(n=>{n.textContent=p(n)})}function g(){d(0)}function b(e){setInterval(function(){e-=1e3,e<=0&&(clearInterval(this),i.dіsabled=!1,a.disabled=!1,g()),d(e)},1e3)}
//# sourceMappingURL=commonHelpers.js.map