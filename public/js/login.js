const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect vslues from the login form
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {
        //send a POST request to the API endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the game page 
            //May need to edit this code based on the game routing
            document.location.replace('/game');
        } else {
            alert('Incorrect username or password. Please try again.')
        }
    }
};

const viewSignupForm = async (event) => {
    event.preventDefault();
    document.location.replace('/signup')
};

const viewLoginForm = async (event) => {
    event.preventDefault();
    document.location.replace('/')
};

document
    .querySelector('#login-tab')
    .addEventListener('click', viewLoginForm); 

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('#signup-tab')
    .addEventListener('click', viewSignupForm);   


