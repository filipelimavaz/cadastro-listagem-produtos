interface Product {
    name: string;
    description: string;
    price: number;
    available: boolean;
}

const productForm = document.getElementById('productForm') as HTMLFormElement;
const productTableBody = document.querySelector('#productTable tbody') as HTMLTableSectionElement;

const products: Product[] = [];

productForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('productName') as HTMLInputElement).value;
    const description = (document.getElementById('productDescription') as HTMLInputElement).value;
    const price = parseFloat((document.getElementById('productPrice') as HTMLInputElement).value);
    const available = (document.getElementById('productAvailable') as HTMLSelectElement).value === 'sim';

    const newProduct: Product = { name, description, price, available };
    products.push(newProduct);

    displayProducts();
    productForm.reset();
});

function displayProducts() {
    productTableBody.innerHTML = '';

    products.sort((a, b) => a.price - b.price);

    products.forEach((product) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');

        nameCell.textContent = product.name;
        priceCell.textContent = `R$${product.price.toFixed(2)}`;

        row.appendChild(nameCell);
        row.appendChild(priceCell);

        productTableBody.appendChild(row);
    });
}
