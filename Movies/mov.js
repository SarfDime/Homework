var dar = document.getElementById("darkb");

check();

function check() {
    if (localStorage.getItem("dark-mode") === "true") {
        darkb.src = "img/sun.png";
        document.body.classList.add("dark-mode");
    } else {
        darkb.src = "img/moon.png";
        document.body.classList.remove("dark-mode");
    }
}

dar.onclick = function darP() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkb.src = "img/sun.png";
        localStorage.setItem("dark-mode", true);
    } else {
        darkb.src = "img/moon.png";
        localStorage.setItem("dark-mode", false);
    }
}