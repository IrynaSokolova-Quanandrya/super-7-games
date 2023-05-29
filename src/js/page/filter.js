const selectInter = document.querySelector(".interactif") ;
const gameList = document.querySelector('.class-list')
const gameItems = document.querySelectorAll('li')

selectInter.addEventListener("change", onChange);
function onChange(){
    const inputValue = selectInter.value;
    const gameItem = Array.from(gameItems)
    .filter(game=>game.classList.contains(inputValue))

    console.log(gameItem);

    gameList.innerHTML = '';
    gameList.append(...gameItem)
    
}