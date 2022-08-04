let timer; 
const startTime = 5; // in minutes
let time = startTime * 60; // in seconds
let formattedTime = time / 60;

// start button on-click:
  function start() {
    timer = setInterval(updateTimer, 1000);
    updateTimer();
  // hide restart button while timer is running
    $('#playGameBtn').hide();
  }
  export {start};
  // stop the clock
  function stop() {
    clearInterval(timer);
  // return time left using time, helper fn to convert seconds into minutes and seconds.
    return formattedTime 
  }
  export {stop};
  
  // The game ends when timer runs out, show restart button
  function timesUp() {
    stop();

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

  // function formatTime() {
    
  // }