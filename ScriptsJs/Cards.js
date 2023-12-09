const container = document.querySelector('.all')

// Array de productos de la pagina web
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
    title: 'Arete Hueso',
    description: 'Aretes Dorados',
    price: 20000,
    category: "Aretes",
    image: "Imagenes/photo4.png",
    stock:10,   
  },
  {
    title: 'Aretes Cadena',
    description: 'Aretes Dorados',
    price: 40000,
    category: "Aretes",
    image: "Imagenes/photo5.png",
    stock:10,   
  },
  {
    title: 'Aretes Gota de Agua',
    description: 'Aretes Dorados',
    price: 36000,
    category: "Aretes",
    image: "Imagenes/photo6.png",
    stock:10,   
  },


  {
    title: 'Aretes Corazon',
    description: 'Aretes Dorados',
    price: 25000,
    category: "Aretes",
    image: "Imagenes/photo7.png",
    stock:10,   
  },
  {
    title: 'Aretes Aro',
    description: 'Aretes Dorados',
    price: 20000,
    category: "Aretes",
    image: "Imagenes/photo8.png",
    stock:10,   
  },


  {
    title: 'Aretes laso',
    description: 'Aretes Plateados',
    price: 26000,
    category: "Aretes",
    image: "Imagenes/photo9.png",
    stock:10,   
  },
  {
    title: 'Aretes Agollados',
    description: 'Aretes Plateados',
    price: 30000,
    category: "Aretes",
    image: "Imagenes/photo10.png",
    stock:10,   
  },
  {
    title: 'Aretes Argollado Mini',
    description: 'Aretes Plateados',
    price: 30000,
    category: "Aretes",
    image: "Imagenes/photo11.png",
    stock:10,   
  },
  {
    title: 'Aretes Conchas',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo12.png",
    stock:10,   
  },
  {
    title: 'Aretes Nudo',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo13.png",
    stock:10,   
  },
  {
    title: 'Aretes Nudo Mini',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo14.png",
    stock:10,   
  },

  {
    title: 'Aretes Nudo Mini',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo14.png",
    stock:10,   
  },
  {
    title: 'Aretes Arco',
    description: 'Aretes Plateados',
    price: 28000,
    category: "Aretes",
    image: "Imagenes/photo15.png",
    stock:10,   
  }
  ,
  {
    title: 'Candongas Perlas',
    description: 'Aretes Plateados',
    price: 30000,
    category: "Aretes",
    image: "Imagenes/photo16.png",
    stock:10,   
  }


  ,
  {
    title: 'Collar Perlas Blancas',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo24.png",
    stock:10,   
  }
  ,
  {
    title: 'Collar Perlas Doradas',
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
    title: 'Collar De piedras',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo20.png",
    stock:10,   
  },
  {
    title: 'Collar Cadena Perlas',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo21.png",
    stock:10,   
  } ,
  {
    title: 'Collar Esmeraldas',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo22.png",
    stock:10,   
  } ,
  {
    title: 'Collar Perlas Mini',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo23.png",
    stock:10,   
  },
  {
    title: 'Collar Perlas y Cadena',
    description: 'Collar',
    price: 30000,
    category: "Collares",
    image: "Imagenes/photo24.png",
    stock:10,   
  } ,


  ,
  {
    title: 'Manillas Perlas Blancas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo25.png",
    stock:10,   
  } ,

  ,
  {
    title: 'Manillas Mini Perlas',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo26.png",
    stock:10,   
  } ,

  ,
  {
    title: 'Manillas Cristo',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo27.png",
    stock:10,   
  } ,
  ,
  {
    title: 'Manillas Lazo De amor',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo28.png",
    stock:10,   
  } ,
  ,
  {
    title: 'Manillas Perlas ',
    description: 'Manilla',
    price: 30000,
    category: "Manillas",
    image: "Imagenes/photo29.png",
    stock:10,   
  } ,
  ,
  {
    title: 'Manillas De perlas',
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
