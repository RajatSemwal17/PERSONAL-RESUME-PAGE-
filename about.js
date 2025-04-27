// 🌙 Get references to DOM elements
const moon = document.getElementById("toggle"); // Button used to toggle the theme
const icon = moon.querySelector("i");           // Icon inside the toggle button (moon/sun)
const body = document.querySelector("body");    // The <body> element to apply themes

// 💾 Get saved theme from localStorage, or default to "white"
let currMode = localStorage.getItem("theme") || "white";

// 🎨 Apply the saved theme on page load
if (currMode === "dark") {
    body.classList.add("dark");                // Add dark mode class to body
    body.classList.remove("white");            // Remove white mode class (if present)
    icon?.classList.replace("fa-moon", "fa-sun"); // Change icon to sun for dark mode
} else {
    body.classList.add("white");               // Add white mode class to body
    body.classList.remove("dark");             // Remove dark mode class (if present)
    icon?.classList.replace("fa-sun", "fa-moon"); // Change icon to moon for light mode
}

// 🔄 Add click event listener to toggle button
moon.addEventListener("click", () => {
    // Toggle between white and dark mode
    if (currMode === "white") {
        currMode = "dark";                     // Set current mode to dark
        body.classList.add("dark");            // Apply dark mode styles
        body.classList.remove("white");        // Remove white mode styles
        icon?.classList.replace("fa-moon", "fa-sun"); // Change icon to sun
    } else {
        currMode = "white";                    // Set current mode to white
        body.classList.add("white");           // Apply white mode styles
        body.classList.remove("dark");         // Remove dark mode styles
        icon?.classList.replace("fa-sun", "fa-moon"); // Change icon to moon
    }

    // 💾 Save the updated theme to localStorage
    localStorage.setItem("theme", currMode);
});
