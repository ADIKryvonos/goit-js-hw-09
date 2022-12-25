const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bgColor = document.querySelector('body');
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    bgColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.removeAttribute('disabled');
});
