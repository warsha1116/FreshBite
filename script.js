// =========================
// FreshBite JavaScript
// =========================

let cartCount = 0;
let totalPrice = 0;

// Add item to cart
function addToCart(foodName, price) {

    cartCount++;
    totalPrice += price;

    // Update navbar cart count
    document.getElementById("cart-count").innerText = cartCount;

    // Update total price
    document.getElementById("total-price").innerText = totalPrice;

    // Create new cart item
    let li = document.createElement("li");
    li.innerHTML = `🍔 ${foodName} - ₹${price}`;

    document.getElementById("cart-items").appendChild(li);

    alert(foodName + " added to cart!");
}

// Clear cart
function clearCart() {

    cartCount = 0;
    totalPrice = 0;

    document.getElementById("cart-count").innerText = 0;
    document.getElementById("total-price").innerText = 0;

    document.getElementById("cart-items").innerHTML = "";

    alert("Cart Cleared Successfully!");
}