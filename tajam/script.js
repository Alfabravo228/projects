//header
document.querySelector(".header__button").addEventListener("click", event => {
  document.querySelector(".header__text_1").style.margin = "0";
  document.querySelector(".header__text_2").style.margin = "0 0 50px 0";
  document.querySelector(".header__text_2").style.height = "auto";
  document.querySelector(".header__text_2").style.opacity = "1";
  document.querySelector(".header__text_2").style.display = "inline-block";
  document.querySelector(".header__button").style.display = "none"
})

let i = 0
const timer = setInterval(() => {
  if (i == 3) {
    i = 0;
  }
  const arr = ["forest", "water", "mountain"];
  changeBackground2(arr[i]);
  i++;
}, 10000);

function changeBackground1(value) {
  clearInterval(timer)
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".header__point")[i].style = "background: none;"
  }
  event.target.style = "background: #51b8ff;"
  let url = `url("../img/${value}.jpg")`;
  document.querySelector(".header").style.setProperty('--back-url', url);

}
function changeBackground2(value) {
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".header__point")[i].style = "background: none;"
  }
  let point = `.header__point_${i}`;
  document.querySelector(`${point}`).style = "background: #51b8ff;"
  let url = `url("../img/${value}.jpg")`;
  document.querySelector(".header").style.setProperty('--back-url', url);
}

document.querySelector(".header__switch").addEventListener("click", event => {
  if (event.target.classList.contains("header__point_0")) {
    changeBackground1("forest");
  } else if (event.target.classList.contains("header__point_1")) {
    changeBackground1("water");
  } else if (event.target.classList.contains("header__point_2")) {
    changeBackground1("mountain");
  }
})

document.querySelector(".header__switch").addEventListener("mousedown", event => {
  if (event.target.classList.contains("header__point")) {
    document.querySelector(".header").style.filter = "contrast(105%)";
  }
})

document.addEventListener("mouseup", event => {
  document.querySelector(".header").style.filter = "contrast(100%)";
})

document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
  document.body.classList.toggle('lock');
}

//story
document.querySelector(".story__button").addEventListener("click", event => {
  document.querySelector(".story__middle-p").style.margin = "0 0 15px 0";
  document.querySelector(".story__last-p").style = "height: auto;opacity: 1;overflow: visible";
  document.querySelector(".story__button").style.display = "none"
})

//video
document.querySelector(".video__button").addEventListener("click", event => {
  document.querySelector(".video__button").style.display = "none";
  document.querySelector(".video__title").style.display = "none";
  document.querySelector(".video__line_1").style.opacity = "0";
  document.querySelector(".video__line_2").style.opacity = "0";
  document.querySelector(".video__wrapper").style.opacity = "0";
  document.querySelector(".video__wrapper").style.zIndex = "0";
  document.querySelector(".video__video").src = "https://www.youtube.com/embed/4EoUz39nPMM?autoplay=1";
  setTimeout(() => {
    document.querySelector(".video__video").style.zIndex = "10";
  }, 1000);
})

//image
document.querySelector(".image__button").addEventListener("click", event => {
  for (let i = 0; i < 6; i++) {
    document.querySelectorAll(".image__add-column")[i].style.display = "block";
    setTimeout(() => {
      document.querySelectorAll(".image__add-column")[i].style.opacity = "1";
    }, 200);

  }
  document.querySelector(".image__button").style.display = "none";
  document.querySelector(".image").style.padding = "0 0 40px 0";
})

