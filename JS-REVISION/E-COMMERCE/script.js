const productBox = document.getElementById("Product-Box");
const allProducts = [];
//Add to cart 
async function addToCart(i) {
    // const res = await fetch("https://dummyjson.com/products");
    // const data = await res.json();
    let arr = JSON.parse(localStorage.getItem("carts")) || [];
    arr.unshift(data.allProducts[i]);
    localStorage.setItem("carts", JSON.stringify(arr));
}

// Display Products 
function displayProducts(products) {
    productBox.innerHTML = "";
    products.map((product, i) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card mt-3 m-0"  >
                <img src=${product.images[0]} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-titlem fs-5 fw-bolder">${product.title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">Price : ₹${((product.price) * 93).toFixed(2)}</li>
                    <li class="list-group-item">Category : ${product.category}</li>
                    <li class="list-group-item">Rating : ${product.rating} ⭐</li>
                    <li class="list-group-item">${product.warrantyInformation}</li>
                </ul>
                <div class="card-body">
                    <button onclick= "addToCart(${i})" class="btn btn-warning rounded-3 shadow">Add to cart</button>
                 
                </div>
            </div>`;
        productBox.appendChild(div);
    })

}


// fetch data (API)

async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products"); // put async and await together to handle the delay! 
    const data = await res.json();
    AllProducts = data.products;
    // console.log(data);
    displayProducts(data.products);
}
fetchProducts();


// google form
// https://forms.gle/Jsv28wm3AhmhqfnU9
//SHEET
// https://docs.google.com/spreadsheets/d/1YzSOsGqwZGShudAcGKy_T94W1pfjRxipZB2gdRmAXGI/edit?resourcekey=&gid=2005170337#gid=2005170337