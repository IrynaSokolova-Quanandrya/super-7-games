import games from './data/games'

const listEl = document.querySelector('.game-list-js');

const gamesMarkup = games.map((game)=>{
   return `<li class="item">
   <h2>${game.name}</h2>
   </li>`
})

listEl.insertAdjacentHTML('beforeend', ...gamesMarkup)