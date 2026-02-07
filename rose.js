const mainBox = document.getElementById("mainBox");

/* 🎵 Play Music (Mobile Safe) */
function playMusic(){
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("User interaction required");
    });
}

function startExperience(){
    playMusic();
    askAccept();
}

/* 💌 Intro */
function intro(){
    mainBox.innerHTML = `
        <h2>Hello Kriti 💌</h2>
        <p>My name is <b>Miss Dopamin</b>.</p>
        <p>I was created by Rishi to deliver something special to you today.</p>
        <p>He may not be standing in front of you right now…</p>
        <p>But his feelings are.</p>
        <button onclick="startExperience()">Continue</button>
    `;
}

/* 🌹 Accept Question */
function askAccept(){
    mainBox.innerHTML = `
        <h2>Kriti ❤️</h2>
        <p>Do you accept roses from Rishi?</p>
        <button onclick="showNote()">Yes 🌹</button>
    `;
}

/* 💖 Emotional Note */
function showNote(){
    mainBox.innerHTML = `
        <h2>A Note From Rishi</h2>
        <p>Hi Kriti,</p>
        <p>I know it’s been a long time since we truly spoke.</p>
        <p>Maybe distance happened. Maybe silence happened.</p>
        <p>I don’t know what changed between us.</p>
        <p>But today, I didn’t want another special day to pass without telling you something.</p>
        <p>I imagined giving you a rose in person — seeing your smile.</p>
        <p>Since you’re not here, I’m sending it in the only way I can.</p>
        <p>This is the first time I’m giving a rose to someone who genuinely matters to me.</p>
        <p>Happy Rose Day to the only girl in this universe I truly admire. 🌹</p>
        <button onclick="giveRose()">Do you accept this rose?</button>
    `;
}

/* 🌹 Boy gives rose */
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

/* 🌹 Girl gives rose back */
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

/* 💕 Grateful */
function grateful(){
    mainBox.innerHTML = `
        <h2>Rishi is grateful to have you 💖</h2>
        <p>Are you also grateful to have him?</p>
        <button onclick="final()">Yes 😊</button>
    `;
}

/* ☎️ Final */
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
