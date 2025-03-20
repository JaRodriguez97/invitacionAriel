window.addEventListener("load", () => {
  let count = 150,
    animateBackground = () => {
      if (count <= 100) return;

      count -= 1;
      document.querySelector("body").style.backgroundSize = `100vw ${count}svh`;
      requestAnimationFrame(animateBackground);
    };

  // setTimeout(() => requestAnimationFrame(animateBackground), 1000);
});
