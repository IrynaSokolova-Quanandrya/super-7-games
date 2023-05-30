
import games from '../data/games';

const list = document.querySelector('.class-list')
const listItems = games.map(game => `
    <li class="li-main ${game.category}" id='${game.id}'>
        <h2 class='h2-main'>${game.name}</h2>
    </li>`);
list.innerHTML = listItems.join('')

