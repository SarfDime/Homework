// This one is for back to top

const navs = document.querySelector(".der")

const tops = document.querySelector(".btb")

function callback(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            tops.classList.add("btbv");
        } else {
            tops.classList.remove("btbv");
        }
    });
}

let observer = new IntersectionObserver(callback)

observer.observe(navs)

// This one is for the photos

const photos = document.querySelectorAll(".phot")

const observer2 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("photV", entry.isIntersecting)
            if (entry.isIntersecting) observer2.unobserve(entry.target)
        })
    },
    {
        rootMargin: "300px",
    }
)

photos.forEach(photo => {
    observer2.observe(photo)
})


let a;
let b;


function calculate(){
    area = a * b;
    return area;
}

