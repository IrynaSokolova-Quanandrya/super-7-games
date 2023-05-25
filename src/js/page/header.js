const checkboxEl = document.querySelector(".topic-website-svg")
const containerEl = document.querySelector(".container")

checkboxEl.addEventListener("change", changeTheme)

function changeTheme(){
    if (checkboxEl.checked) {
        containerEl.classList.toggle("black-theme")
        // console.log("clicked")
    } else{
        containerEl.classList.toggle("black-theme")
    }
}
