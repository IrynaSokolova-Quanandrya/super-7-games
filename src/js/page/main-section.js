import games from './data/games.js';
console.log(games);

const list = document.querySelector('.class-list')

const listItems = games.map(game => `<li id='${game.id}'><h2>${game.name}</h2></li>`);

list.innerHTML = listItems.join('')