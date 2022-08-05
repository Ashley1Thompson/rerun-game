 
// SOUNDPLAY
const airS = new Audio("sounds/air.mp3");
const airLockS = new Audio("sounds/airLock.mp3");
const bigDoorS = new Audio("sounds/bigDoor.mp3");
const droningThrumS = new Audio("sounds/droningThrum.mp3");
const elecGlitchS = new Audio("sounds/elecGlitch.mp3");
const elecThrumS = new Audio("sound/elecThrum.mp3");
const failGlitchS = new Audio("sounds/failGlitch.mp3");
const fanS = new Audio("sounds/fan.mp3");
const kitchenS = new Audio("sounds/kitchen.mp3");
const laboratoryS = new Audio("sounds/laboratory.mp3");
const quickBeepS = new Audio("sounds/quickBeep.mp3");
const runningWaterS = new Audio("sounds/runningWater.mp3");
const smallDoorS = new Audio("sounds/smallDoor.mp3");
 
let timer;
const startTime = 5; // in minutes
let time = startTime * 60; // in seconds
let formattedTime = time / 60;
 

// const sound = require("sound-play");
const beginEl = document.querySelector(".begin");
const atrium1El = document.querySelector(".atrium1");
const engineering1El = document.querySelector(".engineering1");
const kitchen1El = document.querySelector(".kitchen1");
const command1El = document.querySelector(".command1");
const commandShownEl = document.querySelector(".commandShown");
const commandHiddenOneEl = document.querySelector(".commandHiddenOne");
const commandHiddenTwoEl = document.querySelector(".commandHiddenTwo");
const acknowledgmentEl = document.querySelector(".acknowledgment");
const botany2El = document.querySelector(".botany2");
const command2El = document.querySelector(".command2");
const kitchen2El = document.querySelector(".kitchen2");
const engineering2El = document.querySelector(".engineering2");
const atrium2El = document.querySelector(".atrium2");
const atrium3El = document.querySelector(".atrium3");
const kitchen3El = document.querySelector(".kitchen3");
const command3El = document.querySelector(".command3");
const botany3El = document.querySelector(".botany3");
const botanyHiddenOneEl = document.querySelector(".botanyHiddenOne");
const botanyHiddenTwoEl = document.querySelector(".botanyHiddenTwo");
const command4El = document.querySelector(".command4");
const kitchen4El = document.querySelector(".kitchen4");
const atrium4El = document.querySelector(".atrium4");
const engineering4El = document.querySelector(".engineering4");
const science4El = document.querySelector(".science4");
const engineering5El = document.querySelector(".engineering5");
const atrium5El = document.querySelector(".atrium5");
const kitchen5El = document.querySelector(".kitchen5");
const kitchenHiddenOneEl = document.querySelector(".kitchenHiddenOne");
const kitchenHiddenTwoEl = document.querySelector(".kitchenHiddenTwo");
const kitchenHiddenThreeEl = document.querySelector(".kitchenHiddenThree");
const atrium6El = document.querySelector(".atrium6");
const engineering6El = document.querySelector(".engineering6");
const engineeringDoorsEl = document.querySelector(".engineeringDoors");
const engineeringWallEl = document.querySelector(".engineeringWall");
const finaleEl = document.querySelector(".finale");

// Click event listeners for each of the buttons
beginLone.addEventListener("click", beginGame);
beginRone.addEventListener("click", beginGame);
atriumLone.addEventListener("click", engineering1);
atriumRone.addEventListener("click", kitchen1);
engineeringLone.addEventListener("click", atrium1);
kitchenLone.addEventListener("click", atrium1);
kitchenRone.addEventListener("click", command1);
acknowledgeLone.addEventListener("click", acknowledge);
commandLone.addEventListener("click", botany2);
commandRone.addEventListener("click", kitchen2);
botanyLtwo.addEventListener("click", command2);
commandLtwo.addEventListener("click", botany2);
commandRtwo.addEventListener("click", kitchen2);
kitchenLtwo.addEventListener("click", atrium2);
kitchenRtwo.addEventListener("click", command2);
atriumLtwo.addEventListener("click", kitchen2);
atriumRtwo.addEventListener("click", engineering2);
engineeringLtwo.addEventListener("click", atrium3);
atriumLthree.addEventListener("click", atriumFail);
atriumRthree.addEventListener("click", kitchen3);
kitchenLthree.addEventListener("click", kitchenFail);
kitchenRthree.addEventListener("click", command3);
commandLthree.addEventListener("click", commandFail);
commandRthree.addEventListener("click", botany3);
botanyLthree.addEventListener("click", botanySuccess);
botanyRthree.addEventListener("click", command4);
commandLfour.addEventListener("click", kitchen4);
kitchenLfour.addEventListener("click", atrium4);
atriumLfour.addEventListener("click", engineering4);
engineeringLfour.addEventListener("click", science4);
scienceLfour.addEventListener("click", engineering5);
engineeringLfive.addEventListener("click", engineeringFailTwo);
engineeringRfive.addEventListener("click", atrium5);
atriumLfive.addEventListener("click", atriumFailTwo);
atriumRfive.addEventListener("click", kitchen5);
kitchenLfive.addEventListener("click", kitchenSuccess);
kitchenSnack.addEventListener("click", kitchenSnackSuccess);
kitchenRfive.addEventListener("click", atrium6);
atriumLsix.addEventListener("click", engineering6);
engineeringLsix.addEventListener("click", science6Fail);
engineeringRsix.addEventListener("click", science6Success);

