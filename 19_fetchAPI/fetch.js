document.addEventListener("DOMContentLoaded", () => {
    //Domcontentloaded is used for html has loaded this code runs afterwards
    const productsContainer = document.getElementById("products");
    // Targetting all products by their id 
    const searchBar = document.getElementById("searchBar");
    // Targetting the serach input box

    //Using async await 
    async function fetchProducts() {
        //try catch for error handling from the api 
        try {
            //in resolve fetching the api 
            const resolve = await fetch("https://dummyjson.com/products");
            // in result changing the code to js objects
            const result = await resolve.json();
            //calling the function to get product all details 
            displayProducts(result.products);
        } catch (error) {
            //Error Handling
            console.error("Error fetching data:", error);
        }
    }

    function displayProducts(products) {
        //setting their elements to a clear
        productsContainer.innerHTML = "";
        products.forEach(product => {
            //creating element div
            const productElement = document.createElement("div");
            //adding class product
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description.slice(0, 50)}...</p>
                <strong>$${product.price}</strong>
            `;
            //appending the child to show on list
            productsContainer.appendChild(productElement);
        });
    }

    searchBar.addEventListener("input", () => {
        //searchinput to a lowercase
        const searchTerm = searchBar.value.toLowerCase();
        //selecting the product class applying foreach to traverse on each product 
        document.querySelectorAll(".product").forEach(product => {
            const title = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });

    fetchProducts();
});

