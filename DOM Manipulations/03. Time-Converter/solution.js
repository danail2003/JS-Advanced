function attachEventsListeners() {
    const dayButton = document.getElementById('daysBtn');
    const hourButton = document.getElementById('hoursBtn');
    const minuteButton = document.getElementById('minutesBtn');
    const secondButton = document.getElementById('secondsBtn');

    dayButton.addEventListener('click', function () {
        const value = document.getElementById('days').value;

        document.getElementById('hours').value = value * 24;
        document.getElementById('minutes').value = value * 1440;
        document.getElementById('seconds').value = value * 86400;
    });

    hourButton.addEventListener('click', function () {
        const value = document.getElementById('hours').value;

        document.getElementById('days').value = value / 24;
        document.getElementById('minutes').value = value * 60;
        document.getElementById('seconds').value = value * 60 * 60;
    });

    minuteButton.addEventListener('click', function () {
        const value = document.getElementById('minutes').value;

        document.getElementById('days').value = value / 60 / 24;
        document.getElementById('hours').value = value / 60;
        document.getElementById('seconds').value = value * 60;
    });

    secondButton.addEventListener('click', function () {
        const value = document.getElementById('seconds').value;

        document.getElementById('days').value = value / 60 / 60 / 24;
        document.getElementById('hours').value = value / 60 / 60;
        document.getElementById('minutes').value = value / 60;
    });
}