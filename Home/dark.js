var dar = document.getElementById("darb");

check();

function check() {
    if (localStorage.getItem("dark-mode") === "true") {
        darb.src = "img/sun.png";
        right.src = "img/rightw.png";
        left.src = "img/leftw.png";
        up.src = "img/upw.png";
        user.src = "img/userw.png";
        expl.src = "img/explorew.png";
        home.src = "img/homew.png";
        about.src = "img/aboutw.png";
        document.body.classList.add("dark-mode");
    } else {
        darb.src = "img/moon.png";
        right.src = "img/right.png";
        left.src = "img/left.png";
        up.src = "img/up.png";
        user.src = "img/user.png";
        expl.src = "img/explore.png";
        home.src = "img/home.png";
        about.src = "img/about.png";
        document.body.classList.remove("dark-mode");
    }
}

dar.onclick = function darP() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darb.src = "img/sun.png";
        right.src = "img/rightw.png";
        left.src = "img/leftw.png"
        up.src = "img/upw.png";
        user.src = "img/userw.png";
        expl.src = "img/explorew.png";
        home.src = "img/homew.png";
        about.src = "img/aboutw.png";
        localStorage.setItem("dark-mode", true);
    } else {
        darb.src = "img/moon.png";
        right.src = "img/right.png";
        left.src = "img/left.png";
        up.src = "img/up.png";
        user.src = "img/user.png";
        expl.src = "img/explore.png";
        home.src = "img/home.png";
        about.src = "img/about.png";
        localStorage.setItem("dark-mode", false);
    }
}




