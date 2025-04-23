const moon = document.getElementById("moon");
const body = document.querySelector("body");
let currMode = localStorage.getItem("theme") || "light";

// 🌙 Apply saved theme on page load
if (currMode === "dark") {
    body.classList.add("dark");
    moon.querySelector("i").classList.replace("fa-moon", "fa-sun");
} else {
    body.classList.add("light");
    moon.querySelector("i").classList.replace("fa-sun", "fa-moon");
}
// ☀️ Toggle on click
moon.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        moon.querySelector("i").classList.replace("fa-moon", "fa-sun");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        moon.querySelector("i").classList.replace("fa-sun", "fa-moon");
    }
