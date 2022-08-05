const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    const email = document.querySelector('#signupEmail').value.trim();
    const username = document.querySelector('#signupUsername').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (email && username && password) {
        //send a POST request to the API endpoint
        const response = await fetch ('/api/login/signup', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the game page 
            //May need to edit this code based on the game routing
            document.location.replace('/game')
        } else {
            alert('Please be sure to include an email, username, and password');
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
    .querySelector('#signup-tab')
    .addEventListener('click', viewSignupForm);   

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
