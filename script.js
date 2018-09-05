"use strict";

const switchButtons = document.getElementsByClassName("actionTypeSwitcher");
const mainContent = document.getElementById("mainContent");
const sendDiv = document.getElementById("sendDiv");
const receiveDiv = document.getElementById("receiveDiv");
const ioArea = document.getElementById("ioArea");

document.getElementById("fileInput").addEventListener("change", function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        ioArea.value = reader.result
    };
    reader.readAsDataURL(file);
});

document.getElementById("toImgButton").addEventListener("click", function() {
    const image = new Image();
    image.src = ioArea.value;
    document.body.appendChild(image);
});

for (let i = 0; i < switchButtons.length; i++) {
    switch (i) {
        case 0:
            switchButtons[i].addEventListener("click", function() {
                sendDiv.style.display = "none";
                receiveDiv.style.display = "inline-block";
                mainContent.style.backgroundColor = "#663399";
            });
            break;
        case 1:
            switchButtons[i].addEventListener("click", function() {
                sendDiv.style.display = "inline-block";
                receiveDiv.style.display = "none";
                mainContent.style.backgroundColor = "#FF4500";
            });
            break;
    }
}

if (navigator.serviceWorker.controller) {
    console.log("[SW Installer] Active service worker found, no need to register");
} else {
    //Register the ServiceWorker
    navigator.serviceWorker.register("sw.js", {
        scope: "./"
    }).then(function(reg) {
        console.log("[SW Installer] Service worker has been registered for scope: "+ reg.scope);
    });
}