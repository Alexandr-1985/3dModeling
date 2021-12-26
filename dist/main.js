(()=>{"use strict";(()=>{const e=document.querySelector("menu"),t=document.querySelector("main"),o=()=>{e.classList.toggle("active-menu")},l=e=>{let t;t=e.getAttribute("href"),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})};t.addEventListener("click",(t=>{const r=t.target;r.closest(".menu")?o():r.closest('a[href="#service-block"]')?(t.preventDefault(),console.log(r),l(r.closest('a[href="#service-block"]'))):e.classList.contains("active-menu")&&r!==e&&o()})),e.addEventListener("click",(e=>{const t=e.target;t.closest(".close-btn")?(e.preventDefault(),o()):t.closest("a")&&(e.preventDefault(),o(),l(t))}))})(),(e=>{console.log(e);const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");let r=e=>e<10?"0"+e:e;const c=setInterval((()=>{let n=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=r(n.hours),o.textContent=r(n.minutes),l.textContent=r(n.seconds),n.timeRemaining<=0&&(clearInterval(c),t.textContent="00",t.style.color="red",o.textContent="00",o.style.color="red",l.textContent="00",l.style.color="red")}),1e3)})("28 december 2021"),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let o,l=0;t.forEach((e=>{e.addEventListener("click",(()=>{r()}))}));const r=()=>{(e.style.display="none")&&(e.style.display="block",e.style.transform="translateX(0)",document.documentElement.offsetWidth>=768&&c())},c=()=>{o=requestAnimationFrame(c),l+=5,l<=100?e.style.transform=`translateX(${100-l}%)`:(cancelAnimationFrame(o),e.style.display="block",l=0)};e.addEventListener("click",(t=>{console.log("e.trget.closest"),t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-item:not(:first-child)"),t=document.querySelectorAll("form input[type=text]"),o=document.querySelectorAll("form input[type=email]"),l=document.querySelectorAll("form input[type=tel]"),r=[...t,...document.querySelectorAll("form input[placeholder='Ваше сообщение']")];e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),r.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яA-Z.\s\-]/gi,"")})),e.addEventListener("blur",(()=>{e.value=e.value.replace(/\s+/g," ").replace(/^\s+/,"").replace(/\s+$/,"").replace(/(^\S|\s\S)(\S+)/g,((e,t,o)=>t.toUpperCase()+o.toLowerCase()))}))})),o.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\w0-9\.@!_~*']+/gi,"")}))})),l.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\()\-]/g,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".dot");let l,r=0;const c=(e,t,o)=>{e[t].classList.remove(o)},n=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),r++,r>=t.length&&(r=0),n(t,r,"portfolio-item-active"),n(o,r,"dot-active")},a=(e=1500)=>{l=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),console.log(e.target),e.target.matches(".dot, .portfolio-btn")&&(c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),e.target.matches("#arrow-right")?(console.log("arrow-right"),r++):e.target.matches("#arrow-left")?(console.log("arrow-left"),r--):e.target.classList.contains("dot")&&(console.log("dot"),o.forEach(((t,o)=>{e.target===t&&(r=o)}))),r>=t.length&&(r=0),r<0&&(r=t.length-1),n(t,r,"portfolio-item-active"),n(o,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&a(2e3)}),!0),a()})()})();