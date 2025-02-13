// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let clickCount = 0;
/*let questions = { "Why No T.T", "Please be My Valentine"};*/
const messages = [
    "Are you sure? 😢",      // Click 1
    "Please reconsider! 🥺", // Click 2
    "Think about it... 😭",  // Click 3
    "I'm heartbroken... 💔", // Click 4
    "Okay, I give up... 😔"  // Click 5
];

function growYes() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");


    if (clickCount < 5) {
        // Increase Yes button size
        let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize * 1.5) + "px"; // Increase size

        if (clickCount < messages.length) {
            // Show rejection messages in the messageBox
            document.getElementById("messageBox").innerText = messages[clickCount];

            // Gradually reveal the hidden text
            const hiddenText = document.getElementById("hiddenMessage");
            hiddenText.style.opacity = clickCount / messages.length;
        }

        clickCount++;
    } else {
        // Move No button to a random position
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
}