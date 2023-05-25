const checkboxEl = document.querySelector(".topic-website-svg")
const containerEl = document.querySelector(".container")
const lightEl = document.querySelector(".light")
const darkEl = document.querySelector(".dark")

checkboxEl.addEventListener("change", changeTheme)

function changeTheme(){
    if (checkboxEl.checked) {
        containerEl.classList.toggle("black-theme")
    } else{
        containerEl.classList.toggle("black-theme")
    }
}
