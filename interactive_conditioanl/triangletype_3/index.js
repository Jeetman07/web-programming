function triangleChecker() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);

    function add(x, y) {
        return x + y;
    }

    function greaterThan(x, y) {
        return x > y;
    }

    function equal(x, y) {
        return x === y;
    }

    function notEqual(x, y) {
        return x !== y;
    }

    if (!(greaterThan(add(a, b), c) && greaterThan(add(a, c), b) && greaterThan(add(b, c), a))) {
        document.getElementById('output').textContent = 'These sides do not form a triangle.';
        return;
    }

    var type = '';

    if (equal(a, b) && equal(b, c)) {
        type = 'Equilateral (all sides are equal)';
    } else if (equal(a, b) || equal(b, c) || equal(a, c)) {
        type = 'Isosceles (two sides are equal)';
    } else if (notEqual(a, b) && notEqual(b, c) && notEqual(a, c)) {
        type = 'Scalene (no sides are equal)';
    }

    document.getElementById('output').innerHTML = 'Triangle type: <strong>' + type + '</strong>';
}
