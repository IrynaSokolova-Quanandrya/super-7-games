// const team = [
//     {
//         id,
//         name,
//         discription,
//         img
//     },
//     {
//         id,
//         name,
//         discription,
//         img
//     },
//     {
//         id,
//         name,
//         discription,
//         img
//     },
//     {
//         id,
//         name,
//         discription,
//         img
//     },
//     {
//         id,
//         name,
//         discription,
//         img
//     },
//     {
//         id,
//         name,
//         discription,
//         img
//     }
// ]

const divEl = document.querySelector('.first')

const titleEl = document.createElement('h1')
titleEl.textContent = 'Наша команда'
divEl.append(titleEl)

const photo = document.createElement('img')
photo.src = team[0].img
divEl.append(photo) 

const namesEl = document.createElement('p')
namesEl.textContent = ''
divEl.append(namesEl)

const doWork = document.createElement('p')
doWork.textContent = ''
divEl.append(doWork)





