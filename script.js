function scrollGallery(){

    document.getElementById("gallery").scrollIntoView({

        behavior:"smooth"

    });
}
const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

if (cartButton && cartPanel) {
    cartButton.addEventListener("click", function (event) {
        event.preventDefault();
        cartPanel.classList.add("open");
        renderCart();
    });
}

if (closeCart && cartPanel) {
    closeCart.addEventListener("click", function () {
        cartPanel.classList.remove("open");
    });
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    const cart = JSON.parse(localStorage.getItem("sandyArveCart")) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {

        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-item-details">

                    <strong>${item.name}</strong>

                    <p>Size: ${item.size}</p>

                    <p>£${item.price.toFixed(2)}</p>

                    <div class="cart-quantity">
                        <button onclick="changeQuantity(${index}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>

                    <button
                        class="remove-item"
                        onclick="removeCartItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    cartItems.innerHTML += `
        <div class="cart-summary">
            <span>Subtotal</span>
            <strong>£${subtotal.toFixed(2)}</strong>
        </div>
    `;
}