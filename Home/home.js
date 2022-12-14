
{
    
    const dar = document.getElementById("dark");
    const closeBtn = document.getElementById("settings2")
    const settingsbtn = document.getElementById("settings");
    const AboutClose = document.getElementById("AboutBack");
    const AboutOpen = document.getElementById("AboutUsOpen");
    let settingsPage = document.querySelector(".vSettingsOverlay");
    let AboutUsPage = document.querySelector(".AboutUS");


    check();

    function check() {
        if (localStorage.getItem("dark-mode") === "true") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };

    dar.onclick = function darP() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", true);
        } else {
            localStorage.setItem("dark-mode", false);
        }
    };

    function settings() {
        settingsPage.classList.toggle("vSettingsOverlay")
        settingsPage.classList.toggle("settingsOverlay")
    };

    function AboutUsss() {
        AboutUsPage.classList.toggle("AboutUS")
        AboutUsPage.classList.toggle("vAboutUS")
    };

    closeBtn.addEventListener('click', () => {
        settings();
    });

    settingsbtn.addEventListener('click', () => {
        settings();
    });

    AboutClose.addEventListener('click', () => {
        AboutUsss();
    })

    AboutOpen.addEventListener('click', () => {
        AboutUsss();
    })

}


