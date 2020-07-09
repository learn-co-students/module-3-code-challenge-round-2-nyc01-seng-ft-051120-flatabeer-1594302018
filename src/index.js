// // Code here
// As a user, I can:

// - See the first beer's details, including its **name, image, description, and reviews**, when the page loads
// - Change the beer's description and **still see that change when reloading the page**
// - Add a review for the beer (no persistence needed)

document.addEventListener("DOMContentLoaded", function(){

    // console.log("dom loaded")
    getBeers()

});

function getBeers(){
    fetch("http://localhost:3000/beers")
    .then(resp => resp.json())
    // .then(console.log)
    .then(beers => {
        beers.forEach(beer => {
            renderBeers(beer)
        })
    })
}


function renderBeers(beer){
    const beerDetails = document.getElementsByClassName("beer-details")
    let beerDiv = document.createElement('div')
    beerDiv.innerHTML =`
    <h2>${beer.name}</h2>
    <img src =${beer.image_url}>
    <p>${beer.description}</p>
    <ul class="reviews">${beer.reviews}</ul>
    `
    beerDetails.append(beerDiv)
}

// <h2>Beer Name Goes Here</h2>
// <img src="assets/image-placeholder.jpg">

// <form class="description">
//       <textarea>Beer description goes here</textarea>
//       <button>Update Beer</button>
//     </form>

// <h3>Leave a Review</h3>
//     <form class="review-form">
//       <textarea></textarea>
//       <input type="submit" value="Submit">
//     </form>

// <h3>Customer Reviews</h3>