// SOUND FUNCTIONS
function airOn() {
  airS.play();
}

function airOff() {
  airS.pause();
}

function airLock() {
  airLockS.play();
}

function bigDoorOn() {
  bigDoorS.play();
}

function bigDoorOff() {
  bigDoorS.pause();
}

function droningThrumOn() {
  droningThrumS.play();
}

function droningThrumOff() {
  droningThrumS.pause();
}

function elecGlitch() {
  elecGlitchS.play();
}

function elecThrumOn() {
  elecThrumS.play();
}

function elecThrumOff() {
  elecThrumS.pause();
}

function failGlitch() {
  failGlitchS.play();
}

function fanOn() {
  fanS.play();
}

function fanOff() {
  fanS.pause();
}

function kitchenOn() {
  kitchenS.play();
}

function kitchenOff() {
  kitchenS.pause();
}

function laboratoryOn() {
  laboratoryS.play();
}

function laboratoryOff() {
  laboratoryS.pause();
}

function quickBeep() {
  quickBeepS.play();
}

function runningWaterOn() {
  runningWaterS.play();
}

function runningWaterOff() {
  runningWaterS.pause();
}

function smallDoor() {
  smallDoorS.play();
}

// start button on-click:
function start() {
  timer = setInterval(updateTimer, 1000);
  updateTimer();
}

// stop the clock
function stop() {
  clearInterval(timer);
  // return time left using time, helper fn to convert seconds into minutes and seconds.
  return formatTime();
}

// The game ends when timer runs out, refresh browser
function timesUp() {
  window.location.reload();
}

// handles countdown, calls timesUp to end game when no time left.
function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  time--;
  if (time >= -1)
    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
  else {
    timesUp();

  }
}

function subtractTime() {
  time -= 30 //seconds;
}

function addTime() {
  time += 15 //seconds;
}

function formatTime() {
  
}

// Functions to move between "rooms"
function beginGame() {
  beginEl.classList.add("hide");
  atrium1El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  // START TIMER HERE
  start()
  smallDoor();
  droningThrumOn();
}

function engineering1() {
  atrium1El.classList.add("hide");
  engineering1El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/corridor-2.png";
  droningThrumOff();
  failGlitch();
  fanOn();
}

function atrium1() {
  engineering1El.classList.add("hide");
  kitchen1El.classList.add("hide");
  atrium1El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  fanOff();
  droningThrumOn();
  kitchenOff();
}
function kitchen1() {
  atrium1El.classList.add("hide");
  command1El.classList.add("hide");
  command2El.classList.add("hide");
  kitchen1El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/kitchen-new.png";
  droningThrumOff();
  kitchenOn();
}

function acknowledge() {
  commandShownEl.classList.add("hide");
  commandHiddenOneEl.classList.remove("hide");
  commandHiddenTwoEl.classList.remove("hide");
  document.getElementById("acknowledgementEl").innerText =
    '"Thank you for acknowledging the contamination alert. Don\'t forget to like and subscribe for more contamination alert content."';
  quickBeep();
}

function command1() {
  kitchen1El.classList.add("hide");
  command1El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/command-room.png";
  kitchenOff();
  airOn();
}

function botany2() {
  command1El.classList.add("hide");
  command2El.classList.add("hide");
  botany2El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/botany-room.png";
  airOff();
  runningWaterOn();
}

function command2() {
  botany2El.classList.add("hide");
  kitchen2El.classList.add("hide");
  command2El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/command-room.png";
  runningWaterOff();
  kitchenOff();
  airOn();
}

function kitchen2() {
  command1El.classList.add("hide");
  command2El.classList.add("hide");
  atrium2El.classList.add("hide");
  kitchen2El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/kitchen-new.png";
  airOff();
  droningThrumOff();
  kitchenOn();
}

function atrium2() {
  kitchen2El.classList.add("hide");
  atrium2El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  kitchenOff();
  droningThrumOn();
}

function engineering2() {
  atrium2El.classList.add("hide");
  engineering2El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/airlock-door.png";
  droningThrumOff();
  quickBeep();
  fanOn();
}

function atrium3() {
  engineering2El.classList.add("hide");
  atrium3El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  fanOff();
  droningThrumOn();
}

function atriumFail() {
  document.getElementById("atriumSearch").innerText =
    "No badge here ... but at least you know where it isn't! Unfortunately, you have lost some precious seconds.";
  failGlitch();
  // DECREMENT TIMER BY 30 SECONDS
  subtractTime()
}

function kitchen3() {
  atrium3El.classList.add("hide");
  kitchen3El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/kitchen-new.png";
  droningThrumOff();
  kitchenOn();
}

