function solution(object) {
    if (object.dizziness === true) {
        object.levelOfHydrated += 0.1 * object.weight * object.experience;
        object.dizziness = false;
    }

    return object;
}

console.log(solution({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));