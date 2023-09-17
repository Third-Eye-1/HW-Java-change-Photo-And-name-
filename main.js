let isImage1 = true;
const alatooImage = document.getElementById("alatooImage");
const header = document.getElementById("header");

function toggleImage() {
    if (isImage1) {
        alatooImage.src = "Banana-Single.jpg"; // Replace with your first image
    } else {
        alatooImage.src = "Ala-Too_International_University_Seal.png"; // Replace with your Alatoo logo image
    }
    isImage1 = !isImage1;
}

function changeHeaderText() {
    const name = prompt("Please enter your name:");
    if (name !== null) {
        header.textContent = `Welcome ${name}`;
    }
}