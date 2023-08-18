const inputcontainer = $("#input-container");
const countdownform = $("#countdownForm");
const dateEL = $("#date-picker");
const countdownEL = $("#countdown");
const countTitle = $("#countdown-title");
const countdownBtn = $("#countdown-button");
const completeEl = $("#complete");
const completeElInfo = $("#complete-info");
const completeBtn = $("#complete-button");
const timeEle = $("span");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const today = new Date().toISOString().split("T")[0];
// console.log(timeEle[0].textContent);
let countdowntitle = "";
let countdowndate = "";
let countdownactive;
let countdownValue = Date;
dateEL.attr("min", today);
function updateDOM() {
  countdownactive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log(distance);
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);
    inputcontainer.attr("hidden", true);
    if (distance < 0) {
      countdownEL.attr("hidden", true);
      clearInterval(countdownactive);
      completeElInfo.textContent = `${countTitle} finished on ${countdowndate}`;
      completeEl.attr("hidden", false);
    } else {
      countTitle.textContent = `${countdowntitle}`;
      timeEle[0].textContent = `${days}`;
      timeEle[1].textContent = `${hours}`;
      timeEle[2].textContent = `${minutes}`;
      timeEle[3].textContent = `${seconds}`;
      completeEl.attr("hidden", true);
      countdownEL.attr("hidden", false);
    }
  }, second);
}
function updateCountdown(e) {
  e.preventDefault();
  countdowntitle = e.currentTarget[0].value;
  countdowndate = e.currentTarget[1].value;
  console.log(countdowndate, countdowntitle);
  if (countdowndate === "") {
    alert("Please select a date");
  } else {
    countdownValue = new Date(countdowndate).getTime();
    updateDOM();
  }
}
function reset() {
  countdownEL.attr("hidden", true);
  completeEl.attr("hidden", true);
  inputcontainer.attr("hidden", false);
  clearInterval(countdownactive);
  countdowntitle = "";
  countdowndate = "";
}
countdownform.on("submit", updateCountdown);
countdownBtn.on("click", reset);
completeBtn.on("click", reset);
