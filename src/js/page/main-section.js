import './data/games.js'
const list = document.querySelector('.class-list')
console.log(games);
const listItems = games.map(game => `<li id='${game.id}'><h2>${game.name}</h2></li>`);

list.innerHTML = listItems.join('')