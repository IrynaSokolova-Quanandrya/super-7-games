import './data/games.js'
const list = document.querySelector('.class-list')
const listItems = games.map(game => `<li><h2></h2></li>`);
list.innerHTML = listItems.join('')