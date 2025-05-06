async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}

function displayProducts(products) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear previous results

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

document.getElementById("search-bar").addEventListener("input", async (event) => {
    const query = event.target.value.toLowerCase();
    const products = await fetchProducts();

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query)
    );

    displayProducts(filteredProducts);
});

document.getElementById("search-bar").addEventListener("input", async (event) => {
    const query = event.target.value.toLowerCase();
    const products = await fetchProducts();

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query)
    );

    displayProducts(filteredProducts);
});
