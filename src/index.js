document.addEventListener("DOMContentLoaded", () => {

    // - See the first beer's details, including its **name, image, description, and reviews**, when the page loads


    function renderOneBeer(beer){
        // console.log("test1")

        const beerDetails = document.getElementsByClassName("beer-details")[0]

        const beerInfo = document.createElement('p')
        beerInfo.innerHTML = `
                                <h2>${beer.name}</h2>
        `
        beerDetails.append(beerInfo)
        console.log("test2")
    }

    function renderAllBeers(beers){
        beers.forEach(beer => {renderOneBeer(beer)})
    }

    function fetchBeers(url){
        fetch(url)
        .then(resp => resp.json())
        .then(beersObject => renderAllBeers(beersObject))
        .catch(error => (console.log(error)))
    }
    fetchBeers("http://localhost:3000/beers")

/////// 

// - Change the beer's description and **still see that change when reloading the page**



})

