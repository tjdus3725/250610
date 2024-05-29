const box = document.querySelector("div#ani3");

document.querySelector("#start").addEventListener("click", function () {
    box.style.animationPlayState = "running";
});
document.querySelector("#paused").addEventListener("click", function () {
    box.style.animationPlayState = "paused";
})