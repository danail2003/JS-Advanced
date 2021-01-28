function stopwatch() {
    const time = document.getElementById("time");
    const startButton = document.getElementById("startBtn");
    const stopButton = document.getElementById("stopBtn");
    let seconds = 0;
    let interval = null;

    startButton.addEventListener("click", function (e) {
        e.preventDefault();
        startButton.disabled = true;
        stopButton.disabled = false;

        interval = setInterval(function () {
            seconds++;

            let minutes = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSeconds = ('0' + seconds % 60).slice(-2);

            time.textContent = `${minutes}:${currentSeconds}`;
        }, 1000)

        time.textContent = "00:00";
    });

    stopButton.addEventListener("click", function (e) {
        stopButton.disabled = true;
        startButton.disabled = false;

        clearInterval(interval);
    });
}