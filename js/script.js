console.log('Simon Says');


let count = 0;
const countdown = document.getElementById('countdown');

const timer = setInterval(() => {
    count++;
    countdown.textContent = count;

    if (count >= 30) {
        clearInterval(timer);
        alert("Tempo scaduto!");
    }
}, 1000);

