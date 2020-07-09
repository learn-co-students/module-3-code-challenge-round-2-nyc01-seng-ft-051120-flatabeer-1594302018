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

/////// PATCH - fetch to "http://localhost:3000/beers/beers/[:id]" with updated beer description

// - Change the beer's description and **still see that change when reloading the page**
    // ** will need to send a patch request to update this specific beer object in the database (to persist data /changes)

    function patchBeerDescription(url, updatedDescription){
        fetch(url), {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
            // here, we need to turn the JS value (of the description key / within the beer object) into a JSON string
                description: updatedDescription
            })
        }
        console.log("test3")
    }

// we need to add an event listener to the form and conditional around the button (update beer)

    const descriptionForm = document.getElementsByClassName("description")

    descriptionForm.addEventListener("click", function(e) => {
        


    })


    // patchBeerDescription()

    // function updateBeerDescription()


})

