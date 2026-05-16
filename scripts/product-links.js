document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('/product.html')) {
        return;
    }

    const productCards = Array.from(document.querySelectorAll('.card')).filter(card => card.querySelector('.card-title'));

    productCards.forEach(card => {
        card.classList.add('clickable-product-card');

        card.addEventListener('click', function (event) {
            if (event.target.closest('button, a, input, select, label')) {
                return;
            }
            window.location.href = '/product.html';
        });
    });
});