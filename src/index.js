// // Code here
// As a user, I can:

// - See the first beer's details, including its **name, image, description, and reviews**, when the page loads
// - Change the beer's description and **still see that change when reloading the page**
// - Add a review for the beer (no persistence needed)

document.addEventListener("DOMContentLoaded", function(){

    // console.log("dom loaded")
    getBeers()

});

const URL = "http://localhost:3000/beers"

function getBeers(){
    fetch(URL)
    .then(resp => resp.json())
    // .then(console.log)
    .then(beers =. {
        beers.forEach(beer => {
            renderBeers(beer)
        })
    })
}
function renderBeers(beer){
    let beerDiv = document.querySelector("beer-details")
    beerDiv.innerHTML =`
    `
    
}
