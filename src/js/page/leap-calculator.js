let input = document.createElement('input')
input.setAttribute('type','text')
input.classList.add('input-1')

let button = document.createElement('button')
button.setAttribute('type','button')
button.classList.add('button-1')

// let text = document.createElement('h3')
// text.classList.add('h3')
// text.textContent = 'Перевір в який рік ти народився'

let result = document.createElement('p')
result.classList.add('p-1')
result.textContent = ''

let body = document.getElementById('1')
console.log(body)
// body.appendChild(text);
body.append(input,button,result);



let year = document.querySelector('.input-1')


function getResult() {
    if (year % 4 == 0){
        result.textContent = `${year} це високосний рік`;
    } else {
        result.textContent = `${year} це не високосний рік`;
    }
}

button.addEventListener('click', getResult);