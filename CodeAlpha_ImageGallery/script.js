let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;


function openLightbox(img) {

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

    for (let i = 0; i < images.length; i++) {
        if (images[i] === img) {
            currentIndex = i;
            break;
        }
    }
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        images[currentIndex].src;
}

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
        images[currentIndex].src;
}

function filterImages(category) {

    let allImages = document.querySelectorAll(".gallery img");

    allImages.forEach(function (img) {

        if (
            category === "all" ||
            img.classList.contains(category)
        ) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

    });
}