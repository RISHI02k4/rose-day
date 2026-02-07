const mainBox = document.getElementById("mainBox");

function startFlow() {
    mainBox.innerHTML = `
        <h2>Do you accept the rose from Rishi? 🌹</h2>
        <button onclick="acceptRose()">Yes ❤️</button>
    `;
}

function acceptRose() {
    mainBox.innerHTML = `
        <h2>Do you also want to give a rose to Rishi? 🌹</h2>
        <button onclick="giveRose()">Yes 💕</button>
    `;
}

function giveRose() {
    mainBox.innerHTML = `
        <h2>Rishi is grateful to have you 💖</h2>
        <p>Are you also grateful to have him?</p>
        <button onclick="finalStep()">Yes 😊</button>
    `;
}

function finalStep() {

    // Confetti Effect
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);
    }

    mainBox.innerHTML = `
        <h2>Then call him ☎️</h2>
        <p>If you are busy, text him:</p>
        <h3>"Happy Rose Day ❤️"</h3>
        <br>
        <a href="tel:+91XXXXXXXXXX">
            <button>📱 Call Now</button>
        </a>
    `;
}

/* Confetti falling animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}
`;
document.head.appendChild(style);
