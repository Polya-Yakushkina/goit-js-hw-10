import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as g,i as p}from"./assets/vendor-77e16229.js";const s=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),T=document.querySelector("[data-hours]"),E=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let n,u;t.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0],!n||n.getTime()<=Date.now()?(p.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):t.disabled=!1}};g(s,q);t.addEventListener("click",function(){t.disabled=!0,s.disabled=!0,C(n.getTime()-new Date().getTime())});function o(e){return e.toString().padStart(2,"0")}function r(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));function l(e){const{days:a,hours:c,minutes:d,seconds:i}=r(e);b.textContent=o(a),T.textContent=o(c),E.textContent=o(d),S.textContent=o(i)}function v(){l(0)}function C(e){u=setInterval(function(){if(e-=1e3,e<=0){clearInterval(u),t.disabled=!1,s.disabled=!1,v();return}l(e)},1e3)}
//# sourceMappingURL=commonHelpers.js.map