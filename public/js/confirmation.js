const viewProfile = async () => {
    const response = await fetch('/profile', {
      method: 'GET',
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#viewprofile').addEventListener('click', viewProfile);