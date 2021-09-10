const weeks = document.querySelector("#weeks");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const weeksDescription = document.querySelector("#weeksDescription");

var showWeeks = false;

var countdownDate = new Date("1 Jan 2022");

const monthDaysObject = [
  {
    month: "January",
    days: 31,
  },
  {
    month: "February",
    days: 28,
  },
  {
    month: "March",
    days: 31,
  },
  {
    month: "April",
    days: 30,
  },
  {
    month: "May",
    days: 31,
  },
  {
    month: "June",
    days: 30,
  },
  {
    month: "July",
    days: 31,
  },
  {
    month: "August",
    days: 31,
  },
  {
    month: "September",
    days: 30,
  },
  {
    month: "October",
    days: 31,
  },
  {
    month: "November",
    days: 30,
  },
  {
    month: "December",
    days: 31,
  },
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
    monthDaysObject[selectedMonth].month + " ";
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

function init() {
  var yearNow = new Date().getFullYear();
  const yearSelector = document.getElementById("year-select");
  const monthSelector = document.getElementById("month-select");
  for (var i = yearNow; i < yearNow + 10; i++) {
    const toBeAdded = document.createElement("option");
    toBeAdded.innerHTML = i;
    toBeAdded.value = i;
    yearSelector.appendChild(toBeAdded);
  }

  for (var i = 0; i < 12; i++) {
    const toBeAdded = document.createElement("option");
    toBeAdded.innerHTML = monthDaysObject[i].month;
    toBeAdded.value = i;
    monthSelector.appendChild(toBeAdded);
  }
}

function changeMonth() {
  const selectedMonth = document.getElementById("month-select").value;
  const daysInMonth = monthDaysObject[selectedMonth].days;

  //Start by removing all childs
  const daysSelector = document.getElementById("day-select");
  while (daysSelector.firstChild) {
    daysSelector.removeChild(daysSelector.lastChild);
  }

  //Re-Add the descriptive text
  const daysSelectDescription = document.createElement("option");
  daysSelectDescription.innerHTML = "--Please choose an option--";
  daysSelectDescription.value = 0;
  daysSelector.appendChild(daysSelectDescription);

  //Then add all the days in the selected month
  for (var i = 0; i < daysInMonth; i++) {
    const toBeAdded = document.createElement("option");
    toBeAdded.innerHTML = i + 1;
    toBeAdded.value = i + 1;
    daysSelector.appendChild(toBeAdded);
  }
}

document.getElementById("applyDate").addEventListener("click", applyDate);
document.getElementById("changeFormat").addEventListener("click", changeFormat);
document.getElementById("month-select").addEventListener("change", changeMonth);

init();
setInterval(updateCountdown, 1000);
