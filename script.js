const observerFee = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.remove('gradient-fee');
          entry.target.classList.add('gradient-fee__fade-in');
      }
  });
}, { threshold: .5 });

if(document.querySelector('.section__banner')) {
  observerFee.observe(document.querySelector('.section__banner'));
}