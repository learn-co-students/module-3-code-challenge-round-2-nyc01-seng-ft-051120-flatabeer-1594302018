document.addEventListener("DOMContentLoaded", () => {
    getBeer()
})
let beerDetail = document.querySelector('.beer-details')
let reviewUl = document.querySelector('.reviews')

function getBeer(){
    fetch("http://localhost:3000/beers/1")
    .then(resp => resp.json())
    // .then(console.log)
    .then(beer => render(beer))
}

function render(beer){
    beerDetail.innerHTML =`
    <h2>${beer.name}</h2>
        <img src="${beer.image_url}">

        <form class="description">
          <textarea>${beer.description}</textarea>
          <button>Update Beer</button>
        </form>

        <h3>Leave a Review</h3>
        <form class="review-form">
          <textarea></textarea>
          <input type="submit" value="Submit">
        </form>

        <h3>Customer Reviews</h3>
        <ul class="reviews">
        </ul>
    `
    beer.reviews.forEach(function(r){
        let reviewLi = document.createElement('li')
        reviewLi.

    })
}

