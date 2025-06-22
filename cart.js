var itemCart;
var badge;

function loadCart() {
    itemCart = JSON.parse(localStorage.cartItems || '{"tshirt": 0, "jacket": 0, "waterBottle": 0, "holidayItem": 0}');
    badge = document.getElementById("cart-badge");
    badge.innerHTML = itemCart.tshirt + itemCart.jacket + itemCart.waterBottle + itemCart.holidayItem;
}

function checkoutCart() {
    document.getElementById("t-shirt-amount").innerText = itemCart.tshirt;
    document.getElementById("jacket-amount").innerText = itemCart.jacket;
    document.getElementById("water-amount").innerText = itemCart.waterBottle;
    document.getElementById("holiday-amount").innerText = itemCart.holidayItem;
}

function addToCart(item) {
    switch (item) {
        case "t-shirt":
            itemCart.tshirt++;
            break;
        case "jacket":
            itemCart.jacket++;
            break;
        case "waterBottle":
            itemCart.waterBottle++;
            break;
        case "holidayItem":
            itemCart.holidayItem++;
            break;
    }
    saveCart();
    cartAlert();
}

function clearCart() {
    itemCart = JSON.parse('{"tshirt": 0, "jacket": 0, "waterBottle": 0, "holidayItem": 0}');
    saveCart();
}

function saveCart() {
    localStorage.cartItems = JSON.stringify(itemCart);
    badge.innerText = itemCart.tshirt + itemCart.jacket + itemCart.waterBottle + itemCart.holidayItem;
}