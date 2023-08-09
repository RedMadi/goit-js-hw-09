const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const elememtToChange = document.querySelector('body');
let timerId = null;
stopBtn.disabled = true;
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    let randomColor = getRandomHexColor();
    elememtToChange.style.backgroundColor = randomColor;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
