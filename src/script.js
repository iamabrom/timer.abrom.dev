let interval, forwardTimerInterval;

document.getElementById('startButton').addEventListener('click', function() {
    var titleInput = document.getElementById('titleInput');
    var title = titleInput.value !== titleInput.defaultValue ? titleInput.value : titleInput.defaultValue;
    var time = parseInt(document.getElementById('timeInput').value);

    if (!time || time <= 0) {
        alert('Please enter a valid time in minutes.');
        return;
    }

    document.getElementById('title').textContent = title;
    document.getElementById('inputFields').style.display = 'none';
    document.getElementById('restartButton').style.display = 'inline';
    startTimer(time);
});

document.getElementById('restartButton').addEventListener('click', function() {
    clearInterval(interval);
    clearInterval(forwardTimerInterval);
    document.getElementById('timer').textContent = "00:00";
    document.getElementById('timer').classList.remove('forward-timer');
    toggleInputFields(true);
});

function startTimer(duration) {
    var timer = duration * 60, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').textContent = "-" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            forwardCountingTimer();
        }
    }, 1000);
}

function forwardCountingTimer() {
    var timer = 0, minutes, seconds;
    document.getElementById('timer').innerHTML = "Time is up!<br>";
    document.getElementById('timer').classList.add('forward-timer');
    forwardTimerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').innerHTML = "Time is up!<br>+" + minutes + ":" + seconds;
        timer++;
    }, 1000);
}

function toggleInputFields(show) {
    document.getElementById('inputFields').style.display = show ? 'block' : 'none';
    document.getElementById('restartButton').style.display = show ? 'none' : 'inline';
}
