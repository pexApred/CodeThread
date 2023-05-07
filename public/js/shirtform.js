const shirtFormHandler = async (event) => {
    event.preventDefault();
    // collects values from shirtform
    const size = document.querySelector('input[name = "mode"]:checked').value.trim();
    const color = document.querySelector('input[name = "color-selection"]:checked').value.trim();
    const city = document.querySelector('#city').value.trim();
    const address = document.querySelector('#address').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const apt = document.querySelector('#apt').value.trim();

    console.log(size, color)

    if (color && size && city && address && state && zip) {
        const response = await fetch('/api/cart', {
            method: 'POST',
            body: JSON.stringify({color, size, city, address, state, zip, apt}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/cart')
        } else {
            alert('failed to create post!')
        }
    }
};

document.querySelector('.new-shirt-form').addEventListener('submit', shirtFormHandler);