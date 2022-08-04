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

function showHighScores()
{    
    
    var placeheld = [];
     placeheld.sort();
    var leaderlist =  document.querySelector('#List');
    for(var i = 0, len = setHighscoreLength();i < len;)
    {
        var leaderlist =  document.querySelector('#List');
        var listItem = document.createElement('li');
        listItem.innerText = '';
        leaderlist.appendChild(listItem);

    }
}

function setHighscoreLength()
{ 
    x = 3;
  if(x < 10)
  {
      return x;
  }

  else{

    return 10;
  }

}


function addToLead (sampleInp) {

document.querySelector('#List').appendChild(sampleInp);

};


document.addEventListener('click',statDataHandler);