const container = document.querySelector('.all')

// Array de productos
const product = [
  {
    title: 'Aretes Redondos',
    description: 'Aretes Dorados',
    price: 20000,
    category: "Aretes",
    image: "Imagenes/photo1.png",
    stock:10,    
  },
  {
    title: 'Aretes Concha',
    description: 'Aretes Dorados',
    price: 18000,
    category: "Aretes",
    image: "Imagenes/photo2.png",
    stock:10,   
  },
  {
    title: 'Aretes Ondulato',
    description: 'Aretes Dorados',
    price: 18000,
    category: "Aretes",
    image: "Imagenes/photo3.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Dorados',
    price: 20000,
    category: "Aretes",
    image: "Imagenes/photo4.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Dorados',
    price: 40000,
    category: "Aretes",
    image: "Imagenes/photo5.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Dorados',
    price: 36000,
    category: "Aretes",
    image: "Imagenes/photo6.png",
    stock:10,   
  },


  {
    title: 'Aretes',
    description: 'Aretes Dorados',
    price: 25000,
    category: "Aretes",
    image: "Imagenes/photo7.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Dorados',
    price: 20000,
    category: "Aretes",
    image: "Imagenes/photo8.png",
    stock:10,   
  },


  {
    title: 'Aretes Plateados',
    description: 'Aretes Plateados',
    price: 26000,
    category: "Aretes",
    image: "Imagenes/photo9.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Plateados',
    price: 30000,
    category: "Aretes",
    image: "Imagenes/photo10.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Plateados',
    price: 30000,
    category: "Aretes",
    image: "Imagenes/photo11.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo12.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo13.png",
    stock:10,   
  },
  {
    title: 'Aretes',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo14.png",
    stock:10,   
  },

  {
    title: 'Aretes',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo14.png",
    stock:10,   
  },
  {
    title: 'Aretes Plateados',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo15.png",
    stock:10,   
  }
  ,
  {
    title: 'Aretes Plateados',
    description: 'Aretes Plateados',
    price: 30000,
    category: "Aretes",
    image: "Imagenes/photo16.png",
    stock:10,   
  }


  ,
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo24.png",
    stock:10,   
  }
  ,
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo18.png",
    stock:10,   
  },
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo19.png",
    stock:10,   
  },
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo20.png",
    stock:10,   
  },
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo21.png",
    stock:10,   
  } ,
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo22.png",
    stock:10,   
  } ,
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo23.png",
    stock:10,   
  },
  {
    title: 'Collar',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo24.png",
    stock:10,   
  } ,


  ,
  {
    title: 'Manillas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo25.png",
    stock:10,   
  } ,

  ,
  {
    title: 'Manillas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo26.png",
    stock:10,   
  } ,

  ,
  {
    title: 'Manillas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo27.png",
    stock:10,   
  } ,
  ,
  {
    title: 'Manillas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo28.png",
    stock:10,   
  } ,
  ,
  {
    title: 'Manillas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo29.png",
    stock:10,   
  } ,
  ,
  {
    title: 'Manillas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo30.png",
    stock:10,   
  } ,
];

function makeCard(product) {
  const card = document.createElement('div');
  card.classList.add('card', 'product-card');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('card-img');

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = '';
  img.classList.add('photo');

  imgContainer.appendChild(img);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('card-info');

  const title = document.createElement('p');
  title.classList.add('text-title');
  title.textContent = product.title;

  const description = document.createElement('p');
  description.classList.add('text-body');
  description.textContent = product.description;

  // const stock = document.createElement('p');
  // description.classList.add('text-body', 'stock');
  // stock.textContent = product.stock;

  infoContainer.appendChild(title);
  infoContainer.appendChild(description);

  const footer = document.createElement('div');
  footer.classList.add('card-footer');

  const price = document.createElement('span');
  price.classList.add('text-title', 'price');
  price.textContent = `$${product.price}`;

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('card-button');

  const bagButton = document.createElement('img');
  bagButton.classList.add('bagCards');
  bagButton.setAttribute('data-id', '1');
  bagButton.src = 'Imagenes/bolsa.png';
  bagButton.alt = '';

  buttonContainer.appendChild(bagButton);
  footer.appendChild(price);
  footer.appendChild(buttonContainer);

  card.appendChild(imgContainer);
  card.appendChild(infoContainer);
  card.appendChild(footer);

  card.dataset.category = product.category.toLowerCase();

  container.appendChild(card);
}



window.addEventListener('DOMContentLoaded', () => {
  product.forEach((product) => makeCard(product));
});

const buttons = document.querySelectorAll(".button-value");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.textContent.toLowerCase();

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Agregar botones de filtro ascendente y descendente
const ascendingButton = document.getElementById("sort-ascending");
const descendingButton = document.getElementById("sort-descending");

ascendingButton.addEventListener("click", () => {
  // Ordenar el array de productos en orden ascendente por precio
  product.sort((a, b) => a.price - b.price);

  // Renderizar las tarjetas actualizadas
  renderCards(product);
});

descendingButton.addEventListener("click", () => {
  // Ordenar el array de productos en orden descendente por precio
  product.sort((a, b) => b.price - a.price);

  // Renderizar las tarjetas actualizadas
  renderCards(product);
});

// Añadir la función renderCards
function renderCards(products) {
  // Limpiar el contenedor antes de renderizar los productos
  container.innerHTML = '';

  // Renderizar cada tarjeta de producto
  products.forEach((product) => makeCard(product));
}
