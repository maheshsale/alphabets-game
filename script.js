let parentDiv = document.getElementById("buttonGrid");

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let letterArray = letters.split(""); // Empty string as the delimiter

letterArray.forEach((letter) => {
  let button = document.createElement("button");
  button.textContent = letter;

  parentDiv.appendChild(button); // Add buttons to the div

  button.addEventListener("click", (event) => {
    let pressedLetter = event.target.innerText;
    let audio = new Audio("./sounds/" + pressedLetter + ".wav");
    audio.play();
  });
});

// ---------------------------------------------------------
document.addEventListener("keypress", (event) => {
  let pressedLetter = event.key.toUpperCase();
  let audio = new Audio("./sounds/" + pressedLetter + ".wav");
  audio.play();
});
