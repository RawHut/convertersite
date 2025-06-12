// script.js

// Simple image carousel behavior (autoplay + loop)
let carouselIndex = 0;
function rotateCarousel() {
  const images = document.querySelectorAll(".carousel img");
  images.forEach((img, i) => {
    img.style.display = i === carouselIndex ? "block" : "none";
  });
  carouselIndex = (carouselIndex + 1) % images.length;
}
setInterval(rotateCarousel, 3000); // Rotate every 3s
rotateCarousel();

// Scroll to About section when CTA clicked (also handled inline in HTML)
function showAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// (Optional) Dark mode switch
// function toggleDarkMode() {
//   document.body.classList.toggle("dark");
// }
