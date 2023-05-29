const box = document.getElementById("8");
box.classList.add('container');
// console.log(box);
// section.appendChild(box);



let maxValue = 0;

const inputList = document.createElement("ul");
box.appendChild(inputList);

const answer = document.createElement("p");
box.appendChild(answer);
answer.textContent = "Найбільше число, яке ви ввели - ";

let inputElements = [];
let inputValues = [];


for (let i = 0; i < 3; i += 1){
    inputElements[i] = document.createElement("li");
    inputList.appendChild(inputElements[i]);

    inputValues[i] = document.createElement("input");

    inputValues[i].type = 'number';
    inputValues[i].placeholder = "Введіть число";
    inputElements[i].appendChild(inputValues[i]);

    inputValues[i].addEventListener("change", (event) => {
        maxValue = Math.max(maxValue, event.target.value);
        // alert(maxValue);
        answer.textContent = "Найбільше число, яке ви ввели - " + String(maxValue);
    });

    // // console.log(toString(i) + inputValues[i]);
}




// const inputElement = document.createElement("li");
// inputList.appendChild(inputElement);

// const input = document.createElement("input");

// input.type = 'number';
// input.placeholder = "Введіть число";
// inputElement.appendChild(input);




// answer

// inputValues[1].value = 1;
// answer.textContent = "Найбільше число, яке ви ввели - " + String(maxValue);

