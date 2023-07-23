// get the from dom
let divResult = document.querySelector(".result");
let divBigResult = document.querySelector(".big-result");
let divLife = document.querySelector(".life");

// buttons
let btnGuess = document.createElement("a");
btnGuess.href = "#";
btnGuess.className = "btn btn-guess";
btnGuess.innerText = "Guess";

let btnRestart = document.createElement("a");
btnRestart.href = "#";
btnRestart.className = "btn btn-restart";
btnRestart.innerText = "Restart";

// other variables
let x = getRandomNumber(1, 10);
let lives = 3;
let numRegex = /^[\d]+$/;

// event-listeners
btnGuess.addEventListener("click", (e) => {
  let userGuess = prompt("Write a number between 1 and 10");
  if (numRegex.exec(userGuess)) {
    checkResult(parseInt(userGuess));
  } else {
    while (!numRegex.exec(userGuess)) {
      userGuess = prompt("A number between 1 and 10 please!");
    }
    checkResult(parseInt(userGuess));
  }
});

btnRestart.addEventListener("click", (e) => {
  resetEverything();
});

// functions

// get a random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// reset all ui elements and lives
function resetEverything() {
  lives = 3;
  x = getRandomNumber(1, 10);
  console.log(x);
  divResult.innerText = "";
  divResult.className = "result";
  divBigResult.innerText = "";
  if (document.querySelector('.btn-restart')) btnRestart.remove();
  if (!document.querySelector('.btn-guess')) {
    let btnSection = document.querySelector("#btn-section");
    btnSection.insertBefore(btnGuess, divLife);
  }
  setLivesIcon();
}

// sets the life icon based on chances left using font-awesome
function setLivesIcon() {
  divLife.innerHTML = "";
  for (let i = 1; i <= lives; i++) {
    let heart = document.createElement("i");
    heart.className = "fa fa-heart";
    divLife.appendChild(heart);
    divLife.appendChild(document.createTextNode(" "));
  }
  for (let i = 3 - lives; i >= 1; i--) {
    let emptyHeart = document.createElement("i");
    emptyHeart.className = "fa fa-heart-o";
    divLife.appendChild(emptyHeart);
    divLife.appendChild(document.createTextNode(" "));
  }
}

// compare the guessed value with correct ans
function checkResult(guess) {
  if (lives > 0) {
    // number is same as guess
    if (guess == x) {
      divResult.innerText = `Correct Answer! The Number is ${x}`;
      divResult.className = "result success";
      divBigResult.innerText = `The Number = ${guess}`;
      btnGuess.remove();
      let btnSection = document.querySelector("#btn-section");
      btnSection.insertBefore(btnRestart, divLife);
    }
    // number is less than guess
    else if (guess > x) {
      divResult.innerText = `The Correct number is less than your guessed number`;
      divResult.className = "result closer";
      divBigResult.innerText = `The Number < ${guess}`;
      lives = lives - 1;
    }
    // number is greater than guess
    else {
      divResult.innerText = `The Correct number is greater than your guessed number`;
      divResult.className = "result closer";
      divBigResult.innerText = `The Number > ${guess}`;
      lives = lives - 1;
    }
  }

  setLivesIcon();
  // if no chances left
  if (lives == 0) {
    divResult.innerText = `Wrong guess! You lost! Haha Loser`;
    divResult.className = 'result failure';
    divBigResult.innerText = `Correct Answer: ${x}`;
    btnGuess.remove();
    let btnSection = document.querySelector("#btn-section");
    btnSection.insertBefore(btnRestart, divLife);
  }
}

// following will be called at the beginning
resetEverything();
