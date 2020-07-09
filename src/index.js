// Code here

document.addEventListener("DOMContentLoaded", function(e){

    const beerDetails = document.querySelector(".beer-details")
    const beerDescriptionContainer = document.querySelector(".description")
    const reviewsContainer = document.querySelector(".reviews")
   
    
    function renderBeer(beerObject){
        console.log(beerObject.image_url)
        let beerName = beerDetails.children[0]
        beerName.innerHTML = `${beerObject.name}`
        let beerImage = beerDetails.children[1]
        beerImage.innerHTML = `${beerObject.image_url}`
        let description = beerDescriptionContainer.children[0]
        description.innerHTML = `${beerObject.description}`
        // reviewsContainer.innerHTML = 
        //iterate inside reviews container and add li for each review  

        const reviewsArray = `${beerObject.reviews}`
        let splitArr = reviewsArray.split(" ")
        console.log(reviewsArray)
       
        for(let i = 0; i < reviewsArray.length; i++){
            let review = reviewsArray[i]
            
            const elementDiv = document.createElement("li")
            elementDiv.innerText = review
            reviewsContainer.append(elementDiv)
        }

    }

    

    // function renderFirstBeer(beerData){
    //     console.log(beerData)
    //     beerData.forEach(beer => {
    //         renderBeer(beer)
    //     })
        
    // }

    function fetchBeer(url){
        fetch(url)
        .then(resp => resp.json())
        .then(beerData => {
            renderBeer(beerData)
        })
    }
    fetchBeer("http://localhost:3000/beers/1")

    const updateButton = beerDescriptionContainer.children[1]
    updateButton.addEventListener("submit", function(e){
        e.preventDefault()
        let updateInput = beerDescriptionContainer.children[0]
        updateInput.innerText =                 //take user input and add as new text

    })

    

})


/*
1. See the first beer's details, including its 
name, image, description, and reviews, when the page loads
 - grab beer details container for name and image
    -interpolate name - DONE
    -interpolate image
 - grab beer description form and interpolate description - DONE 
 - find and isolate reviews ul
    -populate reviews ul with reviews from db



2. Change the beer's description and still see that change when reloading the page
//patch on the description

- grab update beer button


3. Add a review for the beer (no persistence needed)
//post on the beer

*/