document.addEventListener("DOMContentLoaded", () => {
    getBeer()
    changeDescription()
})
let beerDetail = document.querySelector('.beer-details')
// let reviewUl = document.querySelector('.reviews')

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
          <button class='update-description'>Update Beer</button>
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
    let reviewUl = document.querySelector('.reviews')

    beer.reviews.forEach(function(r){
        let reviewLi = document.createElement('li')
        reviewLi.innerText = `${r}`
       reviewUl.append(reviewLi)

    })
}

function changeDescription(){
    let descriptionForm = document.querySelector('.description')
    let descriptionContent = descriptionForm.firstChild.nextElementSibling.textContent
    // console.log(descriptionContent)
    document.addEventListener('click', function(e){
        if(e.target.className === 'update-description'){
            e.preventDefault()
            console.log(e.target)
        }
    })
    // fetch("http://localhost:3000/beers/1", {
    //     method: "PATCH",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         description: descriptionContent
    //     })
    // })
    
}