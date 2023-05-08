const shirtFormHandler = async (event) => {
    event.preventDefault();
    // collects values from shirtform
    const size = document.querySelector('input[name = "mode"]:checked').value.trim();
    const color = document.querySelector('input[name = "color-selection"]:checked').value.trim();
    const address = document.querySelector('#address').value.trim();    
    const apt = document.querySelector('#apt').value.trim();    
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const payment = document.querySelector('input[name = "payment"]:checked').value.trim();


    console.log(size, color)

    if (color && size && city && address && state && zip) {
        const response = await fetch('/api/shirtOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({color, size, address, apt, city, state, zip, payment}),

        });
        if (response.ok) {
            const orderData = await response.json()
            console.log("order data is here: ", orderData.order_number);
            // Changed '/cart' to '/shirtOrder/:id'
            document.location.replace(`/shirtOrder/${orderData.order_number}`)
        } else {
            alert('failed to create post!')
        }
    }
};

document.querySelector('.new-shirt-form').addEventListener('submit', shirtFormHandler);