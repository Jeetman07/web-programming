function sortArray(array) {
    return [...array].sort((a, b) => a - b);
}

const numbers = [10, 5, 7, 3, 9];

console.log("Original Array:", numbers);

const sortedNumbers = sortArray(numbers);

console.log("Sorted Array:", sortedNumbers);
