const imageContainers = document.querySelectorAll('.image-container');
const handleImageHover = () => {
  imageContainers.forEach((container) => {
    const animal = container.querySelector('.animal');
    const animalDetails = container.querySelector('.animal-details');
    const learnMore = container.querySelector('.learn-more');
    const image = container.querySelector('img');

    container.addEventListener('mouseenter', () => {
      animal.style.backdropFilter = 'blur(5px)';
      animalDetails.style.transform = 'translateY(10%)';
      image.style.transform = 'scale(1.1)';
      image.style.filter = 'grayscale(100%) brightness(25%)';
      learnMore.style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
      animal.style.backdropFilter = 'none';
      animalDetails.style.transform = 'translateY(40%)';
      image.style.transform = 'scale(1)';
      image.style.filter = 'none';
      learnMore.style.opacity = '0';
    });
  });
};
handleImageHover();
