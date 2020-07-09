// Code here
document.addEventListener('DOMContentLoaded', e => {


const fetchBeers=()=> {
    fetch('http://localhost:3000/beers/[:id]')
    .then(resp => resp.json())
    .then (beers=>{
        beers.forEach(beer=> {
            renderBeer(beer)
        });
    })
}

const renderBeer=beer=>{
    const beerDet = document.getElementsByClassName('beer-details')[0]
    const nameCard = document.querySelector('h2')
    const imageCard = document.querySelector('img')
     
    nameCard.textContent = ${beer.name}
    beerDet.appendChild(nameCard)

}





})