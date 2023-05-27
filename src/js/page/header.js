
const selectInter = document.querySelector(".interactif") ;
const intGames = document.querySelectorAll(".game");
const intNumericals = document.querySelectorAll(".numerical");
const intAcquaintances = document.querySelectorAll(".acquaintance");

selectInter.addEventListener("change", onChange);
function onChange(){
    if(selectInter.value = "all"){
        for(game in intGames){
            game.classlist.remove(hide)
        }
        for(game in intNumericals){
            game.classlist.remove(hide)
        }
        for(game in intAcquaintances){
            game.classlist.remove(hide)
        }}  else if(selectInter.value = "numerical"){
            for(game in intGames){
                game.classlist.add(hide)
            }
            for(game in intNumericals){
                game.classlist.remove(hide)
            }
            for(game in intAcquaintances){
                game.classlist.add(hide)
            }}
            else if(selectInter.value = "game"){
                for(game in intGames){
                    game.classlist.remove(hide)
                }
                for(game in intNumericals){
                    game.classlist.add(hide)
                }
                for(game in intAcquaintances){
                    game.classlist.add(hide)
                }}
                else {
                    for(game in intGames){
                        game.classlist.add(hide)
                    }
                    for(game in intNumericals){
                        game.classlist.add(hide)
                    }
                    for(game in intAcquaintances){
                        game.classlist.remove(hide)
                    }}  
}

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

