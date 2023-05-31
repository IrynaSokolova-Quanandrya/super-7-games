// import die from "../../../../audio/die.wav";
let intervalId;
let counter = null;

const gameContainer = document.getElementById('6')
const markup = createMarkup();
gameContainer.innerHTML = markup;

const dinoElem = document.querySelector(".dino");
const cactusElem = document.querySelector(".cactus");
const messageElem = document.querySelector(".message");
let counterElem = document.querySelector(".counter");
let count = 0;

function dinoJump() {
    if (dinoElem.classList != "dino-jump") {
        dinoElem.classList.add("dino-jump");

        setTimeout(function () {
            dinoElem.classList.remove("dino-jump");
        }, 300);


    };
};
let isAlive = setInterval(()=>{
    // dino Y pos
    let dinoTop = parseInt(window.getComputedStyle(dinoElem).getPropertyValue("top"));

    // cactus X pos
    let cactusLeft = parseInt(window.getComputedStyle(cactusElem).getPropertyValue("left"));

    // detect collision between cactus and dino
    if (cactusLeft < 55 && dinoTop >= 165) {
        counter = null;
        console.log(counter);
        // collision
        cactusElem.classList.remove("cactus-anim");
        dinoElem.classList.remove("dino-running");
        messageElem.classList.remove("message-hide");
        dinoElem.classList.add("dino-lose");

        //!Important
        let audioDying = new Audio();
        audioDying.src = '../src/audio/die.wav';
        audioDying.play();
        clearInterval(intervalId);

        setTimeout(function () {
            dinoElem.classList.remove("dino-lose");
        }, 200);
    }
}, 10);


document.addEventListener("keydown", function () {    
    dinoJump();
    if(dinoElem.classList.contains("dino-running")){
        clearInterval(intervalId);
    }    

    if (counter === null) {
        intervalId = setInterval(function counter() {
            count += 1;
            counterElem.innerHTML = count;
        }, 300);
    }
    cactusElem.classList.add("cactus-anim");
    dinoElem.classList.add("dino-running");
    messageElem.classList.add("message-hide");

      
    
})

function createMarkup() {
    return `
    <div class="dino-container">
    <div user-select="text" class="name">Google динозавр</div>
    <div class="dino-game">
        <div class="message">Press any button to start</div>
        <div class="counter">0</div>
        <div class="dino"></div>
        <div class="cactus"></div>
        <div class="ground"></div>
    </div>
</div>
`
}