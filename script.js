const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
function updateCountdown() {
  const newYears = new Date("1 Jan 2022");
  const timeNow = new Date();
  const totalSeconds = (newYears - timeNow) / 1000;
  const daysLeft = Math.floor(totalSeconds / 60 / 60 / 24);
  const hoursLeft = Math.floor(totalSeconds / 60 / 60) % 24;
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const secondsLeft = Math.floor(totalSeconds) % 60;
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minutesLeft;
  seconds.innerHTML = secondsLeft;
}
setInterval(updateCountdown, 1000);
