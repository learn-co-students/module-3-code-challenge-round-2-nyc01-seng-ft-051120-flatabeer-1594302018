// Code here
document.addEventListener("DOMContentLoaded", () => {

    Base_URL = "http://localhost:3000/beers"
fetchBeer()
updateDescription()
submitReview()

    function fetchBeer() {
        fetch(`${Base_URL}/1`)
        .then(resp => resp.json())
        .then(beer => getBeer(beer))
    }

    function getBeer(beer){
        document.querySelector(".beer-details")
        h2 = document.querySelector("h2")
        description = document.querySelector("#beer-desc")
        image = document.querySelector('img')
        reviews = document.querySelector('.reviews')
        beer.reviews.forEach(review => {
            let li = document.createElement('li')
            li.append(review)
            reviews.append(li)
        })
        h2.innerText = beer.name
        image.src = beer.image_url
        description.innerText = beer.description
        

    }

    function updateDescription(){
        document.addEventListener("submit", e => {
            e.preventDefault()
            if(e.target.className === "description"){
                descText = document.querySelector("#beer-desc")
            
                fetch(`${Base_URL}/1`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({ description: descText.value })
                })

            }
            

            

        })
    }

    function submitReview() {
        document.addEventListener("submit", e => {
            e.preventDefault()
            // console.dir(e.target)
            if(e.target.className === "review-form"){
                console.log = e.target[0].value

            }

        })

    }






})