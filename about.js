const moon = document.getElementById("toggle");
const icon = moon.querySelector("i");
const body = document.querySelector("body");
let currMode = localStorage.getItem("theme") || "white";

// 🌙 Apply saved theme on page load
if (currMode === "dark") {
    body.classList.add("dark");
    body.classList.remove("white");
    icon?.classList.replace("fa-moon", "fa-sun");
} else {
    body.classList.add("white");
    body.classList.remove("dark");
    icon?.classList.replace("fa-sun", "fa-moon");
}

// ☀️ Toggle on click
moon.addEventListener("click", () => {
    if (currMode === "white") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("white");
        icon?.classList.replace("fa-moon", "fa-sun");
    } else {
        currMode = "white";
        body.classList.add("white");
        body.classList.remove("dark");
        icon?.classList.replace("fa-sun", "fa-moon");
    }

    localStorage.setItem("theme", currMode);
});
