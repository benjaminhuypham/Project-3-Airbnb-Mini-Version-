listings_url = "http://localhost:3000/listings"
reservations_url = "http://localhost:3000/reservations"

fetch(listings_url)
    .then(response => response.json())
    .then(displayListings)

function displayListings(listings){    
    const $ul = document.querySelector('.listings')
    listings.forEach(listing => {
        const $li = document.createElement('li')
        $li.className = 'listing'

        $li.innerHTML = `
        <h3>${listing.neighborhood}</h3>
        <p>$${listing.price}</p>
        <p>${listing.number_of_reviews} reviews</p>
        <p>${listing.latitude}</p>
        <p>${listing.longitude}</p>
    `
        $ul.appendChild($li)
    })
    const $form = document.querySelector('form')
    console.log($form)
    $form.addEventListener('submit', event => {
        event.preventDefault()
        $ul.textContent = ""
        const formData = new FormData(event.target)
        console.log(formData)
        const listFilter = [] 
        listFilter.push(listings.filter(listing => {
            return listing.neighborhood.toLowerCase() === formData.get("neighborhood").toLowerCase()
        }))

        console.log(listFilter)

        listFilter.flat().forEach(listing => {
            const $li = document.createElement('li')
            $li.className = 'listing'
            $li.innerHTML = `
                <h3>${listing.neighborhood}</h3>
                <p>$${listing.price}</p>
                <p>${listing.number_of_reviews} reviews</p>
                <p>${listing.latitude}</p>
                <p>${listing.longitude}</p>
            `
            $ul.appendChild($li)
        })
        console.log($ul)
    })
}

