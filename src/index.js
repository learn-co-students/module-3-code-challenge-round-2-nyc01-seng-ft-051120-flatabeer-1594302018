// Code here

document.addEventListener("DOMContentLoaded", function(e){

    const beerDetails = document.querySelector(".beer-details")
    
    function renderBeer(beerObject){
        const beerId = 1  // could also be `${beerObject.id}` if we didn't know it was the first beer
        let beerName = beerDetails.children[0]
        beerName.innerHTML = `${beerObject.name}`
        let beerImage = beerDetails.children[1]
        beerImage.inerHTML = `${beerObject.image_url}`
        
    }


    function fetchBeer(url){
        fetchBeer(url)
        .then(resp => resp.json())
        .then(beerObject => {
            renderBeer(beerObject)
        })
    }
    fetchBeer("http://localhost:3000/beers/1")


    






})


/*
1. See the first beer's details, including its 
name, image, description, and reviews, when the page loads
 - grab beer details container for name and image
    -interpolate name
    -interpolate image
 - grab beer description form and interpolate description
 - find and isolate reviews ul
    -populate reviews ul with reviews from db



2. Change the beer's description and still see that change when reloading the page

3. Add a review for the beer (no persistence needed)

*/