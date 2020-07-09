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

patchBeer = (id, object , callback = renderBeerDetails) => {
  var requestOptions = {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(object)
  };

fetch(`${BEERS_URL}/${id}`, requestOptions)
  .then(response => response.json())
  .then(json => callback(json))
  .catch(error => console.log('error', error));
}

renderReview = json => {
  console.log('render', json.reviews[0]);
  
  beerReviewsList.insertAdjacentHTML("beforeend", `
    <li>${json.reviews.reverse()[0]}</li>
  `)
}

beerDetails.addEventListener('click', e => {
  if (e.target.matches("button")) {
    e.preventDefault()
    const beer = {
      description: beerDescriptionForm.firstElementChild.value,
    }
    patchBeer(1, beer)
  }

  if (e.target.matches("input")) {
    e.preventDefault()

    const reviews = Array.from(beerReviewsList.children).map(li => { return li.innerText});
    const beerReviewformText = beerReviewForm.firstElementChild.value;
    reviews.push(beerReviewformText)
    const beer = {
      reviews
    }
    patchBeer(1, beer, renderReview) 
  }
})

getBeer(1, renderBeerDetails)


