// import die from "../../../../audio/die.wav";
let interval1;

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
// let isAlive = setInterval(function () {
//     // dino Y pos
//     let dinoTop = parseInt(window.getComputedStyle(dinoElem).getPropertyValue("top"));

//     // cactus X pos
//     let cactusLeft = parseInt(window.getComputedStyle(cactusElem).getPropertyValue("left"));

//     // detect collision between cactus and dino
//     if (cactusLeft < 55 && dinoTop >= 165) {
//         // collision
//         cactusElem.classList.remove("cactus-anim");
//         dinoElem.classList.remove("dino-running");
//         messageElem.classList.remove("message-hide");
//         dinoElem.classList.add("dino-lose");

//         // //!Important
//         // let audioDying = new Audio();
//         // audioDying.src = '../src/audio/die.wav';
//         // audioDying.play();
//         // clearInterval(interval1);

//         // setTimeout(function () {
//         //     dinoElem.classList.remove("dino-lose");
//         // }, 200);
//     }
// }, 10);


document.addEventListener("keydown", function (event) {
    dinoJump();
    cactusElem.classList.add("cactus-anim");
    dinoElem.classList.add("dino-running");
    messageElem.classList.add("message-hide");

    let counter = null;
    // if (counter === null) {
    //     interval1 = setInterval(function counter() {
    //         count += 1;
    //         counterElem.innerHTML = count;
    //     }, 300);
    // }
})