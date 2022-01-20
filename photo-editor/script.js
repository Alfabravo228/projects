"use strict";

//expand photo
document.querySelector(".img-container").addEventListener("click", event => {
  document.querySelector(".img-container").classList.toggle("active");
});

document.querySelector(".filters").addEventListener("input", event => {
  const elem = event.target;
  changeFilterValues(elem);
});

function changeFilterValues(elem) {
  elem.nextElementSibling.value = elem.value;
  const value = elem.value;
  if (elem.matches("[name=brightness]")) {
    document.querySelector("img").style.setProperty('--brightness', value + "%");
  } else if (elem.matches("[name=opacity]")) {
    document.querySelector("img").style.setProperty('--opacity', value + "%");
  } else if (elem.matches("[name=sepia]")) {
    document.querySelector("img").style.setProperty('--sepia', value + "%");
  } else if (elem.matches("[name=saturate]")) {
    document.querySelector("img").style.setProperty('--saturate', value + "%");
  } else if (elem.matches("[name=hue]")) {
    document.querySelector("img").style.setProperty('--hue', value + "deg");
  } else if (elem.matches("[name=grayscale]")) {
    document.querySelector("img").style.setProperty('--grayscale', value + "%");
  } else if (elem.matches("[name=contrast]")) {
    document.querySelector("img").style.setProperty('--contrast', value + "%");
  }
}


const img = document.querySelector('img');
document.querySelector(".button-reset").addEventListener("click", (event) => {
  resetFilterValues();
});
function resetFilterValues() {
  img.style.setProperty('--brightness', 100 + "%");
  img.style.setProperty('--opacity', 100 + "%");
  img.style.setProperty('--sepia', 0 + "%");
  img.style.setProperty('--saturate', 100 + "%");
  img.style.setProperty('--hue', 0 + "deg");
  img.style.setProperty('--grayscale', 0 + "%");
  img.style.setProperty('--contrast', 100 + "%");
  const inputs = document.querySelectorAll("input");
  inputs.forEach((element) => {
    if (element.matches("[name=saturate]") || element.matches("[name=contrast]") || element.matches("[name=brightness]") || element.matches("[name=opacity]")) {
      element.value = 100;
      element.nextElementSibling.value = 100;
    } else {
      element.value = 0;
      element.nextElementSibling.value = 0;
    }
  })
}

let i = 0;
document.querySelector(".button-next").addEventListener("click", event => {
  loadNextPicture();
  const button = document.querySelector(".button-next");
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 700);
});
function loadNextPicture() {
  const date = new Date();
  const hour = date.getHours();
  const timesOfDay = ["morning", "day", "evening", "night"];
  const numbersOfImages = ["1", "2", "3", "4", "5",];
  const baseSrc = "/photo-editor/assets/img/";
  let index = i % numbersOfImages.length;
  if (hour >= 6 && 12 > hour) {
    img.src = `${baseSrc}${timesOfDay[0]}/${numbersOfImages[index]}.jpg`;;
  } else if (hour >= 12 && 18 > hour) {
    img.src = `${baseSrc}/${timesOfDay[1]}/${numbersOfImages[index]}.jpg`;
  } else if (hour >= 18 && 24 > hour) {
    img.src = `${baseSrc}/${timesOfDay[2]}/${numbersOfImages[index]}.jpg`;
  } else if (hour >= 24 && 6 > hour) {
    img.src = `${baseSrc}/${timesOfDay[3]}/${numbersOfImages[index]}.jpg`;
  }
  i++;
}

const fileInput = document.querySelector(".button-load-input");
fileInput.addEventListener('change', event => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    img.src = reader.result;
  }
  reader.readAsDataURL(file);
});

document.querySelector('.button-save').addEventListener('click', event => {
  savePicture();
});
function savePicture() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");
  const imgNew = new Image();
  imgNew.src = img.src;
  canvas.width = imgNew.width;
  canvas.height = imgNew.height;
  imgNew.setAttribute('crossOrigin', 'anonymous');
  imgNew.onload = function () {
    ctx.filter = window.getComputedStyle(img).filter;
    ctx.drawImage(imgNew, 0, 0);
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
    canvas.delete;
  }
}

let isFullscreen = false;
document.querySelector('.fullscreen').addEventListener('click', (event) => {
  if (!isFullscreen) {
    document.documentElement.requestFullscreen()
    document.querySelector('.fullscreen').classList.add('active');
    isFullscreen = !isFullscreen;
  } else {
    document.exitFullscreen();
    document.querySelector('.fullscreen').classList.remove('active');
    isFullscreen = !isFullscreen;
  }
});
window.addEventListener('keydown', (event) => {
  if (event.code == "Escape" && isFullscreen) {
    document.querySelector('.fullscreen').classList.remove('active');
    isFullscreen = !isFullscreen;
  }
});