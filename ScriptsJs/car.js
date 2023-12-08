let allProductos = [];

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('visible');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.all');
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');

// Load cart data from localStorage when the script starts
const loadLocal = () => {
    const savedCart = JSON.parse(localStorage.getItem('carrito'));
    if (savedCart) {
        allProductos = savedCart;
        showHTML();
    }
};

// Save cart data to localStorage
const saveLocal = () => {
    localStorage.setItem('carrito', JSON.stringify(allProductos));
};

// Show HTML function
const showHTML = () => {
    rowProduct.innerHTML = '';
    let total = 0;
    let totalOfProducts = 0;

    if (!allProductos.length) {
        // ... (existing code for an empty cart)
    } else {
        allProductos.forEach((product) => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');

            containerProduct.innerHTML = `
                <div class="info-cart-product">
                    <img class="info-photo" src="${product.Image}" alt="">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">${product.price}</span>
                    <button class="btn-increase">+</button>
                    <button class="btn-decrease">-</button>
                    <img class="icon-close" src="Imagenes/papelera.png" alt="">
                </div>
            `;

            rowProduct.appendChild(containerProduct);

            total += parseInt(product.quantity * product.price.slice(1));
            totalOfProducts += product.quantity;
        });

        document.querySelector('.cart-total').classList.remove('hidden');
        document.querySelector('.total-pagar').innerText = `$${total} `;
    }

    valorTotal.innerText = `$${total} `;
    countProducts.innerText = totalOfProducts;

    // Save cart data after modifying it
    saveLocal();
};

productsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('bagCards')) {
        const product = e.target.closest('.card');

        const infoProduct = {
            quantity: 1,
            Image: product.querySelector('.card img').src,
            title: product.querySelector('.card-info .text-title').textContent,
            description: product.querySelector('.card-info .text-body').textContent,
            price: product.querySelector('.card-footer span').textContent,
        };

        const exists = allProductos.some(
            (product) => product.title === infoProduct.title
        );

        if (exists) {
            const products = allProductos.map((product) => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                }
                return product;
            });
            allProductos = [...products];
        } else {
            allProductos = [...allProductos, infoProduct];
        }

        showHTML(); // Call showHTML here to update the UI after adding a new product
    }
});

// Aumentar y disminuir


rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const imageSrc = product.querySelector('.info-photo').getAttribute('src');

        allProductos = allProductos.filter(
            existingProduct => existingProduct.Image !== imageSrc
        );
        console.log(allProductos);
        showHTML();
    }

    // Incrementar cantidad
    if (e.target.classList.contains('btn-increase')) {
        const product = e.target.closest('.info-cart-product');
        const title = product.querySelector('.titulo-producto-carrito').textContent;

        allProductos = allProductos.map(existingProduct => {
            if (existingProduct.title === title) {
                existingProduct.quantity++;
            }
            return existingProduct;
        });

        showHTML();
    }

    // Disminuir cantidad
    if (e.target.classList.contains('btn-decrease')) {
        const product = e.target.closest('.info-cart-product');
        const title = product.querySelector('.titulo-producto-carrito').textContent;

        allProductos = allProductos.map(existingProduct => {
            if (existingProduct.title === title) {
                existingProduct.quantity = Math.max(1, existingProduct.quantity - 1);
            }
            return existingProduct;
        });

        showHTML();
    }
});

// Call loadLocal when the script starts
loadLocal();

const clearCartButton = document.querySelector('.clear-cart');

clearCartButton.addEventListener('click', () => {
    // Limpiar el arreglo de productos del carrito
    allProductos = [];

    // Actualizar la interfaz de usuario
    showHTML();
});
