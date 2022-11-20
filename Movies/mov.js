var dar = document.getElementById("darkb");

var tex1 = document.getElementById("tex1");
var tex2 = document.getElementById("tex2");
var tex3 = document.getElementById("tex3");

check();

function check() {
    if (localStorage.getItem("dark-mode") === "true") {
        tex1.style.textShadow = "1px 1px 1px #000000";
        tex2.style.textShadow = "1px 1px 1px #000000";
        tex3.style.textShadow = "1px 1px 1px #000000";
        darkb.src = "img/sun.png";
        document.body.classList.add("dark-mode");
    } else {
        darkb.src = "img/moon.png";
        tex1.style.textShadow = "0px 0px #000000";
        tex1.style.textShadow = "0px 0px #000000";
        tex1.style.textShadow = "0px 0px #000000";
        document.body.classList.remove("dark-mode");
    }
}

dar.onclick = function darP() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        tex1.style.textShadow = "1px 1px 1px #000000";
        tex2.style.textShadow = "1px 1px 1px #000000";
        tex3.style.textShadow = "1px 1px 1px #000000";
        darkb.src = "img/sun.png";
        localStorage.setItem("dark-mode", true);
    } else {
        darkb.src = "img/moon.png";
        tex1.style.textShadow = "0px 0px #000000";
        tex2.style.textShadow = "0px 0px #000000";
        tex3.style.textShadow = "0px 0px #000000";
        localStorage.setItem("dark-mode", false);
    }
}