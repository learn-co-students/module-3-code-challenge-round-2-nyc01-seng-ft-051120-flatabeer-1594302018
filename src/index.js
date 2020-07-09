// Code here
document.addEventListener('DOMContentLoaded', e => {


const fetchBeers=()=> {
    fetch('http://localhost:3000/beers/1')
    .then(resp => resp.json())
    // .then(console.log)
    .then (beers=>{
     renderBeer(beers)
    })
}

fetchBeers()

const renderBeer=beer=>{
    const beerDet = document.getElementsByClassName('beer-details')[0]
    const nameCard = document.querySelector('h2')

    const imageCard = document.querySelector('img')
    const description = document.querySelector('textarea')
    const reviews = document.querySelector('.reviews')
     
    nameCard.textContent = beer.name
    imageCard['src'] = beer.image_url
    description.textContent = beer.description
    reviews.textContent = beer.reviews

}



const addReview = (e) => {
    let form = e.target
    console.log(form)


}



})