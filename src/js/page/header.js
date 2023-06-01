const sectionEl = document.querySelector(".section")
const checkboxEl = document.querySelector(".theme-switch__toggle")
const containerEl = document.querySelectorAll(".container")
const lightEl = document.querySelector(".light")
const darkEl = document.querySelector(".dark")

// console.log(checkboxEl);
checkboxEl.addEventListener("change", changeTheme)


function changeTheme(){
    if (checkboxEl.checked) {
        containerEl.forEach((container)=>container.classList.toggle("black-theme"))
        
        sectionEl.classList.toggle("black-theme")
    } else{
        document.body.classList.toggle("black-theme")
    }
}

