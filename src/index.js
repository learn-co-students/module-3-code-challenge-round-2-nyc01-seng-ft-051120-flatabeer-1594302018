document.addEventListener("DOMContentLoaded", () => {
    getBeer()
})


function getBeer(){
    
    fetch("http://localhost:3000/beers/1")
    .then(resp => resp.json())
    // .then(console.log)
    .then(beer => render(beer))
}

function render(beer){
    let beerDetail = document.querySelector('.beer-details')
    beerDetail.innerHTML =`
    <h2>${beer.name}</h2>
        <img src="${beer.image_url}">

        <form class="description">
          <textarea name='tex' class='hi'>${beer.description}</textarea>
          <button class='update-description'>Update Beer</button>
        </form>

        <h3>Leave a Review</h3>
        <form class="review-form">
          <textarea name='reviews'>write something</textarea>
          <input type="submit" value="Submit">
        </form>

        <h3>Customer Reviews</h3>
        <ul class="reviews">
        </ul>
    `
    let reviewUl = document.querySelector('.reviews')

    document.addEventListener('submit', function(e){
        let reviewForm = document.querySelector('.review-form')
        if(e.target.className === 'review-form'){
            e.preventDefault()
            let newReview = reviewForm.reviews.value
            let newReviewLi = document.createElement('li')
            newReviewLi.innerHTML = `
            ${newReview}
            `
            reviewUl.append(newReviewLi)
        }
     
    })

    document.addEventListener('submit', function(e){
        let descriptionForm = document.querySelector('.description')
        if(e.target.className === 'description'){
            e.preventDefault()
            // console.log(descriptionForm)

            fetch("http://localhost:3000/beers/1", {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    description: descriptionForm.tex.value
                })
            })
        }
    })

    beer.reviews.forEach(function(r){
        let reviewLi = document.createElement('li')
        reviewLi.innerText = `${r}`
       reviewUl.append(reviewLi)
    })
}

