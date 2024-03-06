const pushButton = document.querySelector('#start');
let timerId = 0;
const pomodoroTimer = document.querySelector('#pomodoro-time');
let minutes = pomodoroTimer.textContent.split(":")[0];
let seconds = pomodoroTimer.textContent.split(":")[1];

const formatTime = val => {
    if (val < 10) {
        return '0' + val;
    } else {
        return val;
    }
};

pushButton.addEventListener('click', function() {
    if (pushButton.textContent === "stop") {
        clearInterval(timerId);
        pushButton.textContent = "start";
    } else {
        pushButton.textContent = "stop";
        timerId = setInterval(function() {
            if (seconds > 0) {
                seconds--;
                pomodoroTimer.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
                pomodoroTimer.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
            }

            if (seconds <= 0 && minutes <= 0) {
                clearInterval(timerId);
                pomodoroTimer.textContent = '25:00';
                pushButton.textContent = 'start';
            }
        }, 50)
    }
})