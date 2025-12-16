const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.catalog-products .card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;

      card.classList.remove('show');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        card.classList.add('show');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
