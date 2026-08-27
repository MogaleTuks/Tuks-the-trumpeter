document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.flyer, .card, .story-box, .nav a, .buttons a, .profile-img, .story-image');

  revealTargets.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(16px)';
    element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 120 * index);
  });

  const buttons = document.querySelectorAll('.nav a, .buttons a');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
    });
  });
});
