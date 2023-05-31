calculatorGameContainer = document.getElementById("4");

const calculatorDiv = document.createElement("div");
const calculatorFunc = document.createElement("div");
const calcBtnList = document.createElement("ul");
const calcDivRes=document.createElement("div");

calculatorDiv.classList.add("calculator__div");
calculatorFunc.classList.add("calculator__func");
calcBtnList.classList.add("calc--btns__list");
calcDivRes.classList.add(".calc__result-box");

const calcListItemPlus = document.createElement("li");
const calcListItemMult = document.createElement("li");
const calcListItemMinus = document.createElement("li");
const calcListItemDivis = document.createElement("li");

calcListItemPlus.classList.add("calc--list__item-plus");
calcListItemMult.classList.add("calc--list__item-mult");
calcListItemMinus.classList.add("calc--list__item-minus");
calcListItemDivis.classList.add("calc--list__item-divis");

calcBtnList.append(
    calcListItemPlus, 
    calcListItemMult,
    calcListItemMinus,
    calcListItemDivis
    );
calculatorFunc.append(calcBtnList, calcDivRes);
calculatorDiv.append(calculatorFunc);
calculatorGameContainer.append(calculatorFunc);

// console.log(calcBtnList);
// console.log(calculatorFunc);
// console.log(calculatorDiv);
// console.log(calculatorGameContainer);
// const calculatorDiv = document.querySelector(".calculator__div");
// const calculatorFunc = document.querySelector(".calculator__func");
// const calcBtnList = document.querySelector(".calc--btns__list");

// const calcListItemPlus = document.querySelector(".calc--list__item-plus");
// const calcListItemMult = document.querySelector(".calc--list__item-mult");
// const calcListItemMinus = document.querySelector(".calc--list__item-minus");
// const calcListItemDivis = document.querySelector(".calc--list__item-divis");

// const calcDivRes=document.querySelector(".calc__result-box");
const textResult = document.createElement("p");
textResult.classList.add("p-result");
textResult.textContent="_";
calcDivRes.prepend(textResult);

const calcBtnPlus = document.createElement("button");
calcBtnPlus.textContent = "+";
calcBtnPlus.classList.add("calcBtn");
const calcBtnMult = document.createElement("button");
calcBtnMult.textContent = "*";
calcBtnMult.classList.add("calcBtn");
const calcBtnMinus = document.createElement("button");
calcBtnMinus.textContent = "-";
calcBtnMinus.classList.add("calcBtn");
const calcBtnDivis = document.createElement("button");
calcBtnDivis.textContent = "/";
calcBtnDivis.classList.add("calcBtn");
const calcBtnEqual = document.createElement("button");
calcBtnEqual.textContent = "=";
calcBtnEqual.classList.add("calcBtnEqual");




const calculatorInputEl1 = document.createElement("input");
calculatorInputEl1.classList.add("calculator__input");
calculatorInputEl1.placeholder ="Введіть число";

const calculatorInputEl2 = document.createElement("input");
calculatorInputEl2.classList.add("calculator__input");
calculatorInputEl2.placeholder ="Введіть число";

calculatorFunc.prepend(calculatorInputEl1);
calcBtnList.after(calculatorInputEl2);
calculatorInputEl2.after(calcBtnEqual);
calcListItemPlus.prepend(calcBtnPlus);
calcListItemMult.prepend(calcBtnMult);
calcListItemMinus.prepend(calcBtnMinus);
calcListItemDivis.prepend(calcBtnDivis);

let var1 = 0;
let var2 = 0;
calculatorInputEl1.addEventListener("blur",var1f);

function var1f(){
    var1 = Number(calculatorInputEl1.value)
   
    
};
calculatorInputEl2.addEventListener("blur",var2f);

function var2f(){
    var2 = Number(calculatorInputEl2.value)
    
};
let result = 0;
calcBtnPlus.addEventListener("click",onClickPlus);
function onClickPlus(){
 result = var1 + var2
};
calcBtnMult.addEventListener("click",onClickMult);
function onClickMult(){
 result = var1 * var2
};
calcBtnMinus.addEventListener("click",onClickMinus);
function onClickMinus(){
 result = var1 - var2
};
calcBtnDivis.addEventListener("click",onClickDivis);
function onClickDivis(){
 result = var1 / var2
};

calcBtnEqual.addEventListener("click",onClickEqual)
function onClickEqual(){
    textResult.textContent = result
};