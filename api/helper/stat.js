var random_input = [
    1, 1, 2,     // p1, p2, x1
    1, 2, 2,     // p3, p3, x2
    1, 1, 1,     // etc.
    2, 4, 1,
    1, 1, 1
]; // note: chose totally at random

function weighted_average(input) {
    var weights = [];
    var values = [];
    var weighted_total = 0;
    var total_weight = 0;;

    if (input.length % 3 !== 0) {
        throw new Error("Input array length is not a multiple of 3.");
    }

    for (var i = 0; i < input.length; i += 3) {
        weights.push(input[i] * input[i + 1]);
        values.push(input[i + 2]);
    }

    for (var i = 0; i < weights.length; i += 1) {
        weighted_total += weights[i] * values[i];
        total_weight += weights[i];
    }

    return weighted_total / total_weight;
}

function weighted_average(input) {
    var weights = [];
    var values = [];
    var weighted_total = 0;
    var total_weight = 0;;

    if (input.length % 3 !== 0) {
        throw new Error("Input array length is not a multiple of 3.");
    }

    for (var i = 0; i < input.length; i += 3) {
        weights.push(input[i] * input[i + 1]);
        values.push(input[i + 2]);
    }

    for (var i = 0; i < weights.length; i += 1) {
        weighted_total += weights[i] * values[i];
        total_weight += weights[i];
    }

    return weighted_total / total_weight;
}

module.exports = weighted_average;

console.log(weighted_average(random_input));