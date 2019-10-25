const hosts_url = "http://localhost:3000/hosts"
const guests_url = "http://localhost:3000/guests"

const $form = document.querySelector('form')
$form.addEventListener('submit', event => {
    console.log($form)
    event.preventDefault()
    const formData = new FormData(event.target)
    const guest = {
        name: formData.get('username'),
        email: formData.get('email'),
        phone_number: formData.get('phone_number'),
        comment: "" 
    }

    fetch(guests_url, {
        method: "POST", 
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(guest)
    })
})


