let timer; 
const startTime = 5;
let time = startTime * 60; // in seconds

// start button on-click:
function start() {
  timer = setInterval(updateTimer, 1000);
  updateTimer();
// hide restart button while timer is running
   $('#playGameBtn').hide();
}

// The game ends when timer runs out, show restart button
function timesUp() {
  cancelInterval(timer);

  $('#playGameBtn').show();
}

// handles countdown, calls timesUp to end game when no time left.
function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  time--;
  if(time >= 0)
  document.getElementById('timer').innerHTML = `${minutes}:${seconds}`
  else {
    timesUp();
  }
}