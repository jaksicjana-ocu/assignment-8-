console.log("script.js connected!");

// Track selections
const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(block => {
    const buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // remove selected style
            buttons.forEach(btn => btn.classList.remove("selected"));

            // add selected style
            button.classList.add("selected");

            // store answer
            block.setAttribute("data-selected", button.dataset.points);
        });
    });
});

// Show result
document.getElementById("show-result").addEventListener("click", displayResult);

function displayResult() {
    let total = 0;

    questionBlocks.forEach(block => {
        const value = block.getAttribute("data-selected");
        if (value) {
            total += parseInt(value);
        }
    });

    let result = "";

    if (total <= 5) {
        result = " Security Awareness Trainer";
    } else if (total <= 8) {
        result = " Security Analyst";
    } else if (total <= 10) {
        result = "  Ethical Hacker";
    } else {
        result = " Cybersecurity Researcher";
    }

    document.getElementById("result-text").textContent = result;

    const container = document.getElementById("result-container");
    container.style.display = "block";
}
