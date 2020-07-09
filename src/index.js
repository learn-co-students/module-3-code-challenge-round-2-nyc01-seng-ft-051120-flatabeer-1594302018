// Code here

document.addEventListener('DOMContentLoaded', () => {
    let description = document.querySelector('.description')

    fetch('http://localhost:3000/beers/1')
    .then(resp=> resp.json())
    .then(beer => {
        renderBeer(beer)
    })

    const renderBeer = beer => {
        let beerDetails = document.querySelector('.beer-details')
        let name = beerDetails.childNodes[1]
        name.innerText = beer.name
        let image = beerDetails.childNodes[3]
        image.src = beer.image_url
        // let description = document.querySelector('.description')
        let textArea = description.firstElementChild
        textArea.innerHTML = beer.description
        
        let ulReviews = document.querySelector('.reviews')
        ulReviews.innerHTML =   renderReview(beer.reviews)
        // let comment = document.querySelector('.comments')
        // comment.innerHTML = addComment(image.comments)
    }

    const renderReview = reviews => {
        return reviews.map(r => {
            return `<li>${r.reviews}</li>`
        }).join("")
    }

    description.addEventListener('submit', e => {
        e.preventDefault()
        let form = e.target
        let description = form[0].value
        let beerObj = {
            description: description
        }
        fetch('http://localhost:3000/beers/1', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(beerObj)
        })
    })

    const addComment = () => {
        let reviewForm = document.querySelector('.review-form')
        reviewForm.addEventListener('submit', e => {
            e.preventDefault()

            let form = e.target
            text = form[0].value
            renderReview
        })
        
    }
    addComment()
})


/*
1. See the first beer 's details, including its name, image, description, and reviews, when the page loads
 - fetch one beer
 - 
2. Change the beer 's description and still see that change when reloading the page
3. Add a review for the beer
*/