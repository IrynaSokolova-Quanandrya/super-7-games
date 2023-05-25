const scientists = [{
	name: "Albert",
	surname: "Einstein",
	born: 1879,
	dead: 1955,
	id: 1
}, {
	name: "Isaac",
	surname: "Newton",
	born: 1643,
	dead: 1727,
	id: 2
}, {
	name: "Galileo",
	surname: "Galilei",
	born: 1564,
	dead: 1642,
	id: 3
}, {
	name: "Marie",
	surname: "Curie",
	born: 1867,
	dead: 1934,
	id: 4
}, {
	name: "Johannes",
	surname: "Kepler",
	born: 1571,
	dead: 1630,
	id: 5
}, {
	name: "Nicolaus",
	surname: "Copernicus",
	born: 1473,
	dead: 1543,
	id: 6
}, {
	name: "Max",
	surname: "Planck",
	born: 1858,
	dead: 1947,
	id: 7
}, {
	name: "Katherine",
	surname: "Blodgett",
	born: 1898,
	dead: 1979,
	id: 8
}, {
	name: "Ada",
	surname: "Lovelace",
	born: 1815,
	dead: 1852,
	id: 9
}, {
	name: "Sarah E.",
	surname: "Goode",
	born: 1855,
	dead: 1905,
	id: 10
}, {
	name: "Lise",
	surname: "Meitner",
	born: 1878,
	dead: 1968,
	id: 11
}, {
	name: "Hanna",
	surname: "Hammarström",
	born: 1829,
	dead: 1909,
	id: 12
}];

const btnText = [
	'Які вчені народилися в 19 ст.',
	'Відсортувати вчених за алфавітом',
	'Відсортувати вчених за кількістю прожитих років',
	'Знайти вченого, який народився найпізніше',
	'Знайти вчених, в яких співпадають перші літери імені і прізвища',
	'Знайти вчених, в яких співпадають перші літери імені і прізвища',
	'Знайти рік народження Albert Einshtein ',
	'Знайти вчених, прізвища яких починаються не на літеру “С” ',
	'Видалити всіх вчених, ім’я яких починається на “А”'
]

// const scientistEl = document.querySelector('.scientist-list');
const scientistEl = document.getElementById('10');

const scientistsList = document.createElement('ul');
scientistsList.classList.add('scientist-list')
const cardsMarkup = createCard(scientists);
console.log(cardsMarkup);
scientistsList.insertAdjacentHTML('beforeend', cardsMarkup)
scientistEl.append(scientistsList)

function createCard(scientists) {
	return scientists.map(scientist=>
		` <li class="cards">
			<h2>${scientist.name}</h2>
			<h2> ${scientist.surname}</h2>
			<p>${scientist.born}</p>
			<p>${scientist.dead}</p>
    	</li>`
	);
}



// function addCards() {
// 	for (let i = 0; i < scientists.length; i++) {
// 		let className = '';
// 		if (scientists[i]) {
// 			className = 'cards'
// 		}
// 		let card = createCard(scientists[i], className);
// 		scientistEl.innerHTML += card;
// 	}
// }


function addButtons() {
	let buttons = ''
	for (let i = 1; i < btnText.length; i+=1) {
		buttons += `<button class="card button-${i}">
		${btnText[i]}
		</button>
		`		
	}
	return buttons;
}

const buttonsMarkup = addButtons(scientists);
console.log(buttonsMarkup);

scientistEl.insertAdjacentHTML('beforeend', buttonsMarkup)
// function addButtons() {
// 	const buttonsEl = document.querySelector('.button-1');
// 	for (let i = 0; i < buttonsEl.lenght; i++) {
// 		let classButtons = '';
// 		if (buttonsEl[i]) {
// 			classButtons = 'buttons';
// 		}
// 		let cards = createCard(buttonsEl[i], classButtons);
// 		buttonsEl.innerHTML += cards;

// 	}
// }



const btn1 = document.querySelector('.button-1');
// btn1.textContent = 'Які вчені народилися в 19 ст.';
console.log(btn1);
btn1.addEventListener('click', function(){
	const nineteenthCenturyScientists = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900).sort((a, b) => a.born - b.born);
console.log(nineteenthCenturyScientists);
scientistEl.innerHTML = nineteenthCenturyScientists;
})

const btn2 = document.querySelector('.button-2');
// btn2.textContent = 'Відсортувати вчених за алфавітом';

btn2.addEventListener('click', function(){
	const inAscendingScientist = scientists.sort(
		(firstScients, secondScients) => firstScients.name.localeCompare(secondScients.name)
	  );
	  console.log(inAscendingScientist);
});

const btn3 = document.querySelector('.button-3');
// btn3.textContent = 'Відсортувати вчених за кількістю прожитих років';
btn3.addEventListener('click', function(){
	const sortedScientistsByYearsLived = scientists.sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
	console.log(sortedScientistsByYearsLived);
});

const btn4 = document.querySelector('.button-4');
// btn4.textContent = 'Знайти вченого, який народився найпізніше';
btn4.addEventListener('click', function(){
	const latestBornScientist = scientists.reduce((maxBorn, scientist) => {
		return scientist.born > maxBorn.born ? scientist : maxBorn;
	  });
	  
	  console.log(latestBornScientist);
});

 

const btn5 = document.querySelector('.button-5');
// btn5.textContent = 'Знайти вчених, в яких співпадають перші літери імені і прізвища';
btn5.addEventListener('click', function(){
	const scientistsWithMatchingInitials = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);

console.log(scientistsWithMatchingInitials);

});

const btn6 = document.querySelector('.button-6');
// btn6.textContent = 'Знайти рік народження Albert Einshtein ';

btn6.addEventListener('click', function(){
	const einshain = scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein')
	console.log(einshain.born);
});

const btn7 = document.querySelector('.button-7');
// btn7.textContent = 'Знайти вчених, прізвища яких починаються не на літеру “С” ';

btn7.addEventListener('click', function(){
	const scientistWithC = scientists.sort(scientist => scientist.surname.charAt(1) === "C")
	console.log(scientistWithC);
});

const btn8 = document.querySelector(".button-8");
// btn8.textContent = 'Видалити всіх вчених, ім’я яких починається на “А”';
btn8.addEventListener('click', function() {
 
	const scientistsWithoutAName = scientists.filter(scientist => !scientist.name.startsWith('A'));

	scientistsWithoutAName.forEach(scientist => {
		console.log(scientist.name + ' ' + scientist.surname);
	});
	
	
	
});

const btn9 = document.querySelector(".button-9");
// btn9.textContent = ' Знайти вченого, який прожив найдовше і вченого, який прожив найменше'; 

 btn9.addEventListener('click', function(){
	const scientistsWithMatchingInitials = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);

console.log(scientistsWithMatchingInitials);

 });


 
 
  
 
  
	 

 
 
     


    