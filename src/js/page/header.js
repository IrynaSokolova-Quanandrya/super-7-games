
const checkboxEl = document.querySelector(".theme-switch__toggle")
const containerEl = document.querySelector(".container")
const lightEl = document.querySelector(".light")
const darkEl = document.querySelector(".dark")

// console.log(checkboxEl);
checkboxEl.addEventListener("change", changeTheme)


function changeTheme(){
    if (checkboxEl.checked) {
        containerEl.classList.toggle("black-theme")
    } else{
        containerEl.classList.toggle("black-theme")
    }
}

