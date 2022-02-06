window.addEventListener("load", () => {
  const secondHand = document.querySelector(".second-hand");

  const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegree = (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  };

  setInterval(setDate, 1000);
});
