const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect vslues from the login form
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {
        //send a POST request to the API endpoint
        const response = await fetch('/api/login/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
        });

        if (response.ok) {
            // If successful, redirect the browser to the game page 
            //May need to edit this code based on the game routing
            document,location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    const email = document.querySelector('#signupEmail').value.trim();
    const username = document.querySelector('#signupUsername').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (email && username && password) {
        //send a POST request to the API endpoint
        const response = await fetch ('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the game page 
            //May need to edit this code based on the game routing
            document.location.replace('/game')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