function kitchenFail() {
  document.getElementById("kitchenSearch").innerText =
    "No badge here ... but you notice that you ate your leftover sushi from Wednesday while sleep-walking. Bummer, you were hoping to have that for dinner. You have lost some precious seconds.";
  failGlitch();
  // DECREMENT TIMER BY 30 SECONDS
  subtractTime();
}

function command3() {
  kitchen3El.classList.add("hide");
  command3El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/command-room.png";
  kitchenOff();
  airOn();
}

function commandFail() {
  document.getElementById("commandSearch").innerText =
    "You had hoped that the glow from the terminals might help you catch a glint off the reflective sheen on your ID badge, but no such luck, looks like it isn't here. You have lost some precious seconds.";
  failGlitch();
  // DECREMENT TIMER BY 30 SECONDS
  subtractTime();
}

function botany3() {
  command3El.classList.add("hide");
  botany3El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/botany-room.png";
  airOff();
  runningWaterOn();
}

function botanySuccess() {
  document.getElementById("botanySearch").innerText =
    "As soon as you look down and see your ID badge on the floor, you get a memory of the last thing that happened before you woke up in your living quarters: you had taken a nice deep breath near the flowers … that must have been when the odorless fumes from the compromised test vial proved to be too strong. ID badge recovered!";
  botanyHiddenOneEl.classList.add("hide");
  botanyHiddenTwoEl.classList.remove("hide");
  quickBeep();
}

function command4() {
  botany3El.classList.add("hide");
  command4El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/command-room.png";
  runningWaterOff();
  airOn();
}

function kitchen4() {
  command4El.classList.add("hide");
  kitchen4El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/kitchen-new.png";
  airOff();
  kitchenOn();
}

function atrium4() {
  kitchen4El.classList.add("hide");
  atrium4El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  kitchenOff();
  droningThrumOn();
}

function engineering4() {
  atrium4El.classList.add("hide");
  engineering4El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/engineering-new.png";
  droningThrumOff();
  fanOn();
}

function science4() {
  engineering4El.classList.add("hide");
  science4El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/science-bay-light.png";
  fanOff();
  laboratoryOn();
}

function engineeringFailTwo() {
  document.getElementById("engineeringSearchTwo").innerText =
    "The only thing sticky in here is the knowledge that Dr. Jung has bestowed upon you ... the clock ticks down ...";
  failGlitch();
  // DECREMENT TIMER BY 30 SECONDS
  subtractTime();
}

function engineering5() {
  science4El.classList.add("hide");
  engineering5El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/engineering-new.png";
  laboratoryOff();
  fanOn();
}

function atrium5() {
  engineering5El.classList.add("hide");
  atrium5El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  fanOff();
  droningThrumOn();
}

function atriumFailTwo() {
  document.getElementById("atriumSearchTwo").innerText =
    "I mean, you can't really be that surprised, right? No dice. The clock ticks down ...";
  failGlitch();
  // DECREMENT TIMER BY 30 SECONDS
  subtractTime();
}

function kitchen5() {
  atrium5El.classList.add("hide");
  kitchen5El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/kitchen-new.png";
  droningThrumOff();
  kitchenOn();
}

function kitchenSuccess() {
  document.getElementById("kitchenSearchTwo").innerText =
    "Ahh, it would appear that you only half succeeded in making a freeze-dried peanut butter and freeze-dried jelly freeze-dried sandwich the night before. However, that freeze-dried jelly, having been left out overnight, has basically turned into glue! Rather than worry about the long-term effects of eating this kind of food, you scoop some up onto a popsicle stick ...";
  kitchenHiddenOneEl.classList.add("hide");
  kitchenHiddenTwoEl.classList.remove("hide");
  kitchenHiddenThreeEl.classList.remove("hide");
  quickBeep();
}

function kitchenSnackSuccess() {
  document.getElementById("kitchenSearchTwo").innerText =
    "You hurriedly chug some banana milk ... and suddenly you feel just a bit better! That little pick me up has helped you move faster!";
  kitchenHiddenThreeEl.classList.add("hide");
  quickBeep();
  // ADD 15 SECONDS TO CLOCK
  addTime()
}

function atrium6() {
  kitchen5El.classList.add("hide");
  atrium6El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/atrium-1.png";
  kitchenOff();
  droningThrumOn();
}

function engineering6() {
  atrium6El.classList.add("hide");
  engineering6El.classList.remove("hide");
  document.getElementById("spaceShipImg").src = "images/engineering-new.png";
  droningThrumOff();
  fanOn();
}

function science6Fail() {
  document.getElementById("engineeringDoors").innerText =
    "Where you could have sworn you just saw a door, there is now only wall—and you walk right into it. You wasted a few precious seconds, but the impact helped keep you awake, so I guess it all worked out ...";
  engineeringWallEl.classList.add("hide");
  failGlitch();
}

function science6Success() {
  engineering6El.classList.add("hide");
  finaleEl.classList.remove("hide");
  quickBeep();
  fanOff();
  // STOP TIMER
  stop()
}
