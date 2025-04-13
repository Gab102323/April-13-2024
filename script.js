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
      let diff = now - startDate;
  
      const msInSecond = 1000;
      const msInMinute = msInSecond * 60;
      const msInHour = msInMinute * 60;
      const msInDay = msInHour * 24;
      const msInMonth = msInDay * 30.44;
  
      const months = Math.floor(diff / msInMonth);
      diff %= msInMonth;
      const days = Math.floor(diff / msInDay);
      diff %= msInDay;
      const hours = Math.floor(diff / msInHour);
      diff %= msInHour;
      const minutes = Math.floor(diff / msInMinute);
      diff %= msInMinute;
      const seconds = Math.floor(diff / msInSecond);
  
      display.textContent = `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds 💙`;
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
