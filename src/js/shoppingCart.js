import {addClass, removeClass} from './utils-class';

const shoppingCart = document.getElementById("shopping-cart");
const cart = ['1','2','3'];
localStorage.setItem("cart", JSON.stringify(cart));

if (shoppingCart) {
    const headerCart = document.getElementById("header-cart");
    const buttons =  shoppingCart.querySelectorAll('button[delete-item]')

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const id = button.attributes['delete-item'].value;

        button.addEventListener('click', function () {  
            shoppingCart.querySelector(`div[data-row='${id}']`).remove();

            const localStorageCart = localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"));
            const foundLocalStorageCart = localStorageCart.indexOf(id);
            if (foundLocalStorageCart > -1) {
                localStorageCart.splice(foundLocalStorageCart, 1);
                localStorage.setItem('cart', JSON.stringify(localStorageCart));
            }
            const emptyText = document.getElementById('cart-empty'); 

            if (localStorageCart.length == 0) {
                removeClass(headerCart, "cart-filled");
                removeClass(emptyText, 'hidden');
            }
        });
    }
} else {
    
}