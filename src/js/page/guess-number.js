let input2 = document.createElement('input')
input2.setAttribute('type','text')
input2.classList.add('input-2')

let button2 = document.createElement('button')
button2.setAttribute('type')
button2.classList.add('button-2')

// let text2 = document.createElement('h3')
// text2.classList.add('h3-2')
// text2.textContent = 'Вгадай число, яке загадав компʼютер'

let result2 = document.createElement('p')
result2.classList.add('p-2')
result2.textContent = ''

let body = document.getElementById('2')

// body.appendChild(text2);
body.appendChild(input2);
body.appendChild(button2);
body.appendChild(result2);


const randomNumber = Math.floor(Math.random() * 10) + 1;
const userNumber = document.querySelector('.input-2');


function guessNumber(){
    if (userNumber == randomNumber) {
        result2.textContent = 'Вітаю, ви вгадали число ' + `${randomNumber}`;
    } else {
        result2.textContent = 'Ви програли, компʼютер загадав число ' + `${randomNumber}`;
    }
}

button2.addEventListener('click', guessNumber);