//quote
let j = 2;
function leftMove() {
  const names = ["Ann Willams", "John Ramsey", "Gane Galadriel", "Richard Brown", "Lizabet Brown"];
  const posts = ["Designer", "Developer", " CEO", "Engenner", "Manager"];

  switch (j) {
    case 0:
      j = 5;
      break;
    case -1:
      j = 4;
      break;
    case j > 5:
      j = 5
  }
  let k = --j;
  let l = j;
  if (j == 5) {
    l = 0;
  }
  document.querySelector(".quote__name").innerHTML = names[l];
  document.querySelector(".quote__post").innerHTML = posts[l];
  changeQuote(l);

  let a = k + 2;
  let b = k + 1;
  let c = k - 1;
  let d = k - 2;
  if (a == 6) {
    a = 1;
  }
  if (c == 0) {
    c = 5;
  }
  if (c == -1) {
    c = 4;
  }
  if (d == -1) {
    d = 4;
  }
  if (d == -2) {
    d = 3;
  }
  if (d == 0) {
    d = 5;
  }
  if (k == 0) {
    k = 5;
  }
  document.querySelector(".quote__img_1").src = `img/portrat${c}.jpg`;
  document.querySelector(".quote__img_2").src = `img/portrat${k}.jpg`;
  document.querySelector(".quote__img_3").src = `img/portrat${b}.jpg`;
  document.querySelector(".quote__img_4").src = `img/portrat${a}.jpg`;
  document.querySelector(".quote__img_5").src = `img/portrat${d}.jpg`;
}
function rightMove() {
  let k = ++j;
  const names = ["Ann Willams", "John Ramsey", "Gane Galadriel", "Richard Brown", "Lizabet Brown"];
  const posts = ["Designer", "Developer", " CEO", "Engenner", "Manager"];

  if (j == 5) {
    j = 0;
  }
  document.querySelector(".quote__name").innerHTML = names[j];
  document.querySelector(".quote__post").innerHTML = posts[j];
  changeQuote(j)

  let a = k + 2;
  let b = k + 1;
  let c = k - 1;
  let d = k - 2;
  if (a == 7) {
    a = 2;
  }
  if (a == 6) {
    a = 1;
  }
  if (b == 6) {
    b = 1;
  }
  if (c == 0) {
    c = 5;
  }
  if (d == -1) {
    d = 4;
  }
  if (d == 0) {
    d = 5;
  }
  document.querySelector(".quote__img_1").src = `img/portrat${c}.jpg`;
  document.querySelector(".quote__img_2").src = `img/portrat${k}.jpg`;
  document.querySelector(".quote__img_3").src = `img/portrat${b}.jpg`;
  document.querySelector(".quote__img_4").src = `img/portrat${a}.jpg`;
  document.querySelector(".quote__img_5").src = `img/portrat${d}.jpg`;
}
function changeQuote(i) {
  const quotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "Quas iure corporis animi aperiam aliquam expedita esse sequi cum hic inventore, quod, quidem fugiat obcaecati sed eum, deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolores! Tempore assumenda voluptatem expedita veritatis quia vel asperiores doloribus accusantium architecto ab ipsum eos animi et rerum, adipisci rem optio!Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem dolorum nobis quas, in consectetur modi, repellat placeat quasi consequatur assumenda numquam doloremque.Ad in veritatis rerum perferendis quas ? Possimus, vitae!",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."]
  switch (i) {
    case 0:
      document.querySelector(".quote__text").innerHTML = `${quotes[0]}`;
      break;
    case 1:
      document.querySelector(".quote__text").innerHTML = `${quotes[1]}`;
      break;
    case 2:
      document.querySelector(".quote__text").innerHTML = `${quotes[2]}`;
      break;
    case 3:
      document.querySelector(".quote__text").innerHTML = `${quotes[3]}`;
      break;
    case 4:
      document.querySelector(".quote__text").innerHTML = `${quotes[4]}`;
      break;
  }
}
const rightArrow1 = document.querySelector(".quote__column_right");
const rightArrow2 = document.querySelector(".quote__column_right2");
const leftArrow1 = document.querySelectorAll(".quote__column_left")[1];
const leftArrow2 = document.querySelector(".quote__column_left");

rightArrow1.addEventListener("click", event => {
  rightMove();
});
rightArrow2.addEventListener("click", event => {
  rightMove();
})
leftArrow1.addEventListener("click", event => {
  leftMove();
});
leftArrow2.addEventListener("click", event => {
  leftMove();
})

let height = document.querySelector(".quote__img_1").offsetWidth;

window.addEventListener("resize", event => {
  height = document.querySelector(".quote__img_1").offsetWidth;
  for (let i = 1; i < 6; i++) {
    document.querySelectorAll(".quote__column")[i].style.height = `${height}px`;
  }
}, false);
for (let i = 1; i < 6; i++) {
  document.querySelectorAll(".quote__column")[i].style.height = `${height}px`;
}

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

document.querySelector(".form__button").addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    "name": document.querySelector("#input-name").value,
    "email": document.querySelector("#input-email").value,
    "subject": document.querySelector("#input-subject").value,
    "text": document.querySelector("#input-text").value,
  };
  send('POST', "http://127.0.0.1:3000/comments", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
});