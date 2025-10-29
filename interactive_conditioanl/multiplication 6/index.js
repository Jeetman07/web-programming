function tableGenerator() {
    var n = parseInt(document.getElementById('number').value);

    function lessOrEqual(x, y) {
        return x <= y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function add(x, y) {
        return x + y;
    }

    if (!lessOrEqual(1, n)) {
        document.getElementById('output').textContent = 'Please enter a positive integer.';
        return;
    }

    var tableHTML = '<h2>Multiplication Table:</h2><table>';
    var i = 1;

    while (lessOrEqual(i, n)) {
        tableHTML = tableHTML + '<tr>';
        var j = 1;
        while (lessOrEqual(j, n)) {
            tableHTML = tableHTML + '<td>' + multiply(i, j) + '</td>';
            j = add(j, 1);
        }
        tableHTML = tableHTML + '</tr>';
        i = add(i, 1);
    }

    tableHTML = tableHTML + '</table>';
    document.getElementById('output').innerHTML = tableHTML;
}
