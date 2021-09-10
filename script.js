const weeks = document.querySelector("#weeks");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const weeksDescription = document.querySelector("#weeksDescription");

var showWeeks = false;
var countdownDate = new Date("1 Jan 2022");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function updateCountdown() {
  var timeNow = new Date();
  var daysLeft = 0;
  var weeksLeft = 0;
  var totalSeconds = (countdownDate - timeNow) / 1000;
  if (showWeeks) {
    daysLeft = Math.floor(totalSeconds / 60 / 60 / 24) % 7;
    weeksLeft = Math.floor(totalSeconds / 60 / 60 / 24 / 7);
    weeks.innerHTML = weeksLeft;
  } else {
    daysLeft = Math.floor(totalSeconds / 60 / 60 / 24);
  }

  var hoursLeft = Math.floor(totalSeconds / 60 / 60) % 24;
  var minutesLeft = Math.floor(totalSeconds / 60) % 60;
  var secondsLeft = Math.floor(totalSeconds) % 60;

  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minutesLeft;
  seconds.innerHTML = secondsLeft;
}

function applyDate() {
  const selectedYear = document.getElementById("year-select").value;
  const selectedMonth = document.getElementById("month-select").value;
  const selectedDay = document.getElementById("day-select").value;
  countdownDate.setFullYear(selectedYear);
  countdownDate.setMonth(selectedMonth);
  countdownDate.setDate(selectedDay);
  document.getElementById("dayText").innerHTML = selectedDay + " ";

  document.getElementById("monthText").innerHTML =
    monthNames[selectedMonth] + " ";
  document.getElementById("yearText").innerHTML = selectedYear;
}

function changeFormat() {
  showWeeks = !showWeeks;
  if (!showWeeks) {
    weeksDescription.innerHTML = "";
    weeks.innerHTML = "";
  } else {
    weeksDescription.innerHTML = "Weeks";
  }
  updateCountdown();
}

document.getElementById("applyDate").addEventListener("click", applyDate);
document.getElementById("changeFormat").addEventListener("click", changeFormat);

setInterval(updateCountdown, 1000);
