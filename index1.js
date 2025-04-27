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
