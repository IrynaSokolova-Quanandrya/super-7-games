
const checkboxEl = document.querySelector(".theme-switch__toggle")
const containerEl = document.querySelector(".container")
const lightEl = document.querySelector(".light")
const darkEl = document.querySelector(".dark")

// console.log(checkboxEl);
checkboxEl.addEventListener("change", changeTheme)


function changeTheme(){
    if (checkboxEl.checked) {
        document.body.classList.toggle("black-theme")
    } else{
        document.body.classList.toggle("black-theme")
    }
}

