console.log('Simon Says');


//NUMERI RANDOM

const randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}

const randomNumbersElement = document.getElementById('numbers-list');
randomNumbersElement.innerText = randomNumbers.join(' - ');

//NASCONDIAMO I NUMERI A FACCIAMO APPARIRE GLI INPUT
//TIMER

let count = 0;
const countdown = document.getElementById('countdown');
const form = document.getElementById('answers-form');
const inputs = document.getElementById('input-group');

const timer = setInterval(() => {
    count++;
    countdown.textContent = count;

    if (count === 30) {
        randomNumbersElement.classList.add('d-none')
        form.classList.remove('d-none')
        clearInterval(timer); 
    }
}, 1000);






