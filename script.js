function scrollGallery(){

    document.getElementById("gallery").scrollIntoView({

        behavior:"smooth"

    });

}const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

cartButton.addEventListener("click", function (event) {
    event.preventDefault();
    cartPanel.classList.add("open");
});

closeCart.addEventListener("click", function () {
    cartPanel.classList.remove("open");
});