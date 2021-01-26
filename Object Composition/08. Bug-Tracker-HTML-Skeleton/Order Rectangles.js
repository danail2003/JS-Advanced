function solution(array) {
    function createRectangle(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: function () {
                return rectangle.width * rectangle.height;
            },
            compareTo: function (other) {
                return other.area() - rectangle.area() || other.width - rectangle.width;
            },
        };

        return rectangle;
    }

    let result = [];

    for (let [width, height] of array) {
        result.push(createRectangle(width, height));
    }

    let sortedResult = result.sort((a, b) => a.compareTo(b));

    return sortedResult;
}

console.log(solution([[10, 5], [5, 12]]));
console.log(solution([[10, 5], [3, 20], [5, 12]]));