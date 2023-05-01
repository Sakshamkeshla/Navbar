document.getElementById("nav-button").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.add("showpopup");
    document.getElementById("nav-menu").classList.remove("noshowpopup");
});


document.getElementById("nav-close").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.remove("showpopup");
    document.getElementById("nav-menu").classList.add("noshowpopup");
});
