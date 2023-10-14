
const btnToggle = document.querySelector("#btn-toggle");

var Toggle = true;

btnToggle.addEventListener("click", () => {
    if (Toggle === true) {
        btnToggle.classList.toggle('nav_links')
    }
    else {
        console.log("click");
    }
})