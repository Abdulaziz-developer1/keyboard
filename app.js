let resultText = "";

function updateDisplay() {
    document.getElementById("result").innerText = resultText;
}

document.querySelectorAll(".key").forEach(button => {
    button.addEventListener("click", function () {
        let symbol = this.getAttribute("data-symbol");
        if (symbol) {
            resultText += symbol;
        } else if (this.classList.contains("backspace")) {
            resultText = resultText.slice(0, -1);
        }
        updateDisplay();
    });
});

updateDisplay();
