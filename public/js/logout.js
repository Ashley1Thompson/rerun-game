const logout = async () => {
    const response = await fetch('/api/login/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response,ok) {
        document.location.replace('/');
    } else {
        alert('You have successfully been signed out. Thank you for playing and come back soon!');
    }
};

document.querySelector('#logout').addEventListener('click', logout);