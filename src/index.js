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
    <li class="beer-review">${review}</li>
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
  .then(res => res.json())
  .then(json => callback(json))
  .catch(error => console.log('error', error));
}

renderReview = json => {
  console.log('render', json.reviews[0]);
  
  beerReviewsList.insertAdjacentHTML("beforeend", `
    <li class="beer-review">${json.reviews.reverse()[0]}</li>
  `);
}

beerDetails.addEventListener('click', e => {
  if (e.target.matches("#update-beer-desription")) {
    e.preventDefault()
    const description = beerDescriptionForm.firstElementChild.value;
    const beer = { description };
    patchBeer(1, beer);
  }
  else if(e.target.matches("#submit-review")) {
    e.preventDefault()
    const reviews = Array.from(beerReviewsList.children).map(li => li.innerText);
    const beerReviewformText = beerReviewForm.firstElementChild.value;
    reviews.push(beerReviewformText);
    const beer = { reviews };
    patchBeer(1, beer, renderReview) ;
  } 
  else if(e.target.matches(".beer-review")) {
    e.target.remove();
    const reviews = Array.from(beerReviewsList.children).map(li => li.innerText);
    const beerObject = { reviews };
    patchBeer(1, beerObject);
  }
})

getBeer(1, renderBeerDetails);


