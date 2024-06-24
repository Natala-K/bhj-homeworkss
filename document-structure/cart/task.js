document.addEventListener('DOMContentLoaded', () => {
    // Обработка изменения количества товара
    document.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', () => {
            const quantityValueElement = control.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValueElement.textContent);

            if (control.classList.contains('product__quantity-control_dec')) {
                if (quantity > 1) {
                    quantity--;
                }
            } else if (control.classList.contains('product__quantity-control_inc')) {
                quantity++;
            }

            quantityValueElement.textContent = quantity;
        });
    });

    // Обработка добавления товара в корзину
    document.querySelectorAll('.product__add').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productId = product.getAttribute('data-id');
            const productImageSrc = product.querySelector('.product__image').getAttribute('src');
            const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);

            const cartProducts = document.querySelector('.cart__products');
            let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                // Если товар уже есть в корзине, увеличиваем его количество
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + productQuantity;
            } else {
                // Если товара нет в корзине, добавляем его
                cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.setAttribute('data-id', productId);

                const cartProductImage = document.createElement('img');
                cartProductImage.classList.add('cart__product-image');
                cartProductImage.setAttribute('src', productImageSrc);

                const cartProductCount = document.createElement('div');
                cartProductCount.classList.add('cart__product-count');
                cartProductCount.textContent = productQuantity;

                const cartProductRemove = document.createElement('div');
                cartProductRemove.classList.add('cart__product-remove');
                cartProductRemove.textContent = 'Удалить';

                cartProduct.appendChild(cartProductImage);
                cartProduct.appendChild(cartProductCount);
                cartProduct.appendChild(cartProductRemove);
                cartProducts.appendChild(cartProduct);

                // Добавляем обработчик события для удаления товара
                cartProductRemove.addEventListener('click', () => {
                    cartProduct.remove();
                    updateCartVisibility();
                });
            }

            updateCartVisibility();
        });
    });

    // Функция для обновления видимости корзины
    function updateCartVisibility() {
        const cart = document.querySelector('.cart');
        const cartProducts = document.querySelector('.cart__products');
        const hasProducts = cartProducts.querySelector('.cart__product');

        if (hasProducts) {
            cart.style.display = 'block';
        } else {
            cart.style.display = 'none';
        }
    }

    // Инициализация видимости корзины при загрузке страницы
    updateCartVisibility();
});
