const APIKey = "AIzaSyCkXdbqqX7D3ekKdfyZJXotX2sGxH_WtMQ";
const SearchText = document.getElementById("searchInput");
const SearchButton = document.getElementById("searchBtn");




const display = (books) => {
    books.map((book) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="container mt-4">
            <div class="row g-4">

                 
                <div class="col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                        <img src=${book.volumeInfo.imageLinks?.thumbnail == undefined ? "No image" : book.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="Book Cover"
                            style="height: 220px; object-fit: cover;">

                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">The Great Adventure</h5>
                            <h6 class="text-muted">by John Doe</h6>

                            <p class="card-text small flex-grow-1">
                                A thrilling journey through unknown lands filled with mystery and excitement.
                            </p>

                            <p class="mb-1"><strong>Genre:</strong> Fiction</p>

                            <a href="#" class="btn btn-outline-primary btn-sm mt-auto">View Details</a>
                        </div>
                    </div>
                </div>

                <!-- Repeat cards dynamically here -->

            </div>`

    })
}
function FetchBooks() {
    const search = SearchText.value;
    const BaseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=${APIKey}`;
    fetch(BaseURL)
        .then((res) => res.json())
        .then((data) => {
            // data.items se map ke through ham sab data ko check karenge then display karenge
            // data.items.map((e) => {
            //     console.log(e.volumeInfo.imageLinks?.thumbnail == undefined ? "No image" : e.volumeInfo.imageLinks.thumbnail)
            //     console.log(e.volumeInfo.title == undefined ? "No Title" : e.volumeInfo.title);// checked 
            //     // console.log(e.volumeInfo.description == undefined ? "No Description" : e.volumeInfo.description);
            //     // console.log(e.volumeInfo.authors == undefined ? "No Author" : e.volumeInfo.authors[0]);
            // })
            console.log(data)
            display(data.items)

        });
}
// FetchBooks();
SearchButton.addEventListener("click", FetchBooks)
// DRIVE JS = https://drive.google.com/drive/folders/1svdd9yY6tk58RNt-bAwYSb-cPaLxnAXG
// const fetchBooks = () => {
// }

// < div class="container mt-4" >
//     <div class="row g-4">

//         <!-- Book Card -->
//         <div class="col-md-4 col-lg-3">
//             <div class="card h-100 shadow-sm">
//                 <img src="book-image.jpg" class="card-img-top" alt="Book Cover"
//                     style="height: 220px; object-fit: cover;">

//                     <div class="card-body d-flex flex-column">
//                         <h5 class="card-title">The Great Adventure</h5>
//                         <h6 class="text-muted">by John Doe</h6>

//                         <p class="card-text small flex-grow-1">
//                             A thrilling journey through unknown lands filled with mystery and excitement.
//                         </p>

//                         <p class="mb-1"><strong>Genre:</strong> Fiction</p>

//                         <a href="#" class="btn btn-outline-primary btn-sm mt-auto">View Details</a>
//                     </div>
//             </div>
//         </div>


//         <!-- Repeat cards dynamically here -->

//     </div>
//     </div >