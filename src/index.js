// 7/8 JP Notes: *please see below / at end of file

document.addEventListener("DOMContentLoaded", () => {

/////// GET (data object (which is an AoH of each beer), then render onto screen)

// - See the first beer's details, including its **name, image, description, and reviews**, when the page loads

    const beerDetails = document.getElementsByClassName("beer-details")[0]

    function renderOneBeer(beer){
        // console.log("test1")

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

/////// PATCH - fetch to "http://localhost:3000/beers/beers/[:id]" with updated beer description (value)

// - Change the beer's description and **still see that change when reloading the page**
    // ** will need to send a patch request to update this specific beer object in the database (to persist data /changes)

    function patchBeerDescription(url, updatedDescription){
        fetch(url, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
            // here, we need to turn the JS value (of the description key / within the beer object) into a JSON string
                description: updatedDescription
            })
        })
        console.log("test3")
    }

// we need to add an event listener to the form
    const descriptionForm = document.getElementsByClassName("description")
    const descTextArea = document.getElementById("desc-textarea")

    descriptionForm.addEventListener("click", function(e){
        e.preventDefault() 

        if (e.target.className === "desc-btn"){
            
            const updatedDescription = {
                description: descTextArea.innerText.value
            }
        }
        patchBeerDescription(`http://localhost:3000/${beer.Id}`, updatedDescription)

    })

/////// POST - 

// - Add a review for the beer (no persistence needed)

    function postBeerReview(url, reviewBeingAdded){
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                reviews: reviewBeingAdded
            })
    })

const reviewForm = document.getElementByClassName("review-form")

reviewForm.addEventListener("submit", function(e){
        e.preventDefault()

        if (e.target.className === "review-form-btn")
                    // given more time, I would have used e.target.dataset.*some key name* format

        const newUserReview = {
            review: // grab the content/value that the user typed into the textarea tag 
        }
    
    postBeerReview("http://localhost:3000", newUserReview)
})

// Notes: Apologies again for the computer issues but thank you for bearing with them. 
    // Also: I'm happy to 'talk through' the incomplete sessions above.

