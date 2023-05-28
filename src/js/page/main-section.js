
import games from './data/games.js';

const list = document.querySelector('.class-list')
const listItems = games.map(game => `<li class="li-main" id='${game.id}'><svg class="img-main" xmlns="http://www.w3.org/2000/svg" width="536" height="2" viewBox="0 0 536 2"><path d="M0 1 H536" stroke="black" /></svg><h2 class='h2-main'>${game.name}</h2></li>`);
list.innerHTML = listItems.join('')

