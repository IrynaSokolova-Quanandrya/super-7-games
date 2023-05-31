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