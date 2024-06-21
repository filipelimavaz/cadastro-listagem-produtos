"use strict";
var productForm = document.getElementById('productForm');
var productTableBody = document.querySelector('#productTable tbody');
var products = [];
productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('productName').value;
    var description = document.getElementById('productDescription').value;
    var price = parseFloat(document.getElementById('productPrice').value);
    var available = document.getElementById('productAvailable').value === 'sim';
    var newProduct = { name: name, description: description, price: price, available: available };
    products.push(newProduct);
    displayProducts();
    productForm.reset();
});
function displayProducts() {
    productTableBody.innerHTML = '';
    // Ordenar os produtos por valor do menor para o maior
    products.sort(function (a, b) { return a.price - b.price; });
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var priceCell = document.createElement('td');
        nameCell.textContent = product.name;
        priceCell.textContent = "R$".concat(product.price.toFixed(2));
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        productTableBody.appendChild(row);
    });
}
