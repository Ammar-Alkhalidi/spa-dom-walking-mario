// Task2
// Select the element with id `mario`
const mario = document.getElementById("mario");

// Select the `<img />` element within `mario`
const imgMario = mario.querySelector("img");

// Set the `src` of `imgMario` to the standing Mario image
imgMario.src = "assets/mario-stand.gif";

// Task3
function stopMario() {
    imgMario.src = "assets/mario-stand.gif";
  }
  
  // Task4
  function moveMario() {
    // Check if Mario is already walking
    if (!imgMario.src.includes("mario-walk.gif")) {
      imgMario.src = "assets/mario-walk.gif";
    }
  }
  
    // Task5
    // Listen for `keydown` events to make Mario start walking
document.addEventListener("keydown", (event) => {
    moveMario(event);
  });

    // Task6
    // Initialize Mario's position
let position = 0;

function moveMario(event) {
  // Start walking animation if not already walking
  if (!imgMario.src.includes("mario-walk.gif")) {
    imgMario.src = "assets/mario-walk.gif";
  }

// Task7

  // Move Mario based on the key pressed
  if (event.key === "ArrowLeft") {
    position -= 10; // Move left
    mario.style.left = `${position}px`;
    mario.style.transform = "rotateY(-180deg)"; // Face left
  } else if (event.key === "ArrowRight") {
    position += 10; // Move right
    mario.style.left = `${position}px`;
    mario.style.transform = "rotateY(0deg)"; // Face right
  }
}

// Task8
// Listen for `keyup` events to stop Mario
document.addEventListener("keyup", stopMario);
