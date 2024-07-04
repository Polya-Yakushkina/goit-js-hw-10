import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const picker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');
let userSelectedDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(picker, options);

startButton.addEventListener('click', function () {
    const selectedDate = picker._flatpickr.selectedDates[0];
    const currentDate = new Date();
    const msDifference = selectedDate.getTime() - currentDate.getTime();

    if (selectedDate <= currentDate) {
        iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future',
        });
        startButton.disabled = true;
        return;
    }
    startButton.disabled = true;
    picker.disabled = true;
    startTimer(msDifference);
});

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}


function updateTimer(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysElem.textContent = addLeadingZero(days);
    hoursElem.textContent = addLeadingZero(hours);
    minutesElem.textContent = addLeadingZero(minutes);
    secondsElem.textContent = addLeadingZero(seconds);
}

function resetTimer() {
    updateTimer(0);
}

function startTimer(totalMS) {
    timerInterval = setInterval(function () {
        totalMS -= 1000;

        if (totalMS <= 0) {
            clearInterval(timerInterval);
            startButton.disabled = false;
            picker.disabled = false;
            resetTimer();
            return;
        }
        updateTimer(totalMS);
    }, 1000);
}





