const cartsDiv = document.getElementById("cart-div");
// remove items 
function removeItem(i) {
    let arr = JSON.parse(localStorage.getItem("carts")) || [];// get data
    arr.splice(i, 1);// delete
    localStorage.setItem("carts", JSON.stringify(arr));// update 
    displayCartsProducts();
}

// Display Carts Products 
function displayCartsProducts() {
    cartsDiv.innerHTML = "";
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    carts.map((e, i) => {
        const div = document.createElement("div");
        div.innerHTML = ` <div class="d-flex flex-column align-items-center">
            <div class="card mb-3 m-2" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${e.images[0]} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-titlem fs-5 fw-bolder">${e.title}</h5> 
                 <ul class="list-group list-group-flush">        
                <li class="list-group-item fs-5">Price : ₹${((e.price) * 93).toFixed(2)}</li>
                    <li class="list-group-item">Category : ${e.category}</li>
                    <li class="list-group-item">Rating : ${e.rating} ⭐</li>
                    <li class="list-group-item">${e.warrantyInformation}</li>
                 </ul>
               <div class = "text-end"> <button onclick="removeItem(${i})" class = "btn btn-danger rounded-3 shadow">Remove</button></div>
                    </div>
                </div>
            </div>
        </div>`
        cartsDiv.appendChild(div);
    });

}


displayCartsProducts();