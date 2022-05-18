let count = 0;
let sum = 0;

let cart = [];

let btns = document.querySelectorAll(".products button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", add);
}

function add(event) {
    let price = Number(event.target.dataset.price);

    let index = cart.indexOf(event.target.dataset.id);
    console.log(cart, index);
    if (index >= 0) {
        cart.splice(index, 1)
        count--;
        sum -= price;
        event.target.className = "";
        event.target.textContent = "Add to cart";
    } else {
        cart.push(event.target.dataset.id);
        count++;
        sum += price;
        event.target.className = "added";
        event.target.textContent = "Remove";
    }
    updateCart();
}

function updateCart() {
    document.getElementById("sum").textContent = sum;
    document.getElementById("count").textContent = count;
}
