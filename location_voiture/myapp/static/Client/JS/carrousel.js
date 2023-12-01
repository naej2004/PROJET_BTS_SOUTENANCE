document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let counter = 0;

  prevButton.addEventListener('click', () => {
    counter = Math.max(0, counter - 1);
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    counter = Math.min(3, counter + 1);
    updateCarousel();
  });

  function updateCarousel() {
    container.style.transform = `translateX(${-counter * 100}%)`;
  }
});
