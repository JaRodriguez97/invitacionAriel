window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: window.innerHeight / 2, behavior: "smooth" });
    document.querySelector("body").style.overflow = "hidden";
  }, 300);
});
