let body = document.getElementById('1')
// console.log(body)

let input = document.createElement('input')
input.setAttribute('type','text')
input.classList.add('input-1')
input.placeholder = 'Pік народження';

let button = document.createElement('button')
button.setAttribute('type','button')
button.textContent = 'Пошук'
button.classList.add('button-1')

// let text = document.createElement('h3')
// text.classList.add('h3')
// text.textContent = 'Перевір в який рік ти народився'

let result = document.createElement('p')
result.classList.add('p-1')
result.textContent = '';


// body.appendChild(text);
body.append(input,button,result);



// let year = document.querySelector('.input-1').value;


function getResult() {
//    // console.log(year)
   let year = document.querySelector('.input-1').value;
   // console.log(year)
   if (year % 4 === 0){
        result.textContent = `Вітаю, ви народилися у високосний рік`;
    } else {
        result.textContent = `На жаль, це не високосний рік`;
    }
}

button.addEventListener('click', getResult);