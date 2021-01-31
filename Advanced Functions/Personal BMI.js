function solve() {
    let personBMI = {};

    personBMI.name = arguments[0];
    personBMI.personalInfo = {
        age: arguments[1],
        weight: arguments[2],
        height: arguments[3]
    };

    personBMI.BMI = Math.round(arguments[2] / (arguments[3] / 100) / (arguments[3] / 100));

    if (personBMI.BMI < 18.5) {
        personBMI.status = 'underweight';
    }
    else if (personBMI.BMI < 25) {
        personBMI.status = 'normal';
    }
    else if (personBMI.BMI < 30) {
        personBMI.status = 'overweight';
    }
    else if (personBMI.BMI >= 30) {
        personBMI.status = 'obese';
        personBMI.recommendation = 'admission required';
    }

    return personBMI;
}

console.log(solve('Honey Boo Boo', 9, 57, 137));