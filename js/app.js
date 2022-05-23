let count = 0;
let sum = 0;
let cart = {};

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();

let btns = document.querySelectorAll(".products button");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);

    // id = btn.dataset.id;
    // if (cart.indexOf(id) >= 0) {
    //     btn.className = "added";
    //     btn.textContent = "Remove";
    // }
}

function add(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count++;
    sum += price;

    console.log(cart);

    // let index = cart.indexOf(event.target.dataset.id);
    // if (index >= 0) {
    //     cart.splice(index, 1);
    //     count--;
    //     sum -= price;
    //     event.target.className = "";
    //     event.target.textContent = "Add to cart";
    // } else {
    //     cart.push(event.target.dataset.id);
    //     count++;
    //     sum += price;
    //     event.target.className = "added";
    //     event.target.textContent = "Remove";
    // }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    document.getElementById("sum").textContent = sum;
    document.getElementById("count").textContent = count;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}
