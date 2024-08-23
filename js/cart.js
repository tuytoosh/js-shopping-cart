let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
} else {
    alert("Cart is empty");

    text = "Cart is empty. ";
    document.getElementById("table-container").innerHTML = text;

    let goBack = document.createElement("a");
    goBack.href = "index.html";
    goBack.textContent = "Go back";
    document.getElementById("table-container").appendChild(goBack);
}

let tbody = document.getElementById("tbody");

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)


    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    tbody.appendChild(tr)

}
