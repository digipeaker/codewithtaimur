// Array Sum Calculator
function calculateSum() {
    let input = document.getElementById("sumInput").value;
    let numbers = input.split(",").map(Number);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.getElementById("sumResult").innerText = "Sum: " + sum;
}

// Reverse Array Tool
function reverseArray() {
    let input = document.getElementById("reverseInput").value;
    let numbers = input.split(",").map(Number);
    let reversed = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    document.getElementById("reverseResult").innerText = "Reversed: " + reversed.join(", ");
}
