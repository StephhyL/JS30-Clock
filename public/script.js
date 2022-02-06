window.addEventListener("load", () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  };

  setInterval(setDate, 1000);
});
