const formEl = document.querySelector(".form-submit")
const closeModalBtn = document.querySelector("[data-modal-close]")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector("[data-modal]")
const backdrop = document.querySelector(".footer-backdrop")
const inputEl = document.querySelector(".foot-input")

formEl.addEventListener("submit", onBtnSubmit)

closeBtn.addEventListener('click', onBtnSubmit);

function onBtnSubmit(event) {
    event.preventDefault()
    if(!event.target.email.value){
        alert("Введіть вашу електрону адресу!")
    } else{
        backdrop.classList.toggle('is-hidden');
    }
}