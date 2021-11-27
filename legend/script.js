//header
document.querySelector('.header__burger').addEventListener('click', event => {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
  document.body.classList.toggle('lock');
})

document.querySelector('.header__point_1').classList.add("active");
document.querySelector(".header__row-colour").addEventListener('click', event => {
  if (event.target.classList.contains("header__colour") || event.target.classList.contains("header__point")) {
    const index = event.target.dataset.indexNumber;
    const colors = ["#f0bf00", "#312a1e", "#0b333f", "#0fbeca", "#5a1d1d", "#432646", "#f11e2f", "#322941", "#254629"];

    for (let i = 0; i < 3; i++) {
      document.querySelectorAll(".header__colour")[i].classList.remove("active");
      document.querySelectorAll(".header__point")[i].classList.remove("active");
    }
    document.querySelector(`.header__point_${index}`).classList.add("active");

    switch (+index) {
      case 1:
        document.documentElement.style.setProperty('--color1', `${colors[0]}`);
        document.documentElement.style.setProperty('--color2', `${colors[1]}`);
        document.documentElement.style.setProperty('--color3', `${colors[2]}`);
        break;
      case 2:
        document.documentElement.style.setProperty('--color1', `${colors[3]}`);
        document.documentElement.style.setProperty('--color2', `${colors[4]}`);
        document.documentElement.style.setProperty('--color3', `${colors[5]}`);
        break;
      case 3:
        document.documentElement.style.setProperty('--color1', `${colors[6]}`);
        document.documentElement.style.setProperty('--color2', `${colors[7]}`);
        document.documentElement.style.setProperty('--color3', `${colors[8]}`);
        break;
    }
  }
});

//start
document.querySelector(".start__arrow").addEventListener('click', event => {
  document.querySelector('.start__arrow-icon').classList.toggle('active');
  document.querySelector(".start__pop-up").classList.toggle('active');
});

//form
function send(method, url, body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }
    xhr.onerror = () => {
      reject.apply(xhr.response)
    }
    xhr.send(JSON.stringify(body));
  })
}

document.querySelector(".start__form").addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    "data": document.querySelector(".start__email").value,
  };
  send('POST', "http://127.0.0.1:3000/posts", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
});

document.querySelector(".contact__form").addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    "name": document.querySelector("#text-field-1").value,
    "surname": document.querySelector("#text-field-2").value,
    "company": document.querySelector("#text-field-3").value,
    "website": document.querySelector("#text-field-4").value,
    "text": document.querySelector("#text-field-5").value,
  };
  send('POST', "http://127.0.0.1:3000/comments", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
});
