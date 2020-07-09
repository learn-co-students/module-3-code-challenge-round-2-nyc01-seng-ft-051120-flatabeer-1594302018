document.addEventListener("DOMContentLoaded", () => {
    getBeer()
    // addReview()
    // changeDescription()
})
// let descriptionForm = document.querySelector('.description')
// let beerDetail = document.querySelector('.beer-details')

// let reviewForm = document.querySelector('.review-form')



// let descriptionContent = descriptionForm.text
// let descriptionText = descriptionForm.firstChild.nextElementSibling
// console.log(description)
// let descriptionContent = descriptionText.value
// let reviewUl = document.querySelector('.reviews')

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
          <textarea name='description-text' class='dec-text'>${beer.description}</textarea>
          <button class='update-description'>Update Beer</button>
        </form>

        <h3>Leave a Review</h3>
        <form class="review-form">
          <textarea name='reviews'></textarea>
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

// function addReview(){
    
//     console.log(reviewForm)
    
// }

document.addEventListener('submit', function(e){
    let reviewForm = document.querySelector('.review-form')
    if(e.target.className === 'review-form'){
        e.preventDefault()
        let newReview = reviewForm.reviews
        console.log(newReview)
    }
 
})


// function changeDescription(){
//     // let descriptionForm = document.querySelector('.description')
//     // let descriptionContent = descriptionForm.firstChild.nextElementSibling.textContent
//     // console.log(descriptionContent)

//     document.addEventListener('submit', function(e){
//         e.preventDefault()
//         if(e.target.className === 'update-description'){
//             // e.preventDefault()
//             // console.log(descriptionForm)

//             fetch("http://localhost:3000/beers/1", {
//                 method: "PATCH",
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     description: descriptionForm.tex.value
//                 })
//             })
//             .then(resp => resp.json())
//             .then(review => renderNewReview(review))
//             // .then(review => descriptionContent=`${review}`)
//         }
//     })


//     // document.addEventListener('submit', function(e){
//     //     if(e.target.className === 'update-description'){
//     //         e.preventDefault()

//     //         fetch("http://localhost:3000/beers/1", {
//     //             method: "PATCH",
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //                 'Accept': 'application/json'
//     //             },
//     //             body: JSON.stringify({
//     //                 description: descriptionContent
//     //             })
//     //         })
//     //         .then(resp => resp.json())
//     //         // .then(review => renderNewReview(review))
//     //         .then(review => descriptionContent=review)
//     //     }
//     // })
// }

// function renderNewReview(review){
//     let beerDescription = document.querySelector('.dec-text')
//     beerDescription.innerText = `${review}`

// }