// API Calling ke liye api ko fetch(url from website) krna hai then function bana ke call kr dena hai
// get all html elements as per need 
const image = document.getElementById("image");
const refresh = document.getElementById("refresh");

function fetchDogeshBhai() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            // display the data here 
            image.src = data.message;
        });
}
// fetchDogeshBhai();

refresh.addEventListener("click", () => {
    fetchDogeshBhai()
})