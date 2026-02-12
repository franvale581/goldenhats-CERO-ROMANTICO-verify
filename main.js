// ajuste de viewport para mobile
function fixVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

document.addEventListener('DOMContentLoaded', fixVh);
window.addEventListener('resize', fixVh);
window.addEventListener('orientationchange', fixVh);


// Loader logic 

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const images = document.querySelectorAll(".loader-img");

  let index = 0;

const switchTime = 2000; // cada imagen vive más tiempo
const minDuration = 6600; // duración total mínima del loader

  const startTime = Date.now();

  function nextImage() {

    images[index].classList.remove("active");

    index = (index + 1) % images.length;

    setTimeout(() => {
      images[index].classList.add("active");
    }, 200); // pequeño blackout cinematográfico
  }

  const interval = setInterval(nextImage, switchTime);

  function finishLoader() {

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(minDuration - elapsed, 0);

    setTimeout(() => {

      clearInterval(interval);

      loader.style.opacity = "0";

      setTimeout(() => {
        loader.remove();
      }, 1000);

    }, remaining);
  }

  finishLoader();

  setTimeout(() => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        // 🔥 ACTIVAR animaciones del sitio
        document.body.classList.add("loaded");

    }, 1000); // mismo tiempo que transition del loader

}, minDuration);

});

// Verificación lógica

const btn = document.getElementById("verifyBtn");
const progress = document.querySelector(".progress");
const bar = document.querySelector(".progress-bar");
const success = document.querySelector(".success");

btn.addEventListener("click", () => {

  progress.classList.add("show");

  let value = 0;

  const load = setInterval(()=>{

    value += Math.random()*10;
    bar.style.width = value+"%";

    if(value >= 100){

      clearInterval(load);
      success.classList.add("show");

    }

  },250);

});