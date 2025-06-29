let count = 0;
let savedCounts = [];

const countDisplay = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const saveButton = document.getElementById('saveButton');
const savedCountsList = document.getElementById('savedCounts');
const sumDisplay = document.getElementById('sum');

function updateCountDisplay() {
    countDisplay.textContent = count;
}

function updateSumDisplay() {
    const sum = savedCounts.reduce((acc, val) => acc + val, 0);
    sumDisplay.textContent = `Sum: ${sum}`;
}

increaseButton.addEventListener('click', () => {
    count++;
    updateCountDisplay();
});

decreaseButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCountDisplay();
    }
});

saveButton.addEventListener('click', () => {
    savedCounts.push(count);
    savedCountsList.textContent = savedCounts.join(' - ');
    updateSumDisplay();
    count = 0;
    updateCountDisplay(); 
});

updateCountDisplay();
updateSumDisplay();