!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequiref192;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},t.parcelRequiref192=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return a.default(e)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return a.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a.default(e,t)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}}));var c=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"},{id:11,name:"Tic-Tac-Toe",category:"game"}],o=document.querySelector(".theme-switch__toggle");document.querySelector(".container"),document.querySelector(".light"),document.querySelector(".dark");o.addEventListener("change",(function(){o.checked,document.body.classList.toggle("black-theme")}));var i=document.querySelector(".modal"),d=document.querySelector(".backdrop"),l=document.querySelector("#name-input"),s=document.querySelector("#submit-btn"),u=document.querySelector(".user");function m(){d.style.width="0px",i.style.display="none"}document.addEventListener("DOMContentLoaded",(function(){d.style.opacity="1",i.style.opacity="1"})),d.addEventListener("click",(function(e){e.target==d&&m()})),window.addEventListener("keydown",(function(e){"Escape"==e.key&&m()})),s.addEventListener("click",(function(e){e.preventDefault();var t=l.value;u.innerHTML="Вітаємо, ".concat(t,"!"),m()}));var p=document.querySelector(".class-list"),f=c.map((function(e){return'\n    <li class="li-main '.concat(e.category,"\" id='").concat(e.id,"'>\n        <h2 class='h2-main'>").concat(e.name,"</h2>\n    </li>")}));p.innerHTML=f.join("");var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e){return b.default(e)||g.default(e)||y.default(e)||h.default()};var b=L(r("kMC0W")),g=L(r("7AJDX")),h=L(r("8CtQK")),y=L(r("auk6i"));function L(e){return e&&e.__esModule?e:{default:e}}var x=document.querySelector(".interactif"),E=document.querySelector(".class-list"),M=document.querySelectorAll("li");x.addEventListener("change",(function(){var t,n=x.value,a=Array.from(M).filter((function(e){return e.classList.contains(n)}));console.log(a),E.innerHTML="",(t=E).append.apply(t,e(v)(a))}));var C=document.querySelector(".form-submit"),S=(document.querySelector("[data-modal-close]"),document.querySelector(".close-btn")),w=(document.querySelector("[data-modal]"),document.querySelector(".backdrop"));document.querySelector(".foot-input");function q(e){e.preventDefault(),w.classList.toggle("is-hidden")}C.addEventListener("submit",q),S.addEventListener("click",q);var H=document.getElementById("1"),k=document.createElement("input");k.setAttribute("type","text"),k.classList.add("input-1"),k.placeholder="Pік народження";var _=document.createElement("button");_.setAttribute("type","button"),_.textContent="Пошук",_.classList.add("button-1");var T=document.createElement("p");T.classList.add("p-1"),T.textContent="",H.append(k,_,T),_.addEventListener("click",(function(){var e=document.querySelector(".input-1").value;T.textContent=e%4==0?"Вітаю, ви народилися у високосний рік":"На жаль, це не високосний рік"}));var A=document.createElement("input");A.setAttribute("type","text"),A.classList.add("input-2"),A.placeholder="Число від 1 до 10";var j=document.createElement("button");j.setAttribute("type","button"),j.classList.add("button-2"),j.textContent="Пошук";var B=document.createElement("p");B.classList.add("p-2"),B.textContent="",document.getElementById("2").append(A,j,B);var I=Math.floor(10*Math.random())+1;j.addEventListener("click",(function(){var e=document.querySelector(".input-2").value;B.textContent=e===I?"Вітаю, ви вгадали число "+"".concat(I):"Ви програли, компʼютер загадав число "+"".concat(I)}));var D=document.getElementById("3"),N=document.createElement("div"),P=(document.createElement("h3"),document.createElement("ul"));N.id="RPSSection",P.id="RPSBtnList";for(var G=0,O=0,W=["https://www.svgrepo.com/download/111747/stone.svg","https://www.clker.com/cliparts/N/5/T/b/T/l/white-scissors.svg.hi.png","https://freesvg.org/img/blackwhitepaperstack.png"],Z=["КАМІНЬ","НОЖИЦІ","ПАПІР"],R=0;R<Z.length;R++){var Y=document.createElement("li"),F=document.createElement("button");F.classList.add("RPSBtn"),F.id=R+1;var z=document.createElement("img");z.id="img",z.src=W[R],F.appendChild(z),Y.appendChild(F),P.appendChild(Y)}var V=document.createElement("p");V.textContent="Хто переміг",V.id="gameResults";var K=document.createElement("div");K.id="score";var J=document.createElement("p");J.textContent="Рахунок:";var U=document.createElement("p"),X=document.createElement("p");U.textContent="Ви - ".concat(G),X.textContent="Комп’ютер - ".concat(O),K.appendChild(J),K.appendChild(U),K.appendChild(X);var Q=document.createElement("button");Q.textContent="Варіант комп’ютера",Q.classList.add("computerChoise");var $=document.createElement("div");$.id="gamePart",$.appendChild(P),$.appendChild(V),$.appendChild(Q),N.appendChild($),N.appendChild(K),D.appendChild(N);var ee,te=document.querySelectorAll(".RPSBtn");function ne(e){e.currentTarget.classList.add("btnHover")}function ae(e){e.currentTarget.classList.remove("btnHover")}function re(e){var t=e.currentTarget.id,n=Math.floor(3*Math.random())+1;Q.textContent="Комп'ютер обрав ".concat(Z[n-1]),t==n&&(V.textContent="Нічия!",G+=1,O+=1,ee="rgb(255, 153, 0)"),(1==t&&2==n||2==t&&3==n||3==t&&1==n)&&(V.textContent="Ви виграли раунд!",G+=1,ee="yellowgreen"),(1==t&&3==n||2==t&&1==n||3==t&&2==n)&&(V.textContent="Комп'ютер виграв раунд!",O+=1,ee="red"),V.style.color=ee,U.textContent="Ви - ".concat(G),X.textContent="Комп’ютер - ".concat(O)}te.forEach((function(e){e.addEventListener("mouseover",ne)})),te.forEach((function(e){e.addEventListener("mouseout",ae)})),te.forEach((function(e){e.addEventListener("click",re)})),calculatorGameContainer=document.getElementById("4");var ce=document.createElement("div"),oe=document.createElement("div"),ie=document.createElement("ul"),de=document.createElement("div");ce.classList.add("calculator__div"),oe.classList.add("calculator__func"),ie.classList.add("calc--btns__list"),de.classList.add(".calc__result-box");var le=document.createElement("li"),se=document.createElement("li"),ue=document.createElement("li"),me=document.createElement("li");le.classList.add("calc--list__item-plus"),se.classList.add("calc--list__item-mult"),ue.classList.add("calc--list__item-minus"),me.classList.add("calc--list__item-divis"),ie.append(le,se,ue,me),oe.append(ie,de),ce.append(oe),calculatorGameContainer.append(oe);var pe=document.createElement("p");pe.classList.add("p-result"),pe.textContent="_",de.prepend(pe);var fe=document.createElement("button");fe.textContent="+",fe.classList.add("calcBtn");var ve=document.createElement("button");ve.textContent="*",ve.classList.add("calcBtn");var be=document.createElement("button");be.textContent="-",be.classList.add("calcBtn");var ge=document.createElement("button");ge.textContent="/",ge.classList.add("calcBtn");var he=document.createElement("button");he.textContent="=",he.classList.add("calcBtnEqual");var ye=document.createElement("input");ye.classList.add("calculator__input"),ye.placeholder="Введіть число";var Le=document.createElement("input");Le.classList.add("calculator__input"),Le.placeholder="Введіть число",oe.prepend(ye),ie.after(Le),Le.after(he),le.prepend(fe),se.prepend(ve),ue.prepend(be),me.prepend(ge);var xe=0,Ee=0;ye.addEventListener("blur",(function(){xe=Number(ye.value)})),Le.addEventListener("blur",(function(){Ee=Number(Le.value)}));var Me=0;fe.addEventListener("click",(function(){Me=xe+Ee})),ve.addEventListener("click",(function(){Me=xe*Ee})),be.addEventListener("click",(function(){Me=xe-Ee})),ge.addEventListener("click",(function(){Me=xe/Ee})),he.addEventListener("click",(function(){pe.textContent=Me}));document.getElementById("5").innerHTML='<section class="time-calculator">\n   <div class="container">\n      <div class="wrapper-title">\n         <div class="title">\n            <h2>Калькулятор часу</h2>\n         </div>\n      </div>\n      <div class="wrapper-content">\n         <div class="wrapper-input">\n            <input type="text" placeholder="Введіть число">\n            <div class="wrapper-svg">\n               <img src="/src/images/Group 104.svg" alt="">\n            </div>\n         </div>\n         <div class="wrapper-time">\n            <h4>00:00</h4>\n         </div>\n      </div>\n   </div>\n</section>';var Ce,Se=document.querySelector(".wrapper-input > input"),we=document.querySelector("h4");Se.value;Se.addEventListener("input",(function(e){var t=Math.floor(e.currentTarget.value/60),n=e.currentTarget.value%60,a="".concat(t.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"));we.textContent=a}));var qe=null;document.getElementById("6").innerHTML='\n    <div class="dino-container">\n    <div user-select="text" class="name">Google динозавр</div>\n    <div class="dino-game">\n        <div class="message">Press any button to start</div>\n        <div class="counter">0</div>\n        <div class="dino"></div>\n        <div class="cactus"></div>\n        <div class="ground"></div>\n    </div>\n</div>\n';var He=document.querySelector(".dino"),ke=document.querySelector(".cactus"),_e=document.querySelector(".message"),Te=document.querySelector(".counter"),Ae=0;setInterval((function(){var e=parseInt(window.getComputedStyle(He).getPropertyValue("top"));if(parseInt(window.getComputedStyle(ke).getPropertyValue("left"))<55&&e>=165){qe=null,console.log(qe),ke.classList.remove("cactus-anim"),He.classList.remove("dino-running"),_e.classList.remove("message-hide"),He.classList.add("dino-lose");
//!Important
var t=new Audio;t.src="../src/audio/die.wav",t.play(),clearInterval(Ce),setTimeout((function(){He.classList.remove("dino-lose")}),200)}}),10);document.addEventListener("keydown",(function(){"dino-jump"!=He.classList&&(He.classList.add("dino-jump"),setTimeout((function(){He.classList.remove("dino-jump")}),300)),He.classList.contains("dino-running")&&clearInterval(Ce),null===qe&&(Ce=setInterval((function(){Ae+=1,Te.innerHTML=Ae}),300)),ke.classList.add("cactus-anim"),He.classList.add("dino-running"),_e.classList.add("message-hide")}));var je=document.getElementById("7"),Be="ball-moving";!function(){var e=document.createElement("div"),t=document.createElement("div");e.classList.add("football-field"),t.classList.add("ball"),e.append(t),je.append(e);e.addEventListener("click",(function(e){"ball-moving"!==Be?Be="ball-moving":"ball-moving"===Be&&(Be="ball-moving2"),t.style.left="".concat(e.offsetX,"px"),t.style.top="".concat(e.offsetY,"px"),t.style.animationName="".concat(Be)}))}();var Ie=document.getElementById("8");Ie.classList.add("container");var De=0,Ne=document.createElement("ul");Ie.appendChild(Ne);var Pe=document.createElement("p");Ie.appendChild(Pe),Pe.textContent="Найбільше число, яке ви ввели - ";for(var Ge=[],Oe=[],We=0;We<3;We+=1)Ge[We]=document.createElement("li"),Ne.appendChild(Ge[We]),Oe[We]=document.createElement("input"),Oe[We].type="number",Oe[We].placeholder="Введіть число",Ge[We].appendChild(Oe[We]),Oe[We].addEventListener("change",(function(e){De=Math.max(De,e.target.value),Pe.textContent="Найбільше число, яке ви ввели - "+String(De)}));var Ze=[{id:0,name:"Настя Скрицька ",discription:"Створення хедера, футера та модального вікна до футера",img:"https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{id:1,name:"Даніїл",discription:" Написати програму, яка отримає від користувача число та виведе на екран рядок в форматі години та хвилини",img:"https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},{id:2,name:"Іван",discription:"Верстка модального вікна. Реалізація відкриття модального вікна привітання користувач",img:"https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{id:3,name:"Анастасія Бунякіна",discription:"Програма, яка буде перевіряти чи рік народження користувача був високосним & Програма, де комп‘ютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні)",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"},{id:4,name:" Федір Борисенко",discription:"Калькулятор",img:"https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},{id:5,name:"Нєма Вероніка",discription:"Зробити слайдер зображень - перелистування зображення по кнопкам вліво та вправо, якщо зображення закінчилися, кнопка повиння зникнути або стати неактивною",img:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}],Re=document.getElementById("9"),Ye=document.createElement("div");Ye.classList.add("mainDiv");var Fe=document.createElement("div");Fe.classList.add("main"),Ye.append(Fe);var ze=document.createElement("button");ze.classList.add("leftButton"),Fe.append(ze);var Ve=document.createElement("img");Ve.classList.add("photo"),Ve.src=Ze[0].img,Fe.append(Ve);var Ke=document.createElement("button");Ke.classList.add("rightButton"),Fe.append(Ke);var Je=document.createElement("h4");Je.textContent=Ze[0].name,Je.classList.add("nameText"),Ye.append(Je);var Ue=document.createElement("p");Ue.textContent=Ze[0].discription,Ue.classList.add("discriptionText"),Ye.append(Ue),Re.append(Ye),ze.addEventListener("click",(function(){for(var e=Ze.length-1;e<Ze.length+1;e-=1){if(Ze[e].img===Ve.src)return Ve.src=Ze[e-1].img}})),ze.addEventListener("click",(function(){for(var e=Ze.length-1;e<Ze.length+1;e-=1){if(Ze[e].name===Je.textContent)return Je.textContent=Ze[e-1].name}})),ze.addEventListener("click",(function(){for(var e=Ze.length-1;e<Ze.length+1;e-=1){if(Ze[e].discription===Ue.textContent)return Ue.textContent=Ze[e-1].discription}})),Ke.addEventListener("click",(function(){for(var e=0;e<Ze.length;e+=1){if(Ze[e].img===Ve.src){if(e===Ze.length-1)return;return Ve.src=Ze[e+1].img}}})),Ke.addEventListener("click",(function(){for(var e=0;e<Ze.length;e+=1){if(Ze[e].name===Je.textContent){if(e===Ze.length-1)return;return Je.textContent=Ze[e+1].name}}})),Ke.addEventListener("click",(function(){for(var e=0;e<Ze.length;e+=1){if(Ze[e].discription===Ue.textContent){if(e===Ze.length-1)return;return Ue.textContent=Ze[e+1].discription}}}));var Xe=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],Qe=document.getElementById("10"),$e=document.createElement("ul");function et(e){return' \n\t\t<li class="cards">\n\t\t\t<h2>'.concat(e.name," ").concat(e.surname,"</h2>\n\t\t\t<p>").concat(e.born," <br> ").concat(e.dead,"</p>\n\t\t</li>\n   ")}$e.classList.add("scientist-list"),Qe.append($e),function(){for(var e=0;e<Xe.length;e++){var t=et(Xe[e]);$e.innerHTML+=t}}(),function(e){for(var t=0;t<e.length;t++){var n=(a=e[t],'\n\t<button \n\t\ttype="button" \n\t\tclass="buttons '.concat(a.class,'">\n\t\t').concat(a.text,"\n\t</button>\n\t"));Qe.insertAdjacentHTML("beforeend",n)}var a}([{class:"button-3",text:"Відсортувати вчених за кількістю прожитих років"},{class:"button-4",text:"Знайти вченого, який народився найпізніше"},{class:"button-5",text:"Знайти вчених, в яких співпадають перші літери імені і прізвища"},{class:"button-6",text:"Знайти рік народження Albert Einshtein "},{class:"button-7",text:'Знайти вчених, прізвища яких починаються не на літеру "С"'},{class:"button-8",text:"Видалити всіх вчених, ім’я яких починається на “А”"},{class:"button-9",text:" Знайти вченого, який прожив найдовше і вченого, який прожив найменше"},{class:"button-10",text:"Які вчені народилися в 19 ст."},{class:"button-11",text:"Відсортувати вчених за алфавітом"}]),document.querySelector(".button-10").addEventListener("click",(function(){var e=Xe.filter((function(e){return e.born>=1800&&e.born<=1900})).sort((function(e,t){return e.born-t.born})).map(et).join("");$e.innerHTML=e})),document.querySelector(".button-11").addEventListener("click",(function(){var e=Xe.sort((function(e,t){return e.name.localeCompare(t.name)})).map(et).join("");$e.innerHTML=e})),document.querySelector(".button-3").addEventListener("click",(function(){var e=Xe.sort((function(e,t){return t.dead-t.born-(e.dead-e.born)})).map(et).join("");$e.innerHTML=e})),document.querySelector(".button-4").addEventListener("click",(function(){var e=et(Xe.reduce((function(e,t){return t.born>e.born?t:e})));$e.innerHTML="",$e.insertAdjacentHTML("beforeend",e)})),document.querySelector(".button-5").addEventListener("click",(function(){var e=Xe.filter((function(e){return e.name[0]===e.surname[0]})).map(et).join("");$e.innerHTML=e})),document.querySelector(".button-6").addEventListener("click",(function(){var e=et(Xe.find((function(e){return"Albert"===e.name&&"Einstein"===e.surname})));$e.innerHTML="",$e.insertAdjacentHTML("beforeend",e)})),document.querySelector(".button-7").addEventListener("click",(function(){var e=Xe.filter((function(e){return"C"!==e.surname.charAt(0)})).map(et).join("");$e.innerHTML=e})),document.querySelector(".button-8").addEventListener("click",(function(){var e=Xe.filter((function(e){return!e.name.startsWith("A")})).map(et).join("");$e.innerHTML=e})),document.querySelector(".button-9").addEventListener("click",(function(){var e=Xe.sort((function(e,t){return e.dead-e.born-(t.dead-t.born)})),t=e[0],n=e[e.length-1],a=et(t),r=et(n);$e.innerHTML="",$e.insertAdjacentHTML("beforeend",a),$e.insertAdjacentHTML("beforeend",r)}))}();
//# sourceMappingURL=index.b0e0be7b.js.map
