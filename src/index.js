// Code here

document.addEventListener("DOMContentLoaded", function(e){

    const beerDetails = document.querySelector(".beer-details")
    const beerDescriptionContainer = document.querySelector(".description")
    const reviewsContainer = document.querySelector(".reviews")
   
    
    
    function renderBeer(beerObject){
        let beerName = beerDetails.children[0]
        beerName.innerHTML = `${beerObject.name}`
        let beerImage = beerDetails.children[1]
        beerImage.inerHTML = `${beerObject.image_url}`
        let description = beerDescriptionContainer.children[0]
        description.innerHTML = `${beerObject.description}`
        // reviewsContainer.innerHTML = 
        //iterate inside reviews container and add li for each review  
    }

    // const reviewsArray = `${beerObject.reviews}`
    // function reviewsList(array){
    //     array.forEach(element => {
    //         let elementDiv = document.create("li")
    //         elementDiv.innerText = element
    //         reviewsContainer.append(element)
    //     })
    // }

    function renderBeers(beerData){
        beerData.forEach(beer =>{
            renderBeer(beer)
        })
    }

    function fetchBeer(url){
        fetchBeer(url)
        .then(resp => resp.json())
        .then(beerData => {
            renderBeers(beerData)
        })
    }
    fetchBeer("http://localhost:3000/beers")


    

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
//patch on the description

3. Add a review for the beer (no persistence needed)
//post on the beer

*/