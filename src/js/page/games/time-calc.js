const gameConteiner = document.getElementById("5")

const markup = createElements();

gameConteiner.innerHTML = markup;
const input = document.querySelector(".wrapper-input > input");
const time = document.querySelector("h4");
const inputValue = input.value;

input.addEventListener("input", calculator);
function calculator(event) {

   const hours = Math.floor(event.currentTarget.value / 60);
   const remainingMinutes = event.currentTarget.value % 60;

   const output = `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`;
   time.textContent = output;

}

function createElements() {
   return `<section class="time-calculator">
   <div class="container">
      <div class="wrapper-title">
         <div class="title">
            <h2>Калькулятор часу</h2>
         </div>
      </div>
      <div class="wrapper-content">
         <div class="wrapper-input">
            <input type="text" placeholder="Введіть число">
            <div class="wrapper-svg">
               <img src="/src/images/Group 104.svg" alt="">
            </div>
         </div>
         <div class="wrapper-time">
            <h4>00:00</h4>
         </div>
      </div>
   </div>
</section>`
}



