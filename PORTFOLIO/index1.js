let Mode = document.getElementById("btn");
const body = document.querySelector("body");


let currMode = localStorage.getItem("mode","light");

if (currMode === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  Mode.src = "dark.png";
} else {
  body.classList.add("light");
  body.classList.remove("dark");
  Mode.src = "white.png";
}

Mode.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        Mode.src = "dark.png";
        localStorage.setItem("mode", "dark");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        Mode.src = "white.png";
        localStorage.setItem("mode", "light");
    }
});


// ReachOut click handler
let reachOut = document.querySelector("#reachOut");
reachOut.addEventListener("click", () => {
    location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=rajatsemwal17@gmail.com";
});


const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu-active");
});

