function startLoading() {
  document.getElementById("loadingSection").classList.remove("hidden");

  let fill = document.getElementById("progressFill");
  let width = 0;
  let interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("loadingSection").classList.add("hidden");
      document.getElementById("resultSection").classList.remove("hidden");
      startTimer();
    } else {
      width += 2;
      fill.style.width = width + "%";
    }
  }, 80);
}

function startTimer() {
  const startDate = new Date("April 13, 2024 18:42:00"); // 6:42 PM
  const display = document.getElementById("duration");

  function updateTimer() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Fix for negative seconds
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    // Fix for negative minutes
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    // Fix for negative hours
    if (hours < 0) {
      hours += 24;
      days--;
    }

    // Fix for negative days
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }

    // Fix for negative months
    if (months < 0) {
      months += 12;
      years--;
    }

    // Display duration in the desired format
    const displayText = `${years > 0 ? years + " year" + (years > 1 ? "s, " : ", ") : ""}${months} month${months !== 1 ? "s" : ""}, ${days} day${days !== 1 ? "s" : ""}, ${hours} hour${hours !== 1 ? "s" : ""}, ${minutes} minute${minutes !== 1 ? "s" : ""}, ${seconds} second${seconds !== 1 ? "s" : ""} 💙`;

    display.textContent = displayText;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

window.onload = () => {
  const texts = document.querySelectorAll(".floating-texts span");

  texts.forEach((text) => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;

    text.style.left = `${x}px`;
    text.style.top = `${y}px`;
    text.style.animationDelay = `${delay}s`;
  });
};
