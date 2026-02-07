const mainBox = document.getElementById("mainBox");

function intro(){
    mainBox.innerHTML = `
        <h2>Hello Kriti 💌</h2>
        <p>My name is <b>Miss Dopamin</b>.</p>
        <p>I was specially created by Rishi to carry a message for you this Rose Day 🌹</p>
        <p>He may not be standing in front of you right now…</p>
        <p>But his feelings are.</p>
        <button onclick="askAccept()">Continue</button>
    `;
}

function askAccept(){
    mainBox.innerHTML = `
        <h2>Kriti ❤️</h2>
        <p>Do you accept roses from Rishi?</p>
        <button onclick="showNote()">Yes 🌹</button>
    `;
}

function showNote(){
    mainBox.innerHTML = `
        <h2>A Note From Rishi</h2>
        <p>Hi Kriti,</p>
        <p>I know it’s been a long time since we saw each other.</p>
        <p>Maybe life created distance… maybe silence did.</p>
        <p>I don’t know what changed between us.</p>
        <p>But today, on Rose Day, I didn’t want the silence to win.</p>
        <p>I had imagined giving you a rose in person — seeing your reaction, your smile.</p>
        <p>But since you’re not here, I’m sending it in the only way I can.</p>
        <p>This is the first time I’m giving a rose to someone who truly matters to me.</p>
        <p>Happy Rose Day to the only girl in this universe I genuinely admire. 🌹</p>
        <button onclick="giveRose()">Do you accept this rose?</button>
    `;
}

function giveRose(){
    mainBox.innerHTML = `
        <div class="scene">
            <div class="boy">🙋‍♂️</div>
            <div class="girl">👩</div>
            <div class="rose moveRose">🌹</div>
        </div>
        <p>Rishi is giving you a rose...</p>
        <button onclick="returnRose()">Accept ❤️</button>
    `;
}

function returnRose(){
    mainBox.innerHTML = `
        <div class="scene">
            <div class="boy">🙋‍♂️</div>
            <div class="girl">👩</div>
            <div class="rose returnRose">🌹</div>
        </div>
        <p>Do you also want to give a rose to Rishi?</p>
        <button onclick="grateful()">Yes 🌹</button>
    `;
}

function grateful(){
    mainBox.innerHTML = `
        <h2>Rishi is grateful to have you 💖</h2>
        <p>Are you also grateful to have him?</p>
        <button onclick="final()">Yes 😊</button>
    `;
}

function final(){
    mainBox.innerHTML = `
        <h2>Then call him ☎️</h2>
        <p>If you are busy, just text him:</p>
        <h3>"Happy Rose Day ❤️"</h3>
        <a href="tel:+91XXXXXXXXXX">
            <button>📱 Call Now</button>
        </a>
    `;
}

intro();
