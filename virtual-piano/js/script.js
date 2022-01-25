//Audio function
function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

//Mouse events
const piano = document.querySelector('.piano');
let isMouseDown = false;
piano.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    event.target.classList.add('active');
    isMouseDown = true;
  }
});
piano.addEventListener('mouseover', (event) => {
  if (isMouseDown) {
    if (event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
      event.target.classList.add('active');
    }
  }
});
document.body.addEventListener('mouseup', (event) => {
  piano.classList.remove('active');
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.remove('active');

  }
  isMouseDown = false;
});
piano.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.remove('active');
  }
});

//Switch notes/letters 
const button1 = document.querySelector('.btn-notes');
button1.addEventListener('click', (event) => {
  button1.classList.add('btn-active');
  button2.classList.remove('btn-active');
  document.querySelector('.piano').classList.remove('letters');
});
const button2 = document.querySelector('.btn-letters');
button2.addEventListener('click', (event) => {
  button2.classList.add('btn-active');
  button1.classList.remove('btn-active');
  document.querySelector('.piano').classList.add('letters');
});

//Keyboard events 
window.addEventListener('keydown', (event) => {
  if (event.repeat) { return }
  let code = event.code;
  let src = `assets/audio/c.mp3`;
  switch (code) {
    case 'KeyD':
      document.querySelectorAll('.piano-key')[0].classList.add('active');
      src = `assets/audio/d.mp3`;
      playAudio(src);
      break;
    case 'KeyF':
      document.querySelectorAll('.piano-key')[1].classList.add('active');
      src = `assets/audio/d.mp3`;
      playAudio(src);
      break;
    case 'KeyG':
      document.querySelectorAll('.piano-key')[2].classList.add('active');
      src = `assets/audio/e.mp3`;
      playAudio(src);
      break;
    case 'KeyH':
      document.querySelectorAll('.piano-key')[3].classList.add('active');
      src = `assets/audio/f.mp3`;
      playAudio(src);
      break;
    case 'KeyJ':
      document.querySelectorAll('.piano-key')[4].classList.add('active');
      src = `assets/audio/d.mp3`;
      playAudio(src);
      break;
    case 'KeyK':
      document.querySelectorAll('.piano-key')[5].classList.add('active');
      src = `assets/audio/a.mp3`;
      playAudio(src);
      break;
    case 'KeyL':
      document.querySelectorAll('.piano-key')[6].classList.add('active');
      src = `assets/audio/b.mp3`;
      playAudio(src);
      break;
    case 'KeyR':
      document.querySelectorAll('.piano-key')[7].classList.add('active');
      src = `assets/audio/c♯.mp3`;
      playAudio(src);
      break;
    case 'KeyT':
      document.querySelectorAll('.piano-key')[8].classList.add('active');
      src = `assets/audio/d♯.mp3`;
      playAudio(src);
      break;
    case 'KeyU':
      document.querySelectorAll('.piano-key')[10].classList.add('active');
      src = `assets/audio/f♯.mp3`;
      playAudio(src);
      break;
    case 'KeyI':
      document.querySelectorAll('.piano-key')[11].classList.add('active');
      src = `assets/audio/g♯.mp3`;
      playAudio(src);
      break;
    case 'KeyO':
      document.querySelectorAll('.piano-key')[12].classList.add('active');
      src = `assets/audio/a♯.mp3`;
      playAudio(src);
      break;
  }
  window.addEventListener('keyup', (event) => {
    let code = event.code;
    switch (code) {
      case 'KeyD':
        document.querySelectorAll('.piano-key')[0].classList.remove('active');
        break;
      case 'KeyF':
        document.querySelectorAll('.piano-key')[1].classList.remove('active');
        break;
      case 'KeyG':
        document.querySelectorAll('.piano-key')[2].classList.remove('active');
        break;
      case 'KeyH':
        document.querySelectorAll('.piano-key')[3].classList.remove('active');
        break;
      case 'KeyJ':
        document.querySelectorAll('.piano-key')[4].classList.remove('active');
        break;
      case 'KeyK':
        document.querySelectorAll('.piano-key')[5].classList.remove('active');
        break;
      case 'KeyL':
        document.querySelectorAll('.piano-key')[6].classList.remove('active');
        break;
      case 'KeyR':
        document.querySelectorAll('.piano-key')[7].classList.remove('active');
        break;
      case 'KeyT':
        document.querySelectorAll('.piano-key')[8].classList.remove('active');
        break;
      case 'KeyU':
        document.querySelectorAll('.piano-key')[10].classList.remove('active');
        break;
      case 'KeyI':
        document.querySelectorAll('.piano-key')[11].classList.remove('active');
        break;
      case 'KeyO':
        document.querySelectorAll('.piano-key')[12].classList.remove('active');
        break;
    }
  });
});

//Fullscreen mode
let isFullscreen = false;
document.querySelector('.fullscreen').addEventListener('click', (event) => {
  if (isFullscreen == false) {
    document.body.requestFullscreen();
    document.querySelector('.fullscreen').classList.add('active');
    isFullscreen = !isFullscreen;
  } else {
    document.exitFullscreen();
    document.querySelector('.fullscreen').classList.remove('active');
    isFullscreen = !isFullscreen;
  }
});