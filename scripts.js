// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select elements you want to animate on scroll
  const elementsToAnimate = document.querySelectorAll(
    "#hero .hero-content, " +
    "#app-image img, " +
    "#features .feature-container, " +
    "#presets .preset-container, " +
    "#about, " +
    "#contact"
  );

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach(entry => {
        // When the element is in view, add the 'in-view' class
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Optionally, unobserve the element if you want the animation to trigger only once
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2 // Trigger when 20% of the element is visible...
    }
  );

  // Observe each selected element
  elementsToAnimate.forEach(el => observer.observe(el));
});
