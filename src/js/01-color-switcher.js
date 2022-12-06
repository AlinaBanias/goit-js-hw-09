function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const bodyColor = document.body;
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', e => {
    colorChanger.startColor();
});
btnStop.addEventListener('click', e => {
    colorChanger.stopColor();
});


const colorChanger = {
    isActive: false,
    startColor() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;
        this.intervalId = setInterval(() => {
            bodyColor.style.backgroundColor = getRandomHexColor();
            console.log(bodyColor.style.backgroundColor)
        }, 1000);
        },
        stopColor() {
            this.isActive = false;
            clearInterval(this.intervalId);
        }

    }
