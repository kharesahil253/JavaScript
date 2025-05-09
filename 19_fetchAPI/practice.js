const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/products")
            .then(response => {
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

// Calling the function and handling the Promise
fetchProducts()
    .then(products => console.log("Products:", products))
    .catch(error => console.error("Error fetching products:", error));

// const fetchData= async ()=>{
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     console.log(data);
// };
// fetchData();