// script.js

function displayMessage() {
    const para = document.getElementById('messageParagraph');
    para.textContent = "🎉 Congratulations! You've successfully clicked the button. Enjoy exploring the interactive effects and styles.";
    para.classList.add('show-message');
}

document.getElementById('myButton').addEventListener('click', displayMessage);
