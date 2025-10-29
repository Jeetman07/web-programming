function gradeCalculator() {
    var score = Number(document.getElementById('score').value);

    function greaterOrEqual(x, y) {
        return x >= y;
    }

    function lessOrEqual(x, y) {
        return x <= y;
    }

    function and(condition1, condition2) {
        return condition1 && condition2;
    }

    var grade;

    if (and(greaterOrEqual(score, 0), lessOrEqual(score, 39))) {
        grade = 0;
    } else if (and(greaterOrEqual(score, 40), lessOrEqual(score, 51))) {
        grade = 1;
    } else if (and(greaterOrEqual(score, 52), lessOrEqual(score, 63))) {
        grade = 2;
    } else if (and(greaterOrEqual(score, 64), lessOrEqual(score, 75))) {
        grade = 3;
    } else if (and(greaterOrEqual(score, 76), lessOrEqual(score, 87))) {
        grade = 4;
    } else if (and(greaterOrEqual(score, 88), lessOrEqual(score, 100))) {
        grade = 5;
    } else {
        document.getElementById('output').textContent = 'Please enter a valid score between 0 and 100.';
        return;
    }

    var outputText = 'Your score: <strong>' + score + '</strong><br>Grade: <strong>' + grade + '</strong>';
    document.getElementById('output').innerHTML = outputText;
}
