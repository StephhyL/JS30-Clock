window.addEventListener("load", () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const setDate = () => {
    const now = new Date();
    console.log("this is now--->", now);
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);
    const secondsDegree = (seconds / 60) * 360 + 90;
    // console.log("second--->", secondsDegree);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // minutes
    // console.log("minnutteee-->", minutes); // 48
    const minutesDegree = (minutes / 60) * 360 + 90;
    // console.log("this is minuteDegree", minutesDegree);
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    // hours
    const hoursDegree = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  };

  setInterval(setDate, 1000);
});
