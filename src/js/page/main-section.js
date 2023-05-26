
import './data/games.js'
import games from './data/games.js';
console.log(games);
const list = document.querySelector('.class-list')
const listItems = games.map(game => `<li class='li-main' id='${game.id}'><img src="/src/images/Vector 215.png" class='img-main' alt="img-main"><h2 class='h2-main'>${game.name}</h2></li>`);




list.innerHTML = listItems.join('')