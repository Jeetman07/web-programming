console.log("List of Fruits:", fruits);
console.log("Total Number of Fruits:", fruits.length);
console.log("Fruit at Index 2:", fruits[2]);
console.log("Last Fruit in the List:", fruits[fruits.length - 1]);

let vegetables = [];

for (let i = 1; i <= 3; i++) {
    let vegetable = prompt(`Please enter the name of vegetable ${i}:`);
    vegetables.push(vegetable);
}

console.log("List of Vegetables:", vegetables);
console.log("Total Number of Vegetables:", vegetables.length);
