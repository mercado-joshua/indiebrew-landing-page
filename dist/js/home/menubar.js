"use strict";function init(){var e=document.querySelector("[data-js-open-btn]"),t=document.querySelector("[data-js-close-btn]"),n=document.querySelector("[data-js-menubar]");e.addEventListener("click",(function(){n.classList.add("-active")})),t.addEventListener("click",(function(){n.classList.remove("-active")}))}document.addEventListener("readystatechange",(function(e){"complete"===e.target.readyState&&init()}));
//# sourceMappingURL=../sourcemaps/home/menubar.js.map