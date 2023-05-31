let input2 = document.createElement('input')
input2.setAttribute('type','text')
input2.classList.add('input-2')
input2.placeholder = 'Число від 1 до 10';

let button2 = document.createElement('button')
button2.setAttribute('type','button')
button2.classList.add('button-2')
button2.textContent = 'Пошук';
// button2.textContent.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.52174" cy="6.52174" r="5.52174" stroke="white" stroke-width="2"/><path d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z" fill="white"/></svg>'

// let text2 = document.createElement('h3')
// text2.classList.add('h3-2')
// text2.textContent = 'Вгадай число, яке загадав компʼютер'

let result2 = document.createElement('p')
result2.classList.add('p-2')
result2.textContent = '';

let body = document.getElementById('2')

// body.appendChild(text2);
body.append(input2,button2,result2);



const randomNumber = Math.floor(Math.random() * 10) + 1;
// const userNumber = document.querySelector('.input-2').value;


function guessNumber(){
    const userNumber = document.querySelector('.input-2').value;
    if (userNumber === randomNumber) {
        result2.textContent = 'Вітаю, ви вгадали число ' + `${randomNumber}`;
    } else {
        result2.textContent = 'Ви програли, компʼютер загадав число ' + `${randomNumber}`;
    }
}

button2.addEventListener('click', guessNumber);




