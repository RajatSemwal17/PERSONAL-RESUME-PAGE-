// Get the moon icon element (used for toggling theme)
const moon = document.getElementById("toggle");

// Get the <body> element to apply theme classes
const body = document.querySelector("body");

// Retrieve the saved theme from localStorage or default to "light"
let currMode = localStorage.getItem("theme") || "light";

// 🌙 Apply the saved or default theme on page load
if (currMode === "dark") {
    // If the theme is dark, add the "dark" class to the body
    body.classList.add("dark");

    // Change the icon from moon to sun (indicating dark mode is active)
    moon.querySelector("i").classList.replace("fa-moon", "fa-sun");
} else {
    // If the theme is light, add the "light" class to the body
    body.classList.add("light");

    // Change the icon from sun to moon (indicating light mode is active)
    moon.querySelector("i").classList.replace("fa-sun", "fa-moon");
}
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

    localStorage.setItem("theme", currMode); // 💾 Save preference
    console.log(currMode);
});
