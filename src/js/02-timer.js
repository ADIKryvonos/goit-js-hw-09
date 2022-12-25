import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('[data-start]');
const timerField = document.querySelectorAll('.timer');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
let chooseDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startButton.setAttribute('disabled', true);
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    if (selectedDates[0] > new Date()) {
      startButton.removeAttribute('disabled');
    }
    chooseDate = selectedDates[0].getTime();
  },
};

startButton.setAttribute('disabled', true);
flatpickr('#datetime-picker', options);

startButton.addEventListener('click', onBtnClick);

function onBtnClick() {
  timer.start();
  startButton.setAttribute('disabled', true);
}

const timer = {
  start() {
    const timerId = setInterval(() => {
      const timeDiff = chooseDate - Date.now();
      const timeComponents = convertMs(timeDiff);
      if (timeDiff < 1000) {
        clearInterval(timerId);
      }
      timerDays.textContent = timeComponents.days.toString().padStart(2, '0');
      timerHours.textContent = timeComponents.hours.toString().padStart(2, '0');
      timerMinutes.textContent = timeComponents.minutes
        .toString()
        .padStart(2, '0');
      timerSeconds.textContent = timeComponents.seconds
        .toString()
        .padStart(2, '0');
    }, 1000);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
