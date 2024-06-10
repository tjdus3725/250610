const box = document.querySelector("div#box-ani");

document.querySelector("#start").addEventListener("click", function () {
    box.style.animationPlayState = "running";
});
document.querySelector("#pause").addEventListener("click", function () {
    box.style.animationPlayState = "paused";
});
