// Code here
BASE_URL="http://localhost:3000"
BEERS_URL=`${BASE_URL}/beers`

const beerDetails = document.querySelector('.beer-details');
const beerName = document.querySelector('h2');
const beerImage = beerDetails.querySelector('img');
const beerDescriptionForm = beerDetails.querySelector('.description');
const beerReviewForm = beerDetails.querySelector('.review-form');
const beerReviewsList = beerDetails.querySelector('.reviews');



getBeer = (id, callback) => {  
  let requestOptions = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  fetch(`${BEERS_URL}/${id}`, requestOptions)
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.log('error', error));
}

renderBeerDetails = json => {
  beerName.innerText = json.name;
  beerImage.src = json.image_url;
  beerReviewsList.innerHTML = "";
  beerDescriptionForm.firstElementChild.value = json.description;
  json.reviews.map(review => {
    beerReviewsList.innerHTML += `
    <li>${review}</li>
    `
  });
}

patchBeer = (id, callback = renderBeerDetails) => {
  const beer = {
    description: beerDescriptionForm.firstElementChild.value,
  }
  var requestOptions = {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      description: beer.description
    })
  };

fetch(`${BEERS_URL}/${id}`, requestOptions)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log('error', error));
}

renderReview = json => {
  beerReviewsList.insertAdjacentHTML("afterbegin", `
    <li>${json.reviews[0]}</li>
  `)
}

beerDetails.addEventListener('click', e => {
  if (e.target.matches("button")) {
    e.preventDefault()
    patchBeer(1)
  }

  if (e.target.matches("input")) {
    e.preventDefault()
    patchBeer(1, renderReview) 
  }
})

getBeer(1, renderBeerDetails)


