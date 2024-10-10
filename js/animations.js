// ======================= ml9 animation ========================

// Wrap every letter in a span
const textWrappersMl9 = document.querySelectorAll('.ml9-letters');
textWrappersMl9.forEach(textWrapper => {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='ml9-letter'>$&</span>"
  );
});

anime
  .timeline({ loop: false })
  .add({
    targets: '.ml9-letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: '.ml9',
    opacity: 100,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });

// ======================= Montu animation ========================

anime.timeline({ loop: false }).add({
  targets: '.montu',
  perspective: 800,
  origin: '50% 0%',
  duration: 5500,
  elasticity: 800,
  delay: function (t, i) {
    return i * 75;
  },
  opacity: {
    value: [0, 1],
    duration: 2000,
    easing: 'linear',
  },
  rotateX: [-90, 0],
});
