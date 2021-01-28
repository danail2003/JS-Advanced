function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const output = document.getElementById('outputDistance');
    const outputUnits = document.getElementById('outputUnits');
    const button = document.getElementById('convert');

    button.addEventListener('click', function (e) {
        let distance = 0;

        if (inputUnits.value === 'km') {
            distance = input.value * 1000;
        }
        else if (inputUnits.value === 'm') {
            distance = input.value;
        }
        else if (inputUnits.value === 'cm') {
            distance = input.value / 100;
        }
        else if (inputUnits.value === 'mm') {
            distance = input.value / 1000;
        }
        else if (inputUnits.value === 'mi') {
            distance = input.value * 1609.34;
        }
        else if (inputUnits.value === 'yrd') {
            distance = input.value * 0.9144;
        }
        else if (inputUnits.value === 'ft') {
            distance = input.value * 0.3048;
        }
        else if (inputUnits.value === 'in') {
            distance = input.value * 0.0254;
        }

        if (outputUnits.value === 'km') {
            output.value = distance / 1000;
        }
        else if (outputUnits.value === 'm') {
            output.value = distance;
        }
        else if (outputUnits.value === 'cm') {
            output.value = distance / 0.01;
        }
        else if (outputUnits.value === 'mm') {
            output.value = distance / 0.001;
        }
        else if (outputUnits.value === 'mi') {
            output.value = distance / 1609.34
        }
        else if (outputUnits.value === 'yrd') {
            output.value = distance / 0.9144;
        }
        else if (outputUnits.value === 'ft') {
            output.value = distance / 0.3048;
        }
        else if (outputUnits.value === 'in') {
            output.value = distance / 0.0254;
        }
    });
}