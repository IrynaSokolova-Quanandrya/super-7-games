const section = document.createElement('section')
const heading = document.createElement('h3')
const buttonList = document.createElement('ul')
section.id='RPSSection'
buttonList.id='RPSBtnList'
let w=0
let l=0

heading.textContent = "Камінь - ножиці - папір"

const options = [
  'КАМІНЬ',
  'НОЖИЦІ',
  'ПАПІР'
]

for (let i = 0; i < options.length; i++) {
  const listItem = document.createElement('li')
  const button = document.createElement('button')
  button.classList.add('RPSBtn')
  button.id=i+1
  button.textContent=options[i]
  listItem.appendChild(button)
  buttonList.appendChild(listItem)
}

const gameResults=document.createElement('p')
gameResults.textContent='Хто переміг'
gameResults.id='gameResults'

const score = document.createElement('div')
score.id='score'
const mainScoreText=document.createElement('p')
mainScoreText.textContent='Рахунок:'
const winScoreText=document.createElement('p')
const lostScoreText=document.createElement('p')
winScoreText.textContent=`Ви - ${w}`
lostScoreText.textContent=`Комп’ютер - ${l}`
score.appendChild(mainScoreText)
score.appendChild(winScoreText)
score.appendChild(lostScoreText)
const computerChoise=document.createElement('button')
computerChoise.textContent='Варіант комп’ютера'
computerChoise.classList.add('computerChoise')
const gamePart=document.createElement('div')
gamePart.id='gamePart'

gamePart.appendChild(heading)
gamePart.appendChild(buttonList)
gamePart.appendChild(gameResults)
gamePart.appendChild(computerChoise)
section.appendChild(gamePart)
section.appendChild(score)

document.body.appendChild(section)

const RPSBtns=document.querySelectorAll('.RPSBtn')

RPSBtns.forEach(btn=>{btn.addEventListener('mouseover', hover)})
RPSBtns.forEach(btn=>{btn.addEventListener('mouseout', unhover)})
function hover(event){
  event.currentTarget.classList.add('btnHover')
}
function unhover(event){
  event.currentTarget.classList.remove('btnHover')
}

RPSBtns.forEach(Btn => {Btn.addEventListener('click', RPS)})
function RPS(event){
    const a = event.currentTarget.id
    const b = Math.floor(Math.random() * 3) + 1
    computerChoise.textContent=`Комп'ютер обрав ${options[b-1]}`
    console.log(a, b)
    if(a==b){
        gameResults.textContent='Нічия!'
        w+=1
        l+=1
    }
    if(a==1&&b==2||a==2&&b==3||a==3&&b==1){
        gameResults.textContent='Ви виграли раунд!'
        w+=1
    }
    if(a==1&&b==3||a==2&&b==1||a==3&&b==2){
        gameResults.textContent="Комп'ютер виграв раунд!"
        l+=1
    }
    winScoreText.textContent=`Ви - ${w}`
    lostScoreText.textContent=`Комп’ютер - ${l}`
}