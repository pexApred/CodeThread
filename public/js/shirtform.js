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
            console

        });
        if (response.ok) {
            // Changed '/cart' to '/shirtOrder/:id'
            document.location.replace('/shirtOrder/:id')
        } else {
            alert('failed to create post!')
        }
    }
};

// Trying to mimic 'delButtonHandler' from Mini Project in Module 14 (looking at 'profile.js' and 'profile.handlebars' from Mini Project) ---> Not sure if this will fix the shirtOrder route once user clicks "Add to Cart"???
const cartButtonHandler = async (event) => {
    if (event.target.hasAttribute('orderData-id')) {
      const id = event.target.getAttribute('orderData-id');
  
      const response = await fetch(`/api/shirtOrder/${id}`, {
        method: 'POST',
      });
  
      if (response.ok) {
        document.location.replace('/shirtOrder');
      } else {
        alert('Failed to post shirt order!');
      }
    }
  };

document.querySelector('.new-shirt-form').addEventListener('submit', shirtFormHandler);

document
  .querySelector('.cart-order').addEventListener('click', cartButtonHandler);