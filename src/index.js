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
    const nameCard = document.querySelector('h2')
    const imageCard = document.querySelector('img')

}





})