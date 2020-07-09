// Code here
document.addEventListener("DOMContentLoaded", () => {

    Base_URL = "http://localhost:3000/beers"
fetchBeer()
updateDescription()

    function fetchBeer() {
        fetch(`${Base_URL}/1`)
        .then(resp => resp.json())
        .then(beer => getBeer(beer))
    }

    function getBeer(beer){
        document.querySelector(".beer-details")
        h2 = document.querySelector("h2")
        description = document.querySelector("#beer-desc")
        image = document.querySelector('img')
        reviews = document.querySelector('.reviews')
        h2.innerText = beer.name
        image.src = beer.image_url
        description.innerText = beer.description
        reviews.innerText = beer.reviews
    }

    function updateDescription(){
        document.addEventListener("submit", e => {
            e.preventDefault()
            
            let descForm = e.target
            let newDesc = descForm.

        })
    }






})