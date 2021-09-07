const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
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
  const timeNow = new Date();
  const totalSeconds = (countdownDate - timeNow) / 1000;
  const daysLeft = Math.floor(totalSeconds / 60 / 60 / 24);
  const hoursLeft = Math.floor(totalSeconds / 60 / 60) % 24;
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const secondsLeft = Math.floor(totalSeconds) % 60;
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

document.getElementById("applyDate").addEventListener("click", applyDate);

setInterval(updateCountdown, 1000);
