const pushButton = document.querySelector('#start');
let timerId = 0;
let pomodoroTimer = document.querySelector('#pomodoro-time');

pushButton.addEventListener('click', function() {
    if (pushButton.textContent === "stop") {
        clearInterval(timerId);
        pushButton.textContent = "start";
    } else {
        pushButton.textContent = "stop";
        timerId = setInterval(function() {
            let minutes = pomodoroTimer.textContent.split(":")[0];
            let seconds = pomodoroTimer.textContent.split(":")[1];

            if (seconds != 00) {
                seconds--;
                pomodoroTimer.textContent = `${minutes}:${seconds}`;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
                pomodoroTimer.textContent = `${minutes}:${seconds}`;
            }

            if (seconds < 10) {
                pomodoroTimer.textContent = `${minutes}:0${seconds}`;
            }

            if (seconds <= 0 && minutes <= 0) {
                clearInterval(timerId);
                pomodoroTimer.textContent = '25:00';
                pushButton.textContent = 'start';
            }
        }, 100)
    }
})