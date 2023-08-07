// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// let startTime = null;

// const refs = {
//   startBtn: document.querySelector('[data-start]'),
//   date: document.querySelector('#datetime-picker'),
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   minutes: document.querySelector('span[data-minutes]'),
//   seconds: document.querySelector('span[data-seconds]'),
// };

// refs.startBtn.disabled = true;
// refs.startBtn.addEventListener('click', onClick);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] < Date.now()) {
//       window.alert('Please choose a date in the future!');
//     } else {
//       startTime = selectedDates[0];
//       refs.startBtn.disabled = false;
//     }
//   },
// };

// function onClick() {
//   setInterval(() => {
//     getTimeComponents(startTime - Date.now());
//     if (
//       (refs.minutes.textContent === '00') &
//       (refs.seconds.textContent === '00')
//     ) {
//       clearInterval(timerID);
//     }
//   }, 1000);
//   refs.startBtn.disabled = true;
// }

// flatpickr('#datetime-picker', options);
// function getTimeComponents(time) {
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.minutes.textContent = mins;
//   refs.seconds.textContent = secs;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let startTime = null;
const refs = {
  startBtn: document.querySelector('[data-start]'),
  date: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future!');
    } else {
      startTime = selectedDates[0];
      refs.startBtn.disabled = false;
    }
  },
};

function onClick() {
  setInterval(() => {
    // convertMs(startTime - Date.now());
    let result = convertMs(startTime - Date.now());
    refs.days.textContent = addLeadingZero(result.days);
    refs.hours.textContent = addLeadingZero(result.hours);
    refs.minutes.textContent = addLeadingZero(result.minutes);
    refs.seconds.textContent = addLeadingZero(result.seconds);
    if (
      (refs.minutes.textContent === '00') &
      (refs.seconds.textContent === '00')
    ) {
      clearInterval(timerID);
    }
  }, 1000);
  refs.startBtn.disabled = true;
}

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
