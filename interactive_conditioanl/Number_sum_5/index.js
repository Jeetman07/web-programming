function sumCalculator() {
    var n = parseInt(document.getElementById('number').value);

    function lessOrEqual(x, y) {
        return x <= y;
    }

    function add(x, y) {
        return x + y;
    }

    if (!lessOrEqual(1, n)) {
        document.getElementById('output').textContent = 'Please enter a positive integer.';
        return;
    }

    var sum = 0;
    var i = 1;

    while (lessOrEqual(i, n)) {
        sum = add(sum, i);
        i = add(i, 1);
    }

    var outputText = 'Sum of all natural numbers <strong>' + n + '</strong> is: <strong>' + sum + '</strong>';
    document.getElementById('output').innerHTML = outputText;
}
