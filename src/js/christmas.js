function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();

  // curr christm
  let christmas = new Date(`December 25, ${currentYear} 00:00:00`);
  
  // year upd
  if (now > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  // Calc time
  const timeRemaining = christmas - now;

  // time calcs
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Days
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Seconds

  // Update HTML
  document.getElementById("daysValue").innerHTML = days;
  document.getElementById("hoursValue").innerHTML = hours;
  document.getElementById("minutesValue").innerHTML = minutes;
  document.getElementById("secondsValue").innerHTML = seconds;
}

// Update on start
updateCountdown();

// Update countdown
setInterval(updateCountdown, 1000);
