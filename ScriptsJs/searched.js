const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterProducts);

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  // Ocultar todas las tarjetas
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.style.display = 'none';
  });

  // Mostrar solo las tarjetas que coinciden con el término de búsqueda
  product.forEach((product, index) => {
    const title = product.title.toLowerCase();
    const card = document.querySelector(`.card:nth-child(${index + 1})`);
    //const all = document.querySelector('.all');

    if (title.includes(searchTerm)) {
      card.style.display = 'flex';
      
    }
  });
}