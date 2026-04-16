// Display Products 
function displayProducts() {
    div.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `  <div class="card p-0" style="width: 18rem;">
                <img src="https://www.rachanacraft.com/images/product-06.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card’s content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>`
}


// fetch data (API)

async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products"); // put async and await together to handle the delay! 
    const data = await res.json();
    console.log(data);
    displayProducts();
}
fetchProducts();