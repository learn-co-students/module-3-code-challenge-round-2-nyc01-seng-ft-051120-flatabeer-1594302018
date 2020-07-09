// Code here

document.addEventListener("DOMContentLoaded", function(e){

    const beerDetails = document.querySelector(".beer-details")
    const beerDescriptionContainer = document.querySelector(".description")
    const reviewsContainer = document.querySelector(".reviews")
   
    
    function renderBeer(beerObject){
        
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
        //not working bc not splitting by element
      
       
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

    function updateBeer(url, desc){
        fetch(url, {
            method: "PATCH", 
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "description": desc
            })
           
        })
    }

    const updateButton = beerDescriptionContainer.children[1]
    updateButton.addEventListener("submit", function(e){
        e.preventDefault()
        let updateInput = beerDescriptionContainer.children[0].innerText
        console.log(updateInput)
        updateInput.innerText =  "new beer"        //take user input and add as new text

        updateBeer(`http://localhost:3000/beers/${beerId}`, "This is a beer")
    })


    function postReview(url, review){
        fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                "review": review
            })

        })
    }
    
    const reviewForm = document.querySelector(".review-form")
    reviewForm.addEventListener("submit", function(e){
        e.preventDefault()
        const newReview = reviewForm.innerText //user input

        postReview("http://localhost:3000/beers", newReview)
        reviewForm.reset()
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
- add event listener
- change innertext based on user input


3. Add a review for the beer (no persistence needed)
//post on the beer
//create a form

*/