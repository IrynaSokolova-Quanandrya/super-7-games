var e=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"},{id:11,name:"Tic-Tac-Toe",category:"game"}];const t=document.querySelector(".modal"),n=document.querySelector(".backdrop"),c=document.querySelector("#name-input"),o=document.querySelector("#submit-btn"),a=document.querySelector(".user");function i(){n.style.width="0px",t.style.display="none"}document.addEventListener("DOMContentLoaded",(()=>{n.style.opacity="1",t.style.opacity="1"})),n.addEventListener("click",(function(e){e.target==n&&i()})),window.addEventListener("keydown",(function(e){"Escape"==e.key&&i()})),o.addEventListener("click",(function(e){e.preventDefault();const t=c.value;a.innerHTML=`Вітаємо, ${t}!`,i()}));const d=document.querySelector(".theme-switch__toggle"),s=document.querySelectorAll(".container");document.querySelector(".light"),document.querySelector(".dark");d.addEventListener("change",(function(){d.checked,s.forEach((e=>e.classList.toggle("black-theme")))}));const r=document.querySelector(".class-list"),l=e.map((e=>`\n    <li class="li-main ${e.category}" id='${e.id}'>\n        <h2 class='h2-main'>${e.name}</h2>\n    </li>`));r.innerHTML=l.join("");const u=document.querySelector(".interactif"),m=document.querySelector(".class-list"),p=document.querySelectorAll("li");u.addEventListener("change",(function(){const e=u.value,t=Array.from(p).filter((t=>t.classList.contains(e)));console.log(t),m.innerHTML="",m.append(...t)}));const f=document.querySelector(".form-submit"),g=(document.querySelector("[data-modal-close]"),document.querySelector(".close-btn")),b=(document.querySelector("[data-modal]"),document.querySelector(".footer-backdrop"));document.querySelector(".foot-input");f.addEventListener("submit",(function(e){e.preventDefault(),e.target.email.value||alert("Введіть вашу електрону адресу!");b.classList.toggle("is-hidden")})),g.addEventListener("click",(function(){b.classList.toggle("is-hidden")}));let v=document.getElementById("1"),h=document.createElement("input");h.setAttribute("type","text"),h.classList.add("input-1"),h.placeholder="Pік народження";let L=document.createElement("button");L.setAttribute("type","button"),L.textContent="Пошук",L.classList.add("button-1");let E=document.createElement("p");E.classList.add("p-1"),E.textContent="",v.append(h,L,E),L.addEventListener("click",(function(){let e=document.querySelector(".input-1").value;E.textContent=e%4==0?"Вітаю, ви народилися у високосний рік":"На жаль, це не високосний рік"}));let x=document.createElement("input");x.setAttribute("type","text"),x.classList.add("input-2"),x.placeholder="Число від 1 до 10";let y=document.createElement("button");y.setAttribute("type","button"),y.classList.add("button-2"),y.textContent="Пошук";let C=document.createElement("p");C.classList.add("p-2"),C.textContent="",document.getElementById("2").append(x,y,C);const M=Math.floor(10*Math.random())+1;y.addEventListener("click",(function(){const e=document.querySelector(".input-2").value;C.textContent=e===M?`Вітаю, ви вгадали число ${M}`:`Ви програли, компʼютер загадав число ${M}`}));const S=document.getElementById("3"),H=document.createElement("div"),q=(document.createElement("h3"),document.createElement("ul"));H.id="RPSSection",q.id="RPSBtnList";let w=0,k=0;const T=["https://www.svgrepo.com/download/111747/stone.svg","https://www.clker.com/cliparts/N/5/T/b/T/l/white-scissors.svg.hi.png","https://freesvg.org/img/blackwhitepaperstack.png"],B=["КАМІНЬ","НОЖИЦІ","ПАПІР"];for(let e=0;e<B.length;e++){const t=document.createElement("li"),n=document.createElement("button");n.classList.add("RPSBtn"),n.id=e+1;const c=document.createElement("img");c.id="img",c.src=T[e],n.appendChild(c),t.appendChild(n),q.appendChild(t)}const A=document.createElement("p");A.textContent="Хто переміг",A.id="gameResults";const $=document.createElement("div");$.id="score";const _=document.createElement("p");_.textContent="Рахунок:";const j=document.createElement("p"),I=document.createElement("p");j.textContent=`Ви - ${w}`,I.textContent=`Комп’ютер - ${k}`,$.appendChild(_),$.appendChild(j),$.appendChild(I);const D=document.createElement("button");D.textContent="Варіант комп’ютера",D.classList.add("computerChoise");const G=document.createElement("div");G.id="gamePart",G.appendChild(q),G.appendChild(A),G.appendChild(D),H.appendChild(G),H.appendChild($),S.appendChild(H);const N=document.querySelectorAll(".RPSBtn");function W(e){e.currentTarget.classList.add("btnHover")}function P(e){e.currentTarget.classList.remove("btnHover")}let Z;function Y(e){const t=e.currentTarget.id,n=Math.floor(3*Math.random())+1;D.textContent=`Комп'ютер обрав ${B[n-1]}`,t==n&&(A.textContent="Нічия!",w+=1,k+=1,Z="rgb(255, 153, 0)"),(1==t&&2==n||2==t&&3==n||3==t&&1==n)&&(A.textContent="Ви виграли раунд!",w+=1,Z="yellowgreen"),(1==t&&3==n||2==t&&1==n||3==t&&2==n)&&(A.textContent="Комп'ютер виграв раунд!",k+=1,Z="red"),A.style.color=Z,j.textContent=`Ви - ${w}`,I.textContent=`Комп’ютер - ${k}`}N.forEach((e=>{e.addEventListener("mouseover",W)})),N.forEach((e=>{e.addEventListener("mouseout",P)})),N.forEach((e=>{e.addEventListener("click",Y)}));const z=document.getElementById("4"),F=document.createElement("div"),R=document.createElement("div"),V=document.createElement("ul"),K=document.createElement("div");F.classList.add("calculator__div"),R.classList.add("calculator__func"),V.classList.add("calc--btns__list"),K.classList.add(".calc__result-box");const O=document.createElement("li"),J=document.createElement("li"),X=document.createElement("li"),Q=document.createElement("li");O.classList.add("calc--list__item-plus"),J.classList.add("calc--list__item-mult"),X.classList.add("calc--list__item-minus"),Q.classList.add("calc--list__item-divis"),V.append(O,J,X,Q),R.append(V,K),F.append(R),z.append(R);const U=document.createElement("p");U.classList.add("p-result"),U.textContent="_",K.prepend(U);const ee=document.createElement("button");ee.textContent="+",ee.classList.add("calcBtn");const te=document.createElement("button");te.textContent="*",te.classList.add("calcBtn");const ne=document.createElement("button");ne.textContent="-",ne.classList.add("calcBtn");const ce=document.createElement("button");ce.textContent="/",ce.classList.add("calcBtn");const oe=document.createElement("button");oe.textContent="=",oe.classList.add("calcBtnEqual");const ae=document.createElement("input");ae.classList.add("calculator__input"),ae.placeholder="Введіть число";const ie=document.createElement("input");ie.classList.add("calculator__input"),ie.placeholder="Введіть число",R.prepend(ae),V.after(ie),ie.after(oe),O.prepend(ee),J.prepend(te),X.prepend(ne),Q.prepend(ce);let de=0,se=0;ae.addEventListener("blur",(function(){de=Number(ae.value)})),ie.addEventListener("blur",(function(){se=Number(ie.value)}));let re=0;ee.addEventListener("click",(function(){re=de+se})),te.addEventListener("click",(function(){re=de*se})),ne.addEventListener("click",(function(){re=de-se})),ce.addEventListener("click",(function(){re=de/se})),oe.addEventListener("click",(function(){U.textContent=re}));document.getElementById("5").innerHTML='<section class="time-calculator">\n    <div class="container">\n       <div class="wrapper-title">\n          <div class="title">\n             <h2>Калькулятор часу</h2>\n          </div>\n       </div>\n       <div class="wrapper-content">\n          <div class="wrapper-input">\n             <input type="text" placeholder="Введіть число">\n             <div class="wrapper-svg">\n                <img src="/src/images/Group 104.svg" alt="">\n             </div>\n          </div>\n          <div class="wrapper-time">\n             <h4>0дн 00:00</h4>\n          </div>\n       </div>\n    </div>\n </section>';const le=document.querySelector(".wrapper-input > input"),ue=document.querySelector("h4");let me;le.addEventListener("input",(function(e){const t=parseInt(e.currentTarget.value),n=Math.floor(t/1440),c=Math.floor(t%1440/60),o=t%60,a=`${n}дн ${c.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;ue.textContent=a}));let pe=null;document.getElementById("6").innerHTML='\n    <div class="dino-container">\n    <div user-select="text" class="name">Google динозавр</div>\n    <div class="dino-game">\n        <div class="message">Press G to start</div>\n        <div class="counter">0</div>\n        <div class="dino"></div>\n        <div class="cactus"></div>\n        <div class="ground"></div>\n    </div>\n</div>\n';const fe=document.querySelector(".dino"),ge=document.querySelector(".cactus"),be=document.querySelector(".message");let ve=document.querySelector(".counter"),he=0;setInterval((()=>{let e=parseInt(window.getComputedStyle(fe).getPropertyValue("top"));if(parseInt(window.getComputedStyle(ge).getPropertyValue("left"))<55&&e>=165){pe=null,console.log(pe),ge.classList.remove("cactus-anim"),fe.classList.remove("dino-running"),be.classList.remove("message-hide"),fe.classList.add("dino-lose");
//!Important
let e=new Audio;e.src="../src/audio/die.wav",e.play(),clearInterval(me),setTimeout((function(){fe.classList.remove("dino-lose")}),200)}}),10);document.addEventListener("keydown",(function(e){"KeyG"===e.code&&("dino-jump"!=fe.classList&&(fe.classList.add("dino-jump"),setTimeout((function(){fe.classList.remove("dino-jump")}),300)),fe.classList.contains("dino-running")&&clearInterval(me),null===pe&&(me=setInterval((function(){he+=1,ve.innerHTML=he}),300)),ge.classList.add("cactus-anim"),fe.classList.add("dino-running"),be.classList.add("message-hide"))}));const Le=document.getElementById("7");let Ee="ball-moving";(()=>{const e=document.createElement("div"),t=document.createElement("div");e.classList.add("football-field"),t.classList.add("ball"),e.append(t),Le.append(e);e.addEventListener("click",(e=>{"ball-moving"!==Ee?Ee="ball-moving":"ball-moving"===Ee&&(Ee="ball-moving2"),t.style.left=`${e.offsetX}px`,t.style.top=`${e.offsetY}px`,t.style.animationName=`${Ee}`}))})();const xe=document.getElementById("8");let ye=0;const Ce=document.createElement("ul");xe.appendChild(Ce);const Me=document.createElement("p");xe.appendChild(Me),Me.textContent="Найбільше число, яке ви ввели - ";let Se=[],He=[];for(let e=0;e<3;e+=1)Se[e]=document.createElement("li"),Ce.appendChild(Se[e]),He[e]=document.createElement("input"),He[e].type="number",He[e].placeholder="Введіть число",Se[e].appendChild(He[e]),He[e].addEventListener("change",(e=>{ye=Math.max(ye,e.target.value),Me.textContent="Найбільше число, яке ви ввели - "+String(ye)}));const qe=[{id:0,name:"Настя Скрицька ",discription:"Створення хедера, футера та модального вікна до футера",img:"https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{id:1,name:"Даніїл",discription:" Написати програму, яка отримає від користувача число та виведе на екран рядок в форматі години та хвилини",img:"https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},{id:2,name:"Іван",discription:"Верстка модального вікна. Реалізація відкриття модального вікна привітання користувач",img:"https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{id:3,name:"Анастасія Бунякіна",discription:"Програма, яка буде перевіряти чи рік народження користувача був високосним & Програма, де комп‘ютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні)",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"},{id:4,name:" Федір Борисенко",discription:"Калькулятор",img:"https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},{id:5,name:"Нєма Вероніка",discription:"Зробити слайдер зображень - перелистування зображення по кнопкам вліво та вправо, якщо зображення закінчилися, кнопка повиння зникнути або стати неактивною",img:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}],we=document.getElementById("9"),ke=document.createElement("div");ke.classList.add("mainDiv");const Te=document.createElement("div");Te.classList.add("main"),ke.append(Te);const Be=document.createElement("button");Be.classList.add("leftButton"),Te.append(Be);const Ae=document.createElement("img");Ae.classList.add("photo"),Ae.src=qe[0].img,Te.append(Ae);const $e=document.createElement("button");$e.classList.add("rightButton"),Te.append($e);const _e=document.createElement("h4");_e.textContent=qe[0].name,_e.classList.add("nameText"),ke.append(_e);const je=document.createElement("p");je.textContent=qe[0].discription,je.classList.add("discriptionText"),ke.append(je),we.append(ke),Be.addEventListener("click",(function(){for(let e=qe.length-1;e<qe.length+1;e-=1){if(qe[e].img===Ae.src)return Ae.src=qe[e-1].img}})),Be.addEventListener("click",(function(){for(let e=qe.length-1;e<qe.length+1;e-=1){if(qe[e].name===_e.textContent)return _e.textContent=qe[e-1].name}})),Be.addEventListener("click",(function(){for(let e=qe.length-1;e<qe.length+1;e-=1){if(qe[e].discription===je.textContent)return je.textContent=qe[e-1].discription}})),$e.addEventListener("click",(function(){for(let e=0;e<qe.length;e+=1){if(qe[e].img===Ae.src){if(e===qe.length-1)return;return Ae.src=qe[e+1].img}}})),$e.addEventListener("click",(function(){for(let e=0;e<qe.length;e+=1){if(qe[e].name===_e.textContent){if(e===qe.length-1)return;return _e.textContent=qe[e+1].name}}})),$e.addEventListener("click",(function(){for(let e=0;e<qe.length;e+=1){if(qe[e].discription===je.textContent){if(e===qe.length-1)return;return je.textContent=qe[e+1].discription}}}));const Ie=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],De=document.getElementById("10"),Ge=document.createElement("ul");function Ne(e){return` \n\t\t<li class="cards">\n\t\t\t<h2>${e.name} ${e.surname}</h2>\n\t\t\t<p>${e.born} <br> ${e.dead}</p>\n\t\t</li>\n   `}Ge.classList.add("scientist-list"),De.append(Ge),function(){for(let e=0;e<Ie.length;e++){let t=Ne(Ie[e]);Ge.innerHTML+=t}}(),function(e){for(let n=0;n<e.length;n++){let c=`\n\t<button \n\t\ttype="button" \n\t\tclass="buttons ${(t=e[n]).class}">\n\t\t${t.text}\n\t</button>\n\t`;De.insertAdjacentHTML("beforeend",c)}var t}([{class:"button-3",text:"Відсортувати вчених за кількістю прожитих років"},{class:"button-4",text:"Знайти вченого, який народився найпізніше"},{class:"button-5",text:"Знайти вчених, в яких співпадають перші літери імені і прізвища"},{class:"button-6",text:"Знайти рік народження Albert Einshtein "},{class:"button-7",text:'Знайти вчених, прізвища яких починаються не на літеру "С"'},{class:"button-8",text:"Видалити всіх вчених, ім’я яких починається на “А”"},{class:"button-9",text:" Знайти вченого, який прожив найдовше і вченого, який прожив найменше"},{class:"button-10",text:"Які вчені народилися в 19 ст."},{class:"button-11",text:"Відсортувати вчених за алфавітом"}]);document.querySelector(".button-10").addEventListener("click",(function(){const e=Ie.filter((e=>e.born>=1800&&e.born<=1900)).sort(((e,t)=>e.born-t.born)).map(Ne).join("");Ge.innerHTML=e}));document.querySelector(".button-11").addEventListener("click",(function(){const e=Ie.sort(((e,t)=>e.name.localeCompare(t.name))).map(Ne).join("");Ge.innerHTML=e}));document.querySelector(".button-3").addEventListener("click",(function(){const e=Ie.sort(((e,t)=>t.dead-t.born-(e.dead-e.born))).map(Ne).join("");Ge.innerHTML=e}));document.querySelector(".button-4").addEventListener("click",(function(){const e=Ne(Ie.reduce(((e,t)=>t.born>e.born?t:e)));Ge.innerHTML="",Ge.insertAdjacentHTML("beforeend",e)}));document.querySelector(".button-5").addEventListener("click",(function(){const e=Ie.filter((e=>e.name[0]===e.surname[0])).map(Ne).join("");Ge.innerHTML=e}));document.querySelector(".button-6").addEventListener("click",(function(){const e=Ne(Ie.find((e=>"Albert"===e.name&&"Einstein"===e.surname)));Ge.innerHTML="",Ge.insertAdjacentHTML("beforeend",e)}));document.querySelector(".button-7").addEventListener("click",(function(){const e=Ie.filter((e=>"C"!==e.surname.charAt(0))).map(Ne).join("");Ge.innerHTML=e}));document.querySelector(".button-8").addEventListener("click",(function(){const e=Ie.filter((e=>!e.name.startsWith("A"))).map(Ne).join("");Ge.innerHTML=e}));document.querySelector(".button-9").addEventListener("click",(function(){const e=Ie.sort(((e,t)=>e.dead-e.born-(t.dead-t.born))),t=e[0],n=e[e.length-1],c=Ne(t),o=Ne(n);Ge.innerHTML="",Ge.insertAdjacentHTML("beforeend",c),Ge.insertAdjacentHTML("beforeend",o)}));
//# sourceMappingURL=index.0552bc81.js.map