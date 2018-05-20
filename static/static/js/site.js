(function(window) {
'use strict';

var sideMenu = document.getElementById("side-menu-list");
var navbar = document.getElementById("side-menu");
var toggleBtn = document.getElementById("side-menu-btn");
var body = document.body;

toggleBtn.addEventListener("click",function() {
    if (body.classList.contains("side-menu-activate")) {
        body.classList.remove("side-menu-activate");
        navbar.classList.remove("left240");
        sideMenu.classList.remove("left0");
        toggleBtn.innerHTML = "Menu";
    } else {
        body.classList.add("side-menu-activate");
        navbar.classList.add("left240");
        sideMenu.classList.add("left0");
        toggleBtn.innerHTML = "Close";
    }
})

})();