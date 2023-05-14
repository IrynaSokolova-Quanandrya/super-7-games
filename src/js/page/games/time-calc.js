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

