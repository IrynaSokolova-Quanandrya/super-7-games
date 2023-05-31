const formEl = document.querySelector(".form-submit")
const closeModalBtn = document.querySelector("[data-modal-close]")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector("[data-modal]")
const backdrop = document.querySelector(".backdrop")
const inputEl = document.querySelector(".foot-input")

formEl.addEventListener("submit", onBtnSubmit)

closeBtn.addEventListener('click', onBtnSubmit);

function onBtnSubmit(event) {
    event.preventDefault()
    backdrop.classList.toggle('is-hidden');
}

inputEl.addEventListener("click", onBtnInp)

function onBtnInp(event){
    event.preventDefault()
    if (inputEl.textContent = "") {
        backdrop.classList.remove('is-hidden');
    } else if(inputEl.textContent = ""){
        backdrop.classList.toggle('is-hidden');
    }
}