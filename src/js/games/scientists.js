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

 const questions = [
	{
		class: 'button-3',
		text: 'Відсортувати вчених за кількістю прожитих років',
	},
	{
		class: 'button-4',
		text: 'Знайти вченого, який народився найпізніше',
	},
	{
		class: 'button-5',
		text: 'Знайти вчених, в яких співпадають перші літери імені і прізвища',
	},
	{
		class: 'button-6',
		text: 'Знайти рік народження Albert Einshtein ',
	},
	{
		class: 'button-7',
		text: 'Знайти вчених, прізвища яких починаються не на літеру "С"',
	},
	{
		class: 'button-8',
		text: 'Видалити всіх вчених, ім’я яких починається на “А”',
	},{
		class: 'button-9',
		text: 		' Знайти вченого, який прожив найдовше і вченого, який прожив найменше',
	},
	{
		class: 'button-10',
		text: 'Які вчені народилися в 19 ст.',
	},
	{
		class: 'button-11',
		text: 'Відсортувати вчених за алфавітом',
	},
 ]

 
const scientistEl = document.getElementById('10');

const scientistList = document.createElement('ul');
scientistList.classList.add('scientist-list')
scientistEl.append(scientistList);

function createCard(scientist) {
	return ` 
		<li class="cards">
			<h2>${scientist.name} ${scientist.surname}</h2>
			<p>${scientist.born} <br> ${scientist.dead}</p>
		</li>
   `;	  
  }


  function addCards() {
 	for (let i = 0; i < scientists.length; i++) {
 		let card = createCard(scientists[i]);
 		scientistList.innerHTML += card;
  	}
  }

 addCards();
 addButtons(questions);


 function createBtn(data) {
	return `
	<button 
		type="button" 
		class="buttons ${data.class}">
		${data.text}
	</button>
	`
 }

 
 function addButtons(buttonsEl) {	
 	for (let i = 0; i < buttonsEl.length; i++) {
 		let btns = createBtn(buttonsEl[i]);
		 scientistEl.insertAdjacentHTML('beforeend', btns);
}
};

 const btn10 = document.querySelector('.button-10');
btn10.addEventListener('click', function(){
	const nineteenthCenturyScientists = scientists.filter(scientist => scientist.born >= 1800 && scientist.born <= 1900).sort((a, b) => a.born - b.born);
	const filteredSc =  nineteenthCenturyScientists.map(createCard).join('');
	scientistList.innerHTML = filteredSc; 
 
});

const btn11 = document.querySelector('.button-11');
btn11.addEventListener('click', function(){
	const inAscendingScientist = scientists.sort((firstScients, secondScients) => firstScients.name.localeCompare(secondScients.name));
	const alphabetFiltered = inAscendingScientist.map(createCard).join('');
	scientistList.innerHTML = alphabetFiltered;
});
	  
   
 
 

const btn3 = document.querySelector('.button-3');
btn3.addEventListener('click', function(){
   const sortedScientistsByYearsLived = scientists.sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
   const yearsFiltered =  sortedScientistsByYearsLived.map(createCard).join('');
   scientistList.innerHTML = yearsFiltered;
});

const btn4 = document.querySelector('.button-4');
btn4.addEventListener('click', function(){
   const latestBornScientist = scientists.reduce((maxBorn, scientist) => {
	   return scientist.born > maxBorn.born ? scientist : maxBorn;
	 });
	 const latestBornFiltered = createCard(latestBornScientist);
	 scientistList.innerHTML = '';
	 scientistList.insertAdjacentHTML('beforeend', latestBornFiltered);
});


 const btn5 = document.querySelector('.button-5');
btn5.addEventListener('click', function(){
   const scientistsWithMatchingInitials = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
const initilsFiltered =  scientistsWithMatchingInitials.map(createCard).join('');
   scientistList.innerHTML = initilsFiltered;
});

const btn6 = document.querySelector('.button-6');
 btn6.addEventListener('click', function(){
   const einshain = scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein')
   const einshtainFilter = createCard(einshain);
   scientistList.innerHTML = '';
   scientistList.insertAdjacentHTML('beforeend', einshtainFilter);
});



 

const btn7 = document.querySelector('.button-7');
btn7.addEventListener('click', function(){
 const scientistWithC = scientists.filter(scientist => scientist.surname.charAt(0) !== "C");
 const scientCFilter = scientistWithC.map(createCard).join('');
 scientistList.innerHTML = scientCFilter;
});


const btn8 = document.querySelector(".button-8");
btn8.addEventListener('click', function() {
const scientistsWithoutAName = scientists.filter(scientist => !scientist.name.startsWith('A'));
const scientAFilter = scientistsWithoutAName.map(createCard).join('');
scientistList.innerHTML = scientAFilter;
   });
   
   


const btn9 = document.querySelector(".button-9");
btn9.addEventListener('click', function(){
   const sortedScientists = scientists.sort((a, b) => {
	   const lifeSpanA = a.dead - a.born;
	   const lifeSpanB = b.dead - b.born;
	   return lifeSpanA - lifeSpanB;
   });
   
   const shortestLivedScientist = sortedScientists[0];
   const longestLivedScientist = sortedScientists[sortedScientists.length - 1];
   const shortedFilter = createCard(shortestLivedScientist);
   const longFilter = createCard(longestLivedScientist);
   scientistList.innerHTML = '';
   scientistList.insertAdjacentHTML('beforeend', shortedFilter);
   scientistList.insertAdjacentHTML('beforeend', longFilter);
});