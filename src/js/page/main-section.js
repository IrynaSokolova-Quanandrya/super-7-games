import './data/games.js'
const list = document.querySelector('.class-list')
const listItems = games.map(game => `<li class='${game.id}'><h2>${game.name}</h2></li>`);
list.innerHTML = listItems.join('')