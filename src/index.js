document.addEventListener("DOMContentLoaded", () => {

    // - See the first beer's details, including its **name, image, description, and reviews**, when the page loads

    function fetchBeers(url){
        fetch(url)
        .then(resp => resp.json())
        .then(beersObject => renderBeers(beersObject))
    }
    fetchBeers("http://localhost:3000/beers")



})