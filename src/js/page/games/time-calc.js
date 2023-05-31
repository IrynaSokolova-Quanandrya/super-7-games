const gameContainer = document.getElementById("5");
const markup = createElements();
gameContainer.innerHTML = markup;

const input = document.querySelector(".wrapper-input > input");
const time = document.querySelector("h4");

input.addEventListener("input", calculator);

function calculator(event) {
   const inputValue = parseInt(event.currentTarget.value);

   const days = Math.floor(inputValue / (60 * 24));
   const hours = Math.floor((inputValue % (60 * 24)) / 60);
   const minutes = inputValue % 60;

   const output = `${days}дн ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
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
             <h4>0дн 00:00</h4>
          </div>
       </div>
    </div>
 </section>`;
}