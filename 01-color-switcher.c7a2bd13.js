!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){timer=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(timer),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.c7a2bd13.js.map
