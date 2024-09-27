var clutter = "";
var timer = 60;
var score = 0;
var rn;

function makeBubble() {
  clutter = "";
  for (var i = 1; i <= 140; i++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function makeTimer() {
  var showTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-val").textContent = timer;
    } else {
      clearInterval(showTimer);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function newHit() {
  rn = Math.floor(Math.random() * 10); // Corrected variable declaration (removed "var")
  document.querySelector("#new-hit").textContent = rn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score-hit").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dts) {
  var clickedNum = Number(dts.target.textContent);
  if (clickedNum === rn) {
    increaseScore();
    makeBubble();
    newHit();
  }
});

makeBubble();
makeTimer();
newHit();
