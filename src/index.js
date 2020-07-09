// // Code here
// As a user, I can:

// - See the first beer's details, including its **name, image, description, and reviews**, when the page loads
// - Change the beer's description and **still see that change when reloading the page**
// - Add a review for the beer (no persistence needed)

document.addEventListener("DOMContentLoaded", function(){

    // console.log("dom loaded")
    renderFirstBeer()

});

// function getBeers(){
//     fetch("http://localhost:3000/beers")
//     .then(resp => resp.json())
//     // .then(console.log)
//     .then(beers => renderFirstBeer(beers))
// }


function renderFirstBeer(){
    fetch('http://localhost:3000/beers/1')
    .then(resp => resp.json())
    .then(beer => {
        document.querySelector('h2').textContent=beer.name,
        document.querySelector('img').src=beer.image_url
        document.querySelector('textarea').textContent=beer.description
        const beerUl = document.querySelector('reviews')
        let beerLi = document.createElement('li')
        beerLi.innerHTML = `
        <li>${beer.reviews}</li>`
        beerUl.append(beerLi)
    })
    // then show the first beer details, 
    // list the name, 
    // display the Image, 
    // show the description , 
    // and list the reviews
    
}


