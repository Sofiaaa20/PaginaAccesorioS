document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const taskForm = document.getElementById('taskForm');
  const container = document.querySelector('.all');

  function dragStart() {
    draggedCard = this;
    setTimeout(() => (this.style.display = 'none'), 0);
  }

  function dragEnd() {
    draggedCard.style.display = 'block';
    draggedCard = null;
  }

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = document.getElementById('newProduct').value.trim();
    const productDescription = document.getElementById('newDescripcion').value.trim();
    const productPrice = document.getElementById('newPrecio').value.trim();
    const imageUrl = document.getElementById('newImageUrl').value.trim();
    const imageUpload = document.getElementById('imageUpload');

    if (productName === '') return;

    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');

    const img = document.createElement('img');
    img.src = imageUrl || (imageUpload.files[0] ? URL.createObjectURL(imageUpload.files[0]) : 'Imagenes/photo1.png');
    img.alt = '';
    img.classList.add('photo');
    cardImg.appendChild(img);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const title = document.createElement('p');
    title.classList.add('text-title');
    title.textContent = productName;

    const body = document.createElement('p');
    body.classList.add('text-body');
    body.textContent = productDescription;

    cardInfo.appendChild(title);
    cardInfo.appendChild(body);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const price = document.createElement('span');
    price.classList.add('text-title', 'price');
    price.textContent = '$' + productPrice;

    const cardButton = document.createElement('div');
    cardButton.classList.add('card-button');

    const bagImg = document.createElement('img');
    bagImg.classList.add('bagCards');
    bagImg.setAttribute('data-id', '1'); // Cambia esto según tus necesidades
    bagImg.src = 'Imagenes/bolsa.png'; // Cambia esto por la ruta real de la imagen
    bagImg.alt = '';

    cardButton.appendChild(bagImg);
    cardFooter.appendChild(price);
    cardFooter.appendChild(cardButton);

    newCard.appendChild(cardImg);
    newCard.appendChild(cardInfo);
    newCard.appendChild(cardFooter);

    container.appendChild(newCard);

    newCard.addEventListener('dragstart', dragStart);
    newCard.addEventListener('dragend', dragEnd);

    // Limpiar el formulario y cerrar el modal
    document.getElementById('newProduct').value = '';
    document.getElementById('newDescripcion').value = '';
    document.getElementById('newPrecio').value = '';
    document.getElementById('newImageUrl').value = '';
    imageUpload.value = ''; // Limpiar el input de carga de imagen
    modal.style.display = 'none';
  });
});

