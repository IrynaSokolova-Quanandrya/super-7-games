const calculatorDiv = document.querySelector(".calculator__div");
const calculatorFunc = document.querySelector(".calculator__func");
const calcBtnList = document.querySelector(".calc--btns__list");

const calcListItemPlus = document.querySelector(".calc--list__item-plus");
const calcListItemMult = document.querySelector(".calc--list__item-mult");
const calcListItemMinus = document.querySelector(".calc--list__item-minus");
const calcListItemDivis = document.querySelector(".calc--list__item-divis");

const calcDivRes=document.querySelector(".calc__result-box");
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