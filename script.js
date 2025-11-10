const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightbox.classList.add("active");
  lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Filter Function
function filterGallery(category) {
  const allButtons = document.querySelectorAll(".filter-buttons button");
  allButtons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
