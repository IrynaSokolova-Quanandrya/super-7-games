const team = [ 
    { 
        id: 0, 
        name: 'Настя Скрицька ', 
        discription: 'Створення хедера, футера та модального вікна до футера', 
        img: 'https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' 
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
        img: 'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' 
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
 
// const divEl = document.querySelector('.mainDiv') 
// const divIn = document.querySelector('.main') 

const container = document.getElementById('9')

 

const divEl = document.createElement('div');
divEl.classList.add('mainDiv');

const divIn = document.createElement('div');
divIn.classList.add('main')
divEl.append(divIn);

const leftButtonEl = document.createElement('button')
leftButtonEl.classList.add("leftButton")
divIn.append(leftButtonEl) 

const photo = document.createElement('img') 
photo.classList.add("photo")
photo.src = team[0].img 
divIn.append(photo) 



const rightButtonEl = document.createElement('button')
rightButtonEl.classList.add("rightButton")
divIn.append(rightButtonEl) 

const nameEl = document.createElement('h4') 

nameEl.textContent = team[0].name 
nameEl.classList.add('nameText')
divEl.append(nameEl) 


const doWork = document.createElement('p') 
doWork.textContent = team[0].discription 
doWork.classList.add('discriptionText')
divEl.append(doWork)


container.append(divEl)






leftButtonEl.addEventListener('click', onLeftBtnClick); 
 
function onLeftBtnClick() { 
  
  for (let i = team.length - 1; i < team.length + 1; i -= 1) { 
    const elem = team[i]; 
     
    if (elem.img === photo.src) {       
      return photo.src = team[i - 1].img; 
    } 
  } 
}; 

leftButtonEl.addEventListener('click', changeNameBack); 

function changeNameBack(){
    for (let i = team.length - 1; i < team.length +1 ; i -= 1) { 
        const elem = team[i]; 
        
        if (elem.name === nameEl.textContent) {         
          return nameEl.textContent = team[i - 1].name; 
            
      } }
}
 
leftButtonEl.addEventListener('click', changeDiscriptionBack); 

function changeDiscriptionBack(){
    for (let i =  team.length - 1; i < team.length + 1; i -= 1) { 
        const elem = team[i]; 
        
        if (elem.discription === doWork.textContent) { 
          
          return doWork.textContent = team[i - 1].discription; 
            
      } }
}


 



rightButtonEl.addEventListener('click', onRightBtnClick); 
 
function onRightBtnClick() { 
  
  for (let i = 0; i < team.length; i += 1) { 
    const elem = team[i]; 
     
    if (elem.img === photo.src) { 
      if (i === team.length - 1) { 
        return; 
      }        
      return photo.src = team[i + 1].img; 
    } 
  } 
}; 

   

rightButtonEl.addEventListener('click', changeName); 

function changeName(){
    for (let i = 0; i < team.length; i += 1) { 
        const elem = team[i]; 
        
        if (elem.name === nameEl.textContent) { 
          if (i === team.length - 1) { 
            return; 
          }        
          return nameEl.textContent = team[i + 1].name; 
            
      } }
}


 


rightButtonEl.addEventListener('click', changeDiscription); 

function changeDiscription(){
    for (let i = 0; i < team.length; i += 1) { 
        const elem = team[i]; 
        
        if (elem.discription === doWork.textContent) { 
          if (i === team.length - 1) { 
            return; 
          }        
          return doWork.textContent = team[i + 1].discription; 
            
      } }
}


