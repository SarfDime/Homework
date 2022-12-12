const dar = document.getElementById("dark");
let settingsbtn = document.getElementById("settings");
let settingsPage = document.querySelector(".vSettingsOverlay")
let backbtn = document.getElementById("settings2")

check();

function check() {
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

dar.onclick = function darP() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", true);
    } else {
        localStorage.setItem("dark-mode", false);
    }
}

function log() {
    console.log("dime")
}

function settings() {
    settingsPage.classList.toggle("vSettingsOverlay")
    settingsPage.classList.toggle("settingsOverlay")
}

backbtn.addEventListener('click', () => {
    settings();
    log();

});

settingsbtn.addEventListener('click', () => {
    settings();
    log();
    back();

});





