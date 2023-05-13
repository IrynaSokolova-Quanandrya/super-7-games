const team = [ 
    { 
        id: 0, 
        name: 'Настя Скрицька ', 
        discription: 'Створення хедера, футера та модального вікна до футера', 
        img: 'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
    }, 
    { 
        id: 1, 
        name: 'Даніїл', 
        discription:' Написати програму, яка отримає від користувача число та виведе на екран рядок в форматі години та хвилини', 
        img: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' 
    }, 
    { 
        id: 2, 
        name: 'Іван', 
        discription: 'Верстка модального вікна. Реалізація відкриття модального вікна привітання користувач', 
        img: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
    }, 
    { 
        id: 3, 
        name: 'Анастасія Бунякіна', 
        discription: 'Програма, яка буде перевіряти чи рік народження користувача був високосним & Програма, де комп‘ютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні)', 
        img: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80' 
    }, 
    { 
        id: 4, 
        name:' Федір Борисенко', 
        discription: 'Калькулятор', 
        img: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
    }, 
    { 
        id: 5, 
        name: 'Нєма Вероніка', 
        discription: 'Зробити слайдер зображень - перелистування зображення по кнопкам вліво та вправо, якщо зображення закінчилися, кнопка повиння зникнути або стати неактивною', 
        img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
    } 
] 
 
const divEl = document.querySelector('.mainDiv') 
const titleEl = document.createElement('h1') 
titleEl.textContent = 'Наша команда' 
divEl.append(titleEl) 
 
const photo = document.createElement('img') 
photo.classList.add("photo")
photo.src = team[0].img 
divEl.append(photo) 



const leftButtonEl = document.createElement('button')
leftButtonEl.classList.add("leftButton")
divEl.append(leftButtonEl) 

const rightButtonEl = document.createElement('button')
rightButtonEl.classList.add("rightButton")
divEl.append(rightButtonEl) 

rightButtonEl.addEventListener("click", () => {
 for (let i = 0; i < team.length; i += 1) {
 console.log(i)
 
console.log(team[i].img === photo.src)

    if(team[i].img === photo.src){
        if(i === team.length-1){
            return;
        }

    }
    console.log(team[i + 1].img)
    return photo.src = team[i + 1].img;

    
    

 }
    
  
})



const nameEl = document.createElement('p') 
nameEl.textContent = team[0].name 
divEl.append(nameEl) 
 
const doWork = document.createElement('p') 
doWork.textContent = team[0].discription 
divEl.append(doWork)

