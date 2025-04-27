document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-btn");

    expandButtons.forEach(button => {
        button.addEventListener("click", function () {
            const moreInfo = this.nextElementSibling;
            moreInfo.classList.toggle("show");

    
            if (moreInfo.classList.contains("show")) {
                this.textContent = "Show Less ⬆";
            } else {
                this.textContent = "Show More ⬇";
            }
        });
    });
});
