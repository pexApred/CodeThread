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
        const response = await fetch('/api/shirtOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({color, size, city, address, state, zip, apt}),

        });
        if (response.ok) {
            // Changed '/cart' to '/shirtOrder/:id'
            document.location.replace('/shirtOrder/:id')
        } else {
            alert('failed to create post!')
        }
    }
};

document.querySelector('.new-shirt-form').addEventListener('submit', shirtFormHandler);