"use strict";

const switchButtons = document.getElementsByClassName("actionTypeSwitcher");
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
            });
            break;
        case 1:
            switchButtons[i].addEventListener("click", function() {
                sendDiv.style.display = "inline-block";
                receiveDiv.style.display = "none";
            });
            break;
    }
}