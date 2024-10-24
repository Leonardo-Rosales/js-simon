console.log('Simon Says');

//TIMER

let count = 0;
const countdown = document.getElementById('countdown');

const timer = setInterval(() => {
    count++;
    countdown.innerText = count;

    if (count >= 30) {
        clearInterval(timer);
        alert("Tempo scaduto!");
    }
}, 1000);

//NUMERI RANDOM

const randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}

const randomNumbersElement = document.getElementById('numbers-list');
randomNumbersElement.innerText = randomNumbers.join(' - ');

