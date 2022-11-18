const renderGame = async (event) => {
    event.preventDefault();

    console.log("this button works!... kinda")
    if (session.loggedIn) {
        document.location.replace('/game')
    } else {
        document.location.replace('/')
    }
}

document.querySelector('#lost-ark')
    .addEventListener('click', renderGame)