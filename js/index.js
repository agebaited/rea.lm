let transitionActive = false;
var song = document.getElementById("song");
var current_page = "main";


//PAGE LOADING


function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector('.display-text');
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const memberButtons = document.getElementById("member-container");
            const mainButtons = document.getElementById("main-container");
            memberButtons.style.display = "flex";
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                memberButtons.style.transition = "opacity 1s ease-in-out";
                memberButtons.style.opacity = 1;
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);
    
    song.volume = 0;
    song.playbackRate = 0.85;
    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.7) {
            song.volume = 0.7;
            clearInterval(fadeInInterval);
        }
    }, 350);

    setTimeout(startHome, 1000);
};


//MEMBER BUTTONS


function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@reaLM; " + user;
        pfpImage.src = pfpSrc;
        pfpImage.classList.add("circular-icon"); // Ensure circular styling

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@reaLM; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;
        pfpImage.classList.add("circular-icon"); // Ensure circular styling

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function revv() {
    memberCall(
        "assets/revv_icon.png",
        "<a href='https://discord.com/users/1205224540272205866' target='_blank' style='color: white;'>discord</a>, <a href='https://t.me/revvs' target='_blank' style='color: white;'>telegram</a>",
        "revv"
    );
}

function threat() {
    memberCall(
        "assets/threat_icon.png",
        "<a href='https://discord.com/users/1258522791909527663' target='_blank' style='color: white;'>discord</a>, <a href='https://t.me/pholcodine' target='_blank' style='color: white;'>telegram</a>",
        "threat"
    );
}

function val() {
    memberCall(
        "assets/val_icon.png",
        "<a href='https://discord.com/users/526401999298756613' target='_blank' style='color: white;'>discord</a>, <a href='https://t.me/disloyalist' target='_blank' style='color: white;'>telegram</a>",
        "val"
    );
}

function lego() {
    memberCall(
        "assets/lego_gif.gif",
        "<a href='https://discord.com/users/944666961743343639' target='_blank' style='color: white;'>discord</a>, <a href='https://github.com/JellyLovesYou' target='_blank' style='color: white;'>github</a>",
        "lego"
    );
}


// CORE BUTTONS

function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@reaLM; " + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@reaLM; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function updatePage(htmlContent, pageTitle) {
    if (transitionActive) return;
    transitionActive = true;
    document.title = "@reaLM; " + pageTitle;
    const displayText = document.querySelector(".display-text");

    if (current_page !== "main") {
        current_page = "main";
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.opacity = 0;
        randomGif.style.display = "block";
        randomGif.style.opacity = 1;
        displayText.innerHTML = htmlContent;
        pfpImage.style.display = "none";
        displayText.style.opacity = 1;

        transitionActive = false;
    } else {
        displayText.innerHTML = htmlContent;
        transitionActive = false;
    }
}

function about() {
    updatePage(
        "<a href='https://discord.gg/horrible' target='_blank' style='color: white;'>@reaLM</a> is a cyber collective with a primary focus on coding and various other digital endeavors.",
        "about"
    );
}



function discord() {
    window.open("https://discord.gg/horrible", "_blank");
}


//OTHER


function getRandomSentence() {
    const sentences = [
        "@ <a href='https://discord.gg/horrible' target='_blank' style='color: white;'>@realm</a>, a collective"
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [
    "arceus.gif",
    "darkrai.gif",
    "gengar.gif",
    "giratina.gif",
    "groudon.gif",
    "kyogre.gif",
    "palkia.gif",
    "rayquaza.gif",
    ];

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "assets/" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function(button) {
        button.setAttribute("data-gif", currentGif);
    });
}

