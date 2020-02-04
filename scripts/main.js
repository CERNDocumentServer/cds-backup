function chooseBackground() {
  var images = ["accelerator", "exihibition", "leds", "worker"];
  var random = Math.floor(Math.random() * images.length + 1);
  var className = `body-bg-${images[random - 1]}`;
  document.body.classList.add(className);
}

window.addEventListener("load", chooseBackground, false);
