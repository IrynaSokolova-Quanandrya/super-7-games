const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop')
const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-btn');
const userName = document.querySelector('.user')


document.addEventListener("DOMContentLoaded", () => {
    backdrop.style.opacity = '1';
    modal.style.opacity = '1';
});

backdrop.addEventListener('click', onBackdropClose)
window.addEventListener('keydown', keyPressedClose)

submitBtn.addEventListener('click', submitBtnClose)

function closeModal() {
    backdrop.style.width = '0px'
    modal.style.display = 'none';
}

function submitBtnClose(event) {
    event.preventDefault();
    const name = nameInput.value
    userName.innerHTML = `Вітаємо, ${name}!`
    closeModal()
}

function keyPressedClose(event) {
    if (event.key == 'Escape') {
        closeModal()
    }
}

function onBackdropClose(event) {
    if (event.target == backdrop) {
        closeModal()
    }
}
