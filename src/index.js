// Code here
document.addEventListener("DOMContentLoaded", () => {

    Base_URL = "http://localhost:3000/beers"
fetchBeer()

    function fetchBeer() {
        fetch(`${Base_URL}/1`)
        .then(resp => resp.json())
        .then(beer => getBeer(beer))
    }

    function getBeer(beer){
        document.querySelector(".beer-details")
        h2 = document.querySelector("h2")
        image = document.querySelector('img')
        console.log(image)
        h2.innerText = beer.name
        image.src = beer.img_url

        
    }




})