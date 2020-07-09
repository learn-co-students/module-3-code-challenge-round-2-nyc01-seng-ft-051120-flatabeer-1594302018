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
    console.log(nameCard)
    const imageCard = document.querySelector('img')
     
    nameCard.textContent = beer.name
    beerDet.appendChild(nameCard)

}





})