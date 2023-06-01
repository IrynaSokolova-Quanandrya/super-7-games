
const footballContainer = document.getElementById("7")

// console.log(footballContainer)

let animationName = "ball-moving";


const createGame = () => {

    const footballPlayField = document.createElement("div");
    const ball = document.createElement("div");

    footballPlayField.classList.add("football-field");
    ball.classList.add("ball");

    footballPlayField.append(ball);
    footballContainer.append(footballPlayField);

    const moveBallFunction = (event) => {
      if (animationName !== "ball-moving") {
        animationName = "ball-moving";
      } else if (animationName === "ball-moving") {
        animationName = "ball-moving2";
      }
      ball.style.left = `${event.offsetX}px`;
      ball.style.top = `${event.offsetY}px`;
      ball.style.animationName = `${animationName}`;
      
    }
    
    footballPlayField.addEventListener("click", moveBallFunction);
  }

  createGame();