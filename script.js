let currentNumber = 1;
let totalLines = 69696969696969;
let outputElement = document.getElementById("output");
let progressElement = document.getElementById("progress");
let timerElement = document.getElementById("timer");

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `Timer: ${minutes}:${seconds}`;
}

function printNumber() {
    const currentTime = getCurrentTime();
    outputElement.innerHTML += `${currentTime} - ${currentNumber} | Địt mẹ thằng Khánh cặc ` + "<br>"; // Type your custom text here!
    currentNumber++;

    requestAnimationFrame(() => {
        outputElement.scrollTop = outputElement.scrollHeight;
    });

    let progressText = `Total: ${currentNumber}/${totalLines}`;
    progressElement.innerHTML = progressText;

    const currentTimeElapsed = new Date() - startTime;
    timerElement.innerHTML = formatTime(currentTimeElapsed);

    if (currentNumber <= totalLines) {
        setTimeout(printNumber, 1000);
    } else {
        alert("Kết quả: " + progressText);
        alert("Những con người rảnh nhất thế giới, bái phục ngài Simga. F12 hả?? 🤔🤔");
    }

    if (currentNumber > totalLines) {
        clearInterval(timerInterval);
    }
}

const startTime = new Date();
const timerInterval = setInterval(printNumber, 100);
