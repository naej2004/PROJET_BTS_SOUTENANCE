document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const totalCars = document.querySelectorAll(".car_").length;

  // Masquer le bouton précédent initialement
  prevButton.style.display = "none";

  nextButton.addEventListener("click", function () {
    if (currentIndex < totalCars - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const carWidth = document.querySelector(".car_").offsetWidth;
    const translateValue = -currentIndex * (carWidth + 20); /* Ajuster la largeur de la voiture + marges */
    carousel.style.transform = `translateX(${translateValue}px)`;
    toggleButtons();
  }

  function toggleButtons() {
    prevButton.style.display = currentIndex === 0 ? "none" : "block";
    nextButton.style.display = currentIndex >= totalCars - 2 ? "none" : "block";
  }
});
