const { Stats } = require("../../models");

const statDataHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/leaderboard/data', {
        method: 'GET',
        body: JSON.parse({username, bestRun}),
    });


    if(response.ok){
     console.log(response);
     

    
    }
}




 async function addToLead (sampleInp) {

document.querySelector('#List').appendChild(sampleInp);

};


document.addEventListener('load',statDataHandler);